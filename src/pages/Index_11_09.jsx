import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Brain, Shield, Zap, CheckCircle, Heart, Users, Award, Beaker, Clock } from "lucide-react";
import cerebroproteinProduct from "@/assets/cerebroprotein_image.png";
import Swal from "sweetalert2";
import axios from "axios";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  const [errors, setErrors] = useState({});
  const [countries, setCountries] = useState([]); // ⬅ Added
  const [states, setStates] = useState([]); // ⬅ Added
  const [showTooltip, setShowTooltip] = useState(false);
  const [showCvv, setShowCvv] = useState(false);
  const [cvvValid, setCvvValid] = useState(false);
  const [cardExpiryValid, setCardExpiryValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    product: "",
    full_name: "",
    phone: "",
    email: "",
    dob: "",
    gender: "",
    address: "",
    country: "",
    state: "",
    city: "",
    postal: "",
    physician_name: "",
    clinic_name: "",
    clinic_city: "",
    clinic_mobile: "",
    allergies: "",
    terms: false,
    payment_option: "Insulinhub already has my payment information",
    card_name: "",
    card_number: "",
    card_expiry: "",
    card_cvv: "",
  });

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // small delay to ensure DOM is ready
      }
    }
  }, [location]);

  // ⬇️ Fetch countries on mount
  useEffect(() => {
    axios
      .get("https://insulinhub.com/api/countries")
      .then((res) => setCountries(res.data))
      .catch((err) =>
        console.error("Failed to fetch countries", err)
      );
  }, []);

  const validateForm = () => {
    let newErrors = {};

    if (!formData.product) newErrors.product = "Product selection is required";
    if (!formData.full_name) newErrors.full_name = "Full name is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.dob) newErrors.dob = "Date of birth is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.postal) newErrors.postal = "Postal code is required";
    if (!formData.terms) newErrors.terms = "You must accept the terms";
    if (formData.payment_option === "Visa Or Mastercard") {
      if (!formData.card_name) newErrors.card_name = "Cardholder name is required";
      if (!formData.card_number) {
        newErrors.card_number = "Card number is required";
      } else if (!/^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/.test(formData.card_number.replace(/\s+/g, ''))) {
        newErrors.card_number = "Enter a valid 16-digit card number";
      }

      if (!formData.card_expiry) {
        newErrors.card_expiry = "Expiry date is required.";
      } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.card_expiry)) {
        newErrors.card_expiry = "Enter expiry in MM/YY format";
      } else {
        // Future date validation
        const [monthStr, yearStr] = formData.card_expiry.split('/');
        const inputMonth = parseInt(monthStr, 10);
        const inputYear = parseInt('20' + yearStr, 10); // YY to YYYY

        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1; // 0-indexed
        const currentYear = currentDate.getFullYear();

        if (inputYear < currentYear || (inputYear === currentYear && inputMonth < currentMonth)) {
          newErrors.card_expiry = "Please enter a future expiry year";
        }
      }


      if (!formData.card_cvv) {
        newErrors.card_cvv = "CVV is required.";
      } else if (!/^\d{3}$/.test(formData.card_cvv)) {
        newErrors.card_cvv = "CVV must be 3 digits";
      }
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    const numericFields = ["phone", "clinic_mobile"];
    if (numericFields.includes(id)) {
      const onlyNumbers = value.replace(/\D/g, ""); // Remove non-digit characters
      setFormData((prev) => ({
        ...prev,
        [id]: onlyNumbers,
      }));
      return;
    }
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };
  const handleRadioChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Show tooltip if user has typed anything
    if (value.length > 0) {
      setShowTooltip(true);
    }
  };

  const isValidCardNumber = (cardNumber) => {
    const digits = cardNumber.replace(/\s+/g, "");

    if (digits.length !== 16) return false; // Must be 16 digits

    let sum = 0;
    for (let i = 0; i < 16; i++) {
      let digit = parseInt(digits.charAt(15 - i), 10);

      if (i % 2 === 1) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }

      sum += digit;
    }

    return sum % 10 === 0;
  };

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove all non-digits

    if (value.length > 16) {
      value = value.slice(0, 16);
    }

    const formatted = value.replace(/(.{4})/g, "$1 ").trim();

    setFormData((prev) => ({
      ...prev,
      card_number: formatted
    }));

    // Luhn validation
    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      if (value.length === 16) {
        if (isValidCardNumber(formatted)) {
          delete updatedErrors.card_number;
        } else {
          updatedErrors.card_number = "Invalid card number";
        }
      } else {
        updatedErrors.card_number = "Card number must be 16 digits";
      }
      return updatedErrors;
    });
  };

  const handleCardExpiryChange = (e) => {

    let value = e.target.value.replace(/\D/g, ''); // Remove non-digits

    if (value.length >= 3) {
      value = value.slice(0, 4); // Limit to 4 digits total (MMYY)
      value = `${value.slice(0, 2)}/${value.slice(2)}`;
    }

    if (value.length <= 5) {
      setFormData(prev => ({
        ...prev,
        card_expiry: value
      }));
    }

    // Validation logic
    const isValidFormat = /^(0[1-9]|1[0-2])\/\d{2}$/.test(value);
    let isValid = false;

    if (isValidFormat) {
      const [monthStr, yearStr] = value.split('/');
      const inputMonth = parseInt(monthStr, 10);
      const inputYear = parseInt('20' + yearStr, 10);

      const now = new Date();
      const currentMonth = now.getMonth() + 1;
      const currentYear = now.getFullYear();

      if (inputYear > currentYear || (inputYear === currentYear && inputMonth >= currentMonth)) {
        isValid = true;
      }
    }

    setCardExpiryValid(isValid);

    setErrors(prevErrors => {
      const updatedErrors = { ...prevErrors };
      if (isValid) {
        delete updatedErrors.card_expiry;
      } else {
        updatedErrors.card_expiry = !isValidFormat
          ? "Enter expiry in MM/YY format."
          : "Please enter a future expiry year.";
      }
      return updatedErrors;
    });
  };


  const handleCvvChange = (e) => {
    const onlyNums = e.target.value.replace(/\D/g, ''); // Only digits

    setFormData(prev => ({
      ...prev,
      card_cvv: onlyNums
    }));

    // Check if valid
    const isValid = onlyNums.length === 3;

    setCvvValid(isValid);

    // Clear error if input becomes valid
    setErrors(prevErrors => {
      const updatedErrors = { ...prevErrors };
      if (isValid) {
        delete updatedErrors.card_cvv;
      }
      return updatedErrors;
    });
  };
  // ⬇️ Updated to fetch states dynamically
  const handleSelectChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
      ...(field === "country" && { state: "" }) // Clear state if country changes
    }));

    if (field === "country") {
      const selectedCountry = countries.find(c => c.country === value);
      console.log(selectedCountry);

      if (selectedCountry?.id) {
        axios
          .get(`https://insulinhub.com/api/states/${selectedCountry.id}`)
          .then((res) => setStates(res.data))
          .catch((err) => console.error("Failed to fetch states", err));
      } else {
        setStates([]); // fallback
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Form Data:", formData);
    // frontend validation first
    const newErrors = validateForm();
    // console.log(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({}); // clear old errors
    setLoading(true);
    try {
      const res = await axios.post(

        "https://insulinhub.com/api/enquiries",
        formData
      );
      Swal.fire({
        title: "Success!",
        text: res.data.message || "Order submitted successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
      setFormData({
        product: "",
        full_name: "",
        phone: "",
        email: "",
        dob: "",
        gender: "",
        address: "",
        country: "",
        state: "",
        city: "",
        postal: "",
        physician_name: "",
        clinic_name: "",
        clinic_city: "",
        clinic_mobile: "",
        allergies: "",
        terms: false,
        payment_option: "Insulinhub already has my payment information",
        card_name: "",
        card_number: "",
        card_expiry: "",
        card_cvv: "",
      });
      setCardExpiryValid(false);
      setCvvValid(false);
      setShowCvv(false);
      setShowTooltip(false);
      setStates([]);
    } catch (err) {
      if (err.response && err.response.status === 422) {

        setErrors(err.response.data.errors);
      } else {
        Swal.fire({
          title: "Error!",
          text: "Submission failed. Please check your inputs.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    } finally {
      setLoading(false); // ✅ Hide loader when done
    }
  };

  const scrollToEnquire = () => {
    const element = document.querySelector('#enquire-now');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-gradient-section py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Cerebroprotein 90 mg: Enhance Your Cognitive Health
              </h1>
              <p className="text-xl text-muted-foreground">
                Cerebroprotein 90 mg is scientifically formulated to support mental clarity, focus, and memory.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={scrollToEnquire} variant="cta" size="lg" className="hidden sm:inline-flex">
                  Buy Now
                </Button>
                <Button onClick={() => document.querySelector('#about-cerebroprotein')?.scrollIntoView({ behavior: 'smooth' })} variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden sm:flex justify-center">
              <img
                src={cerebroproteinProduct}
                alt="Cerebroprotein 90mg Product"
                className="max-w-md w-full h-auto rounded-lg shadow-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Cerebroprotein 90 mg — Your Solution for Better Mental Clarity
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center">
                <img
                  src={cerebroproteinProduct}
                  alt="Cerebroprotein 90mg"
                  className="max-w-sm w-full h-auto mx-auto rounded-lg shadow-card mb-4"
                />
                <p className="text-sm text-muted-foreground italic">
                  *The product may look different than the picture shown.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">What it is:</h3>
                  <p className="text-muted-foreground">
                    Cerebroprotein 90 mg is a nutritional supplement designed to support brain health and cognitive function.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">How it helps:</h3>
                  <p className="text-muted-foreground">
                    Helps improve focus, memory, and overall mental clarity with clinically-backed ingredients.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Key Benefits:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <Brain className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-foreground">Boosts Brain Function</h4>
                        <p className="text-sm text-muted-foreground">Enhances memory and focus</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Shield className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-foreground">Clinically Backed</h4>
                        <p className="text-sm text-muted-foreground">Proven in scientific studies</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Zap className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-foreground">Improves Mental Health</h4>
                        <p className="text-sm text-muted-foreground">Reduces brain fog and fatigue</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-foreground">Safe and Trusted</h4>
                        <p className="text-sm text-muted-foreground">Quality standards</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="space-y-4 pt-6 border-t border-border">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Card className="shadow-soft">
                      <CardContent className="p-6 text-center">
                        <h4 className="font-semibold text-foreground mb-2">100 Tablets</h4>
                        <div className="space-y-2 mb-4">
                          <span className="text-2xl font-bold text-foreground">$125</span>
                          <span className="text-lg text-muted-foreground line-through ml-2">$175</span>
                          <p className="text-sm text-accent font-medium">Save $50 on your first order!</p>
                        </div>
                        <Button onClick={scrollToEnquire} variant="cta" className="w-full">
                          Buy Now
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="shadow-soft">
                      <CardContent className="p-6 text-center">
                        <h4 className="font-semibold text-foreground mb-2">200 Tablets</h4>
                        <div className="space-y-2 mb-4">
                          <span className="text-2xl font-bold text-foreground">$249</span>
                          <span className="text-lg text-muted-foreground line-through ml-2">$299</span>
                          <p className="text-sm text-accent font-medium">Save $50 on your first order!</p>
                        </div>
                        <Button onClick={scrollToEnquire} variant="cta" className="w-full">
                          Buy Now
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-light-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-12">
              How Cerebroprotein 90 mg Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Take Daily</h3>
                <p className="text-muted-foreground">Take one capsule daily with water as directed.</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Absorb & Support</h3>
                <p className="text-muted-foreground">Cerebroprotein absorbs into your system to support brain cells.</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Experience Results</h3>
                <p className="text-muted-foreground">Experience improved memory, focus, and cognitive performance over time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-12">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 italic">
                    "Cerebroprotein has significantly improved my focus and mental clarity. I feel sharper than ever."
                  </p>
                  <p className="font-semibold text-foreground">— Sarah Johnson</p>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 italic">
                    "As a healthcare professional, I recommend Cerebroprotein 90 mg to my patients for cognitive health."
                  </p>
                  <p className="font-semibold text-foreground">— Dr. Michael Chen</p>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 italic">
                    "After using Cerebroprotein for 3 months, my memory and concentration have noticeably improved."
                  </p>
                  <p className="font-semibold text-foreground">— David Rodriguez</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-16 bg-light-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">About Us</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We are dedicated to advancing brain health through scientifically-backed supplements
                that enhance cognitive function and improve quality of life.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card className="shadow-soft">
                <CardContent className="p-8 text-center">
                  <Brain className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To develop and provide high-quality cognitive health supplements that help people
                    achieve their mental potential and maintain brain health throughout their lives.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-8 text-center">
                  <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Our Vision</h3>
                  <p className="text-muted-foreground">
                    A world where everyone has access to safe, effective solutions for optimal brain
                    health, enabling clearer thinking, better memory, and enhanced quality of life.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Values */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-foreground mb-12 text-center">Our Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <Brain className="h-10 w-10 text-accent mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-foreground mb-2">Scientific Excellence</h4>
                  <p className="text-sm text-muted-foreground">
                    Every product is backed by rigorous research and clinical evidence.
                  </p>
                </div>
                <div className="text-center">
                  <Award className="h-10 w-10 text-accent mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-foreground mb-2">Quality Assurance</h4>
                  <p className="text-sm text-muted-foreground">
                    We maintain the highest manufacturing and testing standards.
                  </p>
                </div>
                <div className="text-center">
                  <Users className="h-10 w-10 text-accent mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-foreground mb-2">Customer Focus</h4>
                  <p className="text-sm text-muted-foreground">
                    Your health and satisfaction are our top priorities.
                  </p>
                </div>
                <div className="text-center">
                  <Heart className="h-10 w-10 text-accent mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-foreground mb-2">Integrity</h4>
                  <p className="text-sm text-muted-foreground">
                    We operate with transparency and ethical practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Cerebroprotein Section */}
      <section id="about-cerebroprotein" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">About Cerebroprotein 90mg</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A scientifically-formulated brain health supplement designed to enhance cognitive function,
                improve memory, and support overall mental clarity.
              </p>
            </div>

            {/* Product Image and Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="text-center">
                <img
                  src={cerebroproteinProduct}
                  alt="Cerebroprotein 90mg"
                  className="max-w-sm w-full h-auto mx-auto rounded-lg shadow-card mb-4"
                />
                <p className="text-sm text-muted-foreground italic">
                  *The product may look different than the picture shown.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">What is Cerebroprotein?</h3>
                <p className="text-muted-foreground">
                  Cerebroprotein 90mg is a premium cognitive enhancement supplement that combines advanced
                  neuroscience with carefully selected ingredients. Each tablet contains 90mg of our proprietary
                  cerebroprotein complex, specifically designed to support brain health and cognitive performance.
                </p>
                <p className="text-muted-foreground">
                  Developed through extensive research and clinical testing, Cerebroprotein represents a
                  breakthrough in nutritional neuroscience, offering a safe and effective way to support
                  your brain's natural functions.
                </p>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-foreground mb-12 text-center">Key Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Brain className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Enhanced Memory</h4>
                      <p className="text-muted-foreground text-sm">
                        Supports both short-term and long-term memory formation and recall.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Zap className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Improved Focus</h4>
                      <p className="text-muted-foreground text-sm">
                        Enhances concentration and attention span for better productivity.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Mental Clarity</h4>
                      <p className="text-muted-foreground text-sm">
                        Reduces brain fog and promotes clearer, sharper thinking.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Shield className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Neuroprotection</h4>
                      <p className="text-muted-foreground text-sm">
                        Provides antioxidant protection for brain cells against damage.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Long-term Support</h4>
                      <p className="text-muted-foreground text-sm">
                        Supports healthy aging of the brain and cognitive longevity.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Beaker className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Scientifically Proven</h4>
                      <p className="text-muted-foreground text-sm">
                        Backed by clinical research and rigorous testing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buy Now Section */}
      <section id="enquire-now" className="py-16 bg-light-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Buy Now
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below to inquire about purchasing
                Cerebroprotein 90mg.
              </p>
            </div>

            <Card className="shadow-card">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Product Selection */}
                  <div>
                    <Label htmlFor="product">Select Product *</Label>
                    <Select
                      onValueChange={(val) =>
                        handleSelectChange("product", val)
                      }
                      value={formData.product}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Choose your product" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Cerebroprotein 90 mg (100 Tablets) - $125">
                          Cerebroprotein 90 mg (100 Tablets) - $125
                        </SelectItem>
                        <SelectItem value="Cerebroprotein 90 mg (200 Tablets) - $249">
                          Cerebroprotein 90 mg (200 Tablets) - $249
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.product && (
                      <p className="text-red-500 text-sm mt-1">{errors.product}</p>
                    )}
                  </div>

                  {/* Personal Information */}
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="full_name">Full Name *</Label>
                        <Input
                          id="full_name"
                          value={formData.full_name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                        />
                        {errors.full_name && (
                          <p className="text-red-500 text-sm mt-1">{errors.full_name}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email address"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="dob">Date of Birth *</Label>
                        <Input
                          id="dob"
                          value={formData.dob}
                          onChange={handleChange}
                          placeholder="DD/MM/YYYY"
                        />
                        {errors.dob && (
                          <p className="text-red-500 text-sm mt-1">{errors.dob}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="gender">Select Gender *</Label>
                        <Select
                          onValueChange={(val) =>
                            handleSelectChange("gender", val)
                          }
                          value={formData.gender}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Male">Male</SelectItem>
                            <SelectItem value="Female">Female</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                            <SelectItem value="Prefer not to say">
                              Prefer not to say
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.gender && (
                          <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
                        )}
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="address">Street Address *</Label>
                        <Textarea
                          id="address"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="Enter your complete address"
                        />
                        {errors.address && (
                          <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="country">Select Country *</Label>
                        <Select
                          onValueChange={(val) => handleSelectChange("country", val)}
                          value={formData.country}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your country" />
                          </SelectTrigger>
                          <SelectContent>
                            {countries.map((country) => (
                              <SelectItem key={country.id} value={country.country}>
                                {country.country}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.country && (
                          <p className="text-red-500 text-sm mt-1">{errors.country}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="state">Select State *</Label>
                        <Select
                          onValueChange={(val) => handleSelectChange("state", val)}
                          value={formData.state}
                          disabled={!states.length}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your state" />
                          </SelectTrigger>
                          <SelectContent>
                            {states.map((state) => (
                              <SelectItem key={state.id} value={state.state}>
                                {state.state}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.state && (
                          <p className="text-red-500 text-sm mt-1">{errors.state}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="Enter your city"
                        />
                        {errors.city && (
                          <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="postal">Postal / Zip Code *</Label>
                        <Input
                          id="postal"
                          value={formData.postal}
                          onChange={handleChange}
                          placeholder="Enter postal"
                        />
                        {errors.postal && (
                          <p className="text-red-500 text-sm mt-1">{errors.postal}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Medical Questions */}
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      Medical Questions
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="physician_name">Physician Name</Label>
                        <Input
                          id="physician_name"
                          value={formData.physician_name}
                          onChange={handleChange}
                          placeholder="Enter physician name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="clinic_name">Clinic Name</Label>
                        <Input
                          id="clinic_name"
                          value={formData.clinic_name}
                          onChange={handleChange}
                          placeholder="Enter clinic name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="clinic_city">City</Label>
                        <Input
                          id="clinic_city"
                          value={formData.clinic_city}
                          onChange={handleChange}
                          placeholder="Enter clinic city"
                        />
                      </div>
                      <div>
                        <Label htmlFor="clinic_mobile">Mobile Number</Label>
                        <Input
                          id="clinic_mobile"
                          value={formData.clinic_mobile}
                          onChange={handleChange}
                          placeholder="Enter clinic mobile number"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="allergies">Allergies</Label>
                        <Textarea
                          id="allergies"
                          value={formData.allergies}
                          onChange={handleChange}
                          placeholder="Please list any allergies or medical conditions"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Payment Options */}
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      Select Any One Payment Option:
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="payment_existing"
                          name="payment_option"
                          value="Insulinhub already has my payment information"
                          checked={formData.payment_option === "Insulinhub already has my payment information"}
                          onChange={handleRadioChange}
                          className="form-radio"
                        />
                        <label htmlFor="payment_existing" className="text-sm text-foreground">
                          Insulinhub already has my payment information
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="payment_call"
                          name="payment_option"
                          value="Please call me for payment details"
                          checked={formData.payment_option === "Please call me for payment details"}
                          onChange={handleRadioChange}
                          className="form-radio"
                        />
                        <label htmlFor="payment_call" className="text-sm text-foreground">
                          Please call me for payment details
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="payment_card"
                          name="payment_option"
                          value="Visa Or Mastercard"
                          checked={formData.payment_option === "Visa Or Mastercard"}
                          onChange={handleRadioChange}
                          className="form-radio"
                        />
                        <label htmlFor="payment_card" className="text-sm text-foreground">
                          New Visa or Mastercard
                        </label>
                      </div>
                    </div>
                    {formData.payment_option === "Visa Or Mastercard" && (
                      <div className="mt-6 border rounded-lg p-6 bg-white shadow-sm space-y-6">
                        <h4 className="text-md font-semibold text-gray-800">
                          Only Visa or Mastercard Accepted
                        </h4>

                        <div className="relative w-full mb-10">
                          <label htmlFor="card_name" className="block text-sm font-medium text-gray-700 mb-1">
                            Name As On Card *
                          </label>

                          {showTooltip && (
                            <div
                              className="
        absolute 
        left-1/2 
        -translate-x-1/2 
        bottom-full 
        mb-2 
        w-[95%]
        sm:left-auto sm:right-0 sm:translate-x-0 sm:top-0 sm:bottom-auto sm:mb-0 sm:mt-1 
        sm:w-[300px]
        bg-white border border-gray-300 rounded-lg shadow-md p-3 text-sm text-red-800 z-20
      "
                            >
                              <p>Your card will not be billed until we confirm your order.</p>
                              <p className="mt-1">Your card will be billed from the UK in US dollars prior to shipping.</p>
                            </div>
                          )}

                          <input
                            type="text"
                            id="card_name"
                            name="card_name"
                            value={formData.card_name || ""}
                            onChange={handleInputChange}
                            onFocus={() => {
                              if (formData.card_name.length > 0) setShowTooltip(true);
                            }}
                            onBlur={() => setShowTooltip(false)}
                            placeholder="Enter Name On Card"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring focus:ring-blue-300 text-sm relative z-10"
                          />

                          {errors.card_name && (
                            <p className="text-red-500 text-sm mt-1">{errors.card_name}</p>
                          )}
                        </div>



                        {/* Card Number */}
                        <div>
                          <label htmlFor="card_number" className="block text-sm font-medium text-gray-700 mb-1">
                            Card Number *
                          </label>
                          <input
                            type="text"
                            id="card_number"
                            name="card_number"
                            value={formData.card_number || ""}
                            onChange={handleCardNumberChange}
                            placeholder="XXXX XXXX XXXX XXXX"
                            inputMode="numeric"
                            className={`w-full border ${errors.card_number
                              ? "border-red-500"
                              : formData.card_number?.replace(/\s/g, "").length === 16 &&
                                isValidCardNumber(formData.card_number)
                                ? "border-green-500"
                                : "border-gray-300"
                              } rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300 text-sm`}
                          />
                          {errors.card_number && (
                            <p className="text-red-500 text-sm mt-1">{errors.card_number}</p>
                          )}

                          {/* <-- Add your green success message here --> */}
                          {formData.card_number?.replace(/\s/g, "").length === 16 &&
                            isValidCardNumber(formData.card_number) && (
                              <p className="text-green-500 text-sm mt-1">Valid card number</p>
                            )}
                        </div>

                        {/* Expiry & CVV */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="card_expiry" className="block text-sm font-medium text-gray-700 mb-1">
                              VALID THRU *
                            </label>
                            <input
                              type="text"
                              id="card_expiry"
                              name="card_expiry"
                              value={formData.card_expiry || ""}
                              onChange={handleCardExpiryChange}
                              maxLength={5}
                              placeholder="MM/YY"
                              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300 text-sm"
                            />
                            {errors.card_expiry ? (
                              <p className="text-red-500 text-sm mt-1">{errors.card_expiry}</p>
                            ) : (
                              cardExpiryValid && (
                                <p className="text-green-500 text-sm mt-1">Valid date format</p>
                              )
                            )}

                          </div>
                          <div className="relative">
                            <label htmlFor="card_cvv" className="block text-sm font-medium text-gray-700 mb-1">
                              CVV *
                            </label>
                            <input
                              type={showCvv ? "text" : "password"}
                              id="card_cvv"
                              name="card_cvv"
                              value={formData.card_cvv || ""}
                              onChange={handleCvvChange}
                              placeholder="Enter CVV"
                              inputMode="numeric"
                              pattern="\d*"
                              className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring focus:ring-blue-300 text-sm"
                            />
                            {/* Toggle Icon */}
                            <button
                              type="button"
                              onClick={() => setShowCvv(!showCvv)}
                              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600" style={{ top: "43px" }}
                            >
                              {showCvv ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                            </button>
                            {errors.card_cvv ? (
                              <p className="text-red-500 text-sm mt-1">{errors.card_cvv}</p>
                            ) : cvvValid ? (
                              <p className="text-green-500 text-sm mt-1">Valid number</p>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Terms & Conditions */}
                  <div className="border-t pt-6">
                    <div className="mb-3 p-3 rounded-md bg-muted text-muted-foreground text-sm border border-border max-h-72 overflow-y-auto space-y-2">
                      <h5 className="text-base font-semibold text-center">Patient Authorization Agreement</h5>
                      <p>
                        CEREBROPROTEIN.com which includes its officers, directors, affiliates, representatives, agents,
                        contractors and sub-contractors (collectively, "CEREBROPROTEIN.com") is an international
                        prescription referral service committed to helping ensure that I, the undersigned patient ("I" or
                        "Me"), am able to obtain medication, products and/or services ("Product") from licensed
                        pharmacies.
                      </p>
                      <p>
                        This Patient Authorization Agreement ("Agreement") shall govern all sales of Product facilitated
                        by CEREBROPROTEIN.com between me and any of CEREBROPROTEIN.com's authorized
                        pharmacies located in the United Kingdom or India (collectively, the "Pharmacy"). I
                        acknowledge and agree to the following:
                      </p>
                      <p>1. I am the age of majority, am fully competent to make my own health care decisions and have obtained any prescription(s) for the Product in a lawful manner.</p>
                      <p>2. I understand that it is my responsibility to have my prescribing physician ("My Own Physician") conduct regular physical examinations, including any and all suggested testing to ensure that I have no medical problems which would constitute a contraindication to me taking the Product.</p>
                      <p>3. I agree that if I suffer any adverse effects while taking any medication or supplement that I will immediately contact My Own Physician and that in the event that I come under the care of another physician, I will inform him or her of any and all medications that I have been prescribed.</p>
                      <p>4. I agree to truthfully, and to the best of my knowledge, answer all of the questions on the Order Form. I further agree and understand that I will be solely responsible for any adverse effects that I may suffer from taking or continuing to take the Product in the event that I have failed to fully furnish my complete and accurate medical history.</p>
                      <p>5. I appoint CEREBROPROTEIN.com to act as my agent and attorney in order to take all steps that it deems necessary to have the Product dispensed or shipped by the Pharmacy, to the same extent as I could do if I were personally present at the Pharmacy, including:</p>
                      <p>(a) collecting personal health information about me;</p>
                      <p>(b) packaging the Product and delivering it to me. I hereby waive any requirement of the physician to conduct a physical examination.</p>
                      <p>This authorization may be revoked by me at any time and shall continue until such revocation has been provided to CEREBROPROTEIN.com, in writing.</p>
                      <p>6. There will be no additional fees charged to me in the event that an independent medical review is required to obtain a valid prescription for the Product.</p>
                      <p>7. I initiated contact with and understand that CEREBROPROTEIN.com is not located in the United States.</p>
                      <p>8. The Product is sold and dispensed or shipped by the Pharmacy in accordance with the applicable laws of that country. Title to the Product passes from the Pharmacy to me when the Product leaves the Pharmacy. The Pharmacy delivers the medication to my agent. As this agent is a delivery service, I give the Pharmacy or its agent authority to select the agent on my behalf.</p>
                      <p>9. Any and all physicians and/or pharmacists ("Providers") retained by CEREBROPROTEIN.com in order to obtain the Product from the Pharmacy are located and licensed to practice. Any treatment that I receive from the Providers shall be deemed to be received by me in the jurisdiction in which the Providers are located.</p>
                      <p>10. I understand and agree that the review of my medical information by a physician is in no way intended as a means to diagnose any medical condition and does not substitute the requirement for me to obtain my own professional medical advice from My Own Physician. I agree to consult and direct all questions to My Own Physician before taking any new drug or changing therapy.</p>
                      <p>11. Any and all agreements reached or contracts formed and transactions undertaken with or involving the Pharmacy are and shall be deemed to be made in the country where the Pharmacy is located and shall be governed by those laws applicable to such contracts, agreements and transactions (unless CEREBROPROTEIN.com elects otherwise in its sole discretion). The Courts of that jurisdiction shall have sole and exclusive jurisdiction over any dispute that may arise between me and the Pharmacy and I agree to attorn to the Courts of that jurisdiction for any and all such dispute or disputes.</p>
                      <p>12. CEREBROPROTEIN.com may communicate with me via email or telephone to discuss my order or pending refill order for the Product.</p>
                      <p>13. Your credit card company may charge you a foreign transaction fee at their discretion which is in addition to the amount charged by CEREBROPROTEIN.com. These are not by CEREBROPROTEIN.com charges.</p>
                      <p>14. I acknowledge that the terms and conditions as found in this Agreement are readily available to me on a 24-hour basis from CEREBROPROTEIN.com's website and acknowledge having had every opportunity to obtain independent legal advice with respect to this Agreement.</p>
                      <p><strong>I HAVE READ AND UNDERSTAND THE FORGOING TERMS AND I AGREE THAT THEY SHALL BE BINDING UPON ME AND MY HEIRS, ASSIGNS, SUCCESSORS AND PERSONAL REPRESENTATIVES. OR I am the parent/legal guardian/power of attorney for the customer disclosed herein, am over the age of majority, and have full authority to sign on the customer's behalf.</strong></p>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.terms}
                        onCheckedChange={(val) =>
                          handleSelectChange("terms", val)
                        }
                      />
                      <Label htmlFor="terms" className="text-sm">
                        I understand the terms and conditions and privacy
                        policy. *
                      </Label>
                    </div>
                    {errors.terms && (
                      <p className="text-red-500 text-sm mt-1">{errors.terms}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="cta"
                    size="lg"
                    className="w-full flex items-center justify-center"
                    disabled={loading} // Disable when loading
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                          ></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      "Buy Now"
                    )}
                  </Button>

                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-foreground mb-6">
              Get Started with Cerebroprotein 90 mg
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join thousands of satisfied customers who have improved their cognitive health with Cerebroprotein.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={scrollToEnquire} variant="secondary" size="lg">
                100 Tablets - $125
              </Button>
              <Button onClick={scrollToEnquire} variant="secondary" size="lg">
                200 Tablets - $249
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;