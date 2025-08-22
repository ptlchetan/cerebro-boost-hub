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
import { useState } from "react";

const Index = () => {
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    let newErrors: Record<string, string> = {};

    if (!formData.product) newErrors.product = "Product selection is required.";
    if (!formData.full_name) newErrors.full_name = "Full name is required.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.dob) newErrors.dob = "Date of birth is required.";
    if (!formData.gender) newErrors.gender = "Gender is required.";
    if (!formData.address) newErrors.address = "Address is required.";
    if (!formData.country) newErrors.country = "Country is required.";
    if (!formData.state) newErrors.state = "State is required.";
    if (!formData.city) newErrors.city = "City is required.";
    if (!formData.postal) newErrors.postal = "Postal code is required.";
    if (!formData.terms) newErrors.terms = "You must accept the terms.";

    return newErrors;
  };

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
  });

  const handleChange = (e) => {

    const { id, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const handleSelectChange = (field, value) => {

    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // frontend validation first
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({}); // clear old errors

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/enquiries",
        formData
      );
      Swal.fire({
        title: "Success!",
        text: res.data.message || "Enquiry submitted successfully!",
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
      });
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
                <Button onClick={scrollToEnquire} variant="cta" size="lg">
                  Buy Now
                </Button>
                <Button onClick={() => document.querySelector('#about-cerebroprotein')?.scrollIntoView({ behavior: 'smooth' })} variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
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

      {/* Enquire Now Section */}
      <section id="enquire-now" className="py-16 bg-light-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Enquire Now
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
                        <Label htmlFor="address">Address *</Label>
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
                          onValueChange={(val) =>
                            handleSelectChange("country", val)
                          }
                          value={formData.country}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="United States">United States</SelectItem>
                            <SelectItem value="Canada">Canada</SelectItem>
                            <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                            <SelectItem value="Australia">Australia</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.country && (
                          <p className="text-red-500 text-sm mt-1">{errors.country}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="state">Select State *</Label>
                        <Select
                          onValueChange={(val) =>
                            handleSelectChange("state", val)
                          }
                          value={formData.state}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your state" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="California">California</SelectItem>
                            <SelectItem value="New York">New York</SelectItem>
                            <SelectItem value="Texas">Texas</SelectItem>
                            <SelectItem value="Florida">Florida</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
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
                          placeholder="Enter postal code"
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

                  {/* Terms & Conditions */}
                  <div className="border-t pt-6">
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
                    className="w-full"
                  >
                    Submit Enquiry
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