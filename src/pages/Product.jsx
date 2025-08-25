import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import cerebroproteinProductImage from "@/assets/cerebroprotein-product-new.png";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate("/cart");
  };

  const features = [
    "Enhanced Memory & Focus",
    "Clinically Tested Formula",
    "Natural Ingredients",
    "No Side Effects",
    "Fast-Acting Results",
    "30-Day Money Back Guarantee"
  ];

  const ingredients = [
    { name: "Bacopa Monnieri", amount: "300mg", benefit: "Memory enhancement" },
    { name: "Lion's Mane", amount: "250mg", benefit: "Neural growth factor" },
    { name: "Rhodiola Rosea", amount: "200mg", benefit: "Stress reduction" },
    { name: "Ginkgo Biloba", amount: "120mg", benefit: "Blood flow improvement" },
    { name: "Phosphatidylserine", amount: "100mg", benefit: "Cell membrane support" },
    { name: "Alpha-GPC", amount: "150mg", benefit: "Choline production" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Product Image */}
            <div className="flex justify-center items-center">
              <div className="relative">
                <img 
                  src={cerebroproteinProductImage} 
                  alt="Cerebroprotein advanced brain enhancement supplement bottle" 
                  className="w-full max-w-lg rounded-lg shadow-card transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="default" className="bg-primary text-primary-foreground">
                    Best Seller
                  </Badge>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Cerebroprotein</h1>
                <p className="text-xl text-muted-foreground mb-4">Advanced Brain Enhancement Formula</p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 fill-yellow-400" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">(2,847 reviews)</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary mb-6">
                  $79.99 
                  <span className="text-lg text-muted-foreground line-through ml-2">$99.99</span>
                  <Badge variant="destructive" className="ml-2">20% OFF</Badge>
                </div>
              </div>

              <Card className="border-primary/10 shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg">Key Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quantity and Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <label className="text-sm font-medium">Quantity:</label>
                  <div className="flex items-center border rounded-md">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1 hover:bg-muted transition-colors"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border-x">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1 hover:bg-muted transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button 
                    variant="cta" 
                    size="lg" 
                    className="w-full"
                    onClick={handleAddToCart}
                  >
                    Add to Cart - ${(79.99 * quantity).toFixed(2)}
                  </Button>
                  <Button variant="outline" size="lg" className="w-full">
                    Buy Now
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <span>🚚</span>
                  <span>Free shipping on orders over $50</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>⚡</span>
                  <span>Fast 2-day delivery</span>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-12" />

          {/* Product Information Tabs */}
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-6">
              <Card className="border-primary/10 shadow-soft">
                <CardHeader>
                  <CardTitle>Product Description</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Cerebroprotein is a revolutionary cognitive enhancement supplement designed to unlock your brain's full potential. Our advanced formula combines scientifically-proven nootropic ingredients to support memory, focus, and overall mental performance.
                  </p>
                  <p className="text-muted-foreground">
                    Each capsule contains a precisely calibrated blend of natural compounds that work synergistically to enhance neural function, improve cognitive clarity, and support long-term brain health. Whether you're a student, professional, or anyone looking to optimize their mental performance, Cerebroprotein provides the cognitive edge you need.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold">How it works:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Enhances neurotransmitter production for improved communication between brain cells</li>
                      <li>• Increases blood flow to the brain, delivering essential nutrients and oxygen</li>
                      <li>• Supports neuroplasticity and the formation of new neural pathways</li>
                      <li>• Provides neuroprotective benefits against oxidative stress and inflammation</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ingredients" className="mt-6">
              <Card className="border-primary/10 shadow-soft">
                <CardHeader>
                  <CardTitle>Premium Ingredients</CardTitle>
                  <CardDescription>
                    Each serving contains carefully selected, clinically-dosed ingredients
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {ingredients.map((ingredient, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h4 className="font-medium">{ingredient.name}</h4>
                          <p className="text-sm text-muted-foreground">{ingredient.benefit}</p>
                        </div>
                        <Badge variant="outline">{ingredient.amount}</Badge>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Other ingredients:</strong> Vegetable cellulose (capsule), rice flour, magnesium stearate, silicon dioxide. 
                      Free from: gluten, dairy, soy, artificial colors, preservatives, and GMOs.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-6">
                <Card className="border-primary/10 shadow-soft">
                  <CardHeader>
                    <CardTitle>Customer Reviews</CardTitle>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-5 h-5 fill-yellow-400" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="ml-2 font-medium">4.8 out of 5</span>
                      </div>
                      <span className="text-muted-foreground">(2,847 reviews)</span>
                    </div>
                  </CardHeader>
                </Card>

                {/* Sample Reviews */}
                {[
                  {
                    name: "Sarah M.",
                    rating: 5,
                    date: "March 15, 2024",
                    review: "Amazing results! I've been using Cerebroprotein for 3 months and the improvement in my focus and memory is incredible. Highly recommend!"
                  },
                  {
                    name: "David L.",
                    rating: 5,
                    date: "March 10, 2024",
                    review: "As a graduate student, this has been a game-changer. My productivity has increased significantly and I feel more mentally sharp throughout the day."
                  },
                  {
                    name: "Jennifer K.",
                    rating: 4,
                    date: "March 5, 2024",
                    review: "Great product! Noticed improvements in my cognitive function within the first week. The only reason it's not 5 stars is the price, but it's worth it."
                  }
                ].map((review, index) => (
                  <Card key={index} className="border-primary/10 shadow-soft">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium">{review.name}</span>
                            <div className="flex items-center">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <svg 
                                  key={star} 
                                  className={`w-4 h-4 ${star <= review.rating ? 'fill-yellow-400' : 'fill-gray-200'}`} 
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                          </div>
                          <span className="text-sm text-muted-foreground">{review.date}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{review.review}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="faq" className="mt-6">
              <Card className="border-primary/10 shadow-soft">
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    {
                      question: "How long does it take to see results?",
                      answer: "Most users report noticeable improvements in focus and mental clarity within 7-14 days of consistent use. For optimal results, we recommend taking Cerebroprotein daily for at least 30 days."
                    },
                    {
                      question: "Are there any side effects?",
                      answer: "Cerebroprotein is made with natural ingredients and is generally well-tolerated. Some users may experience mild headaches initially as their body adjusts. If you have any medical conditions or take medications, consult your healthcare provider before use."
                    },
                    {
                      question: "How should I take Cerebroprotein?",
                      answer: "Take 2 capsules daily with food, preferably in the morning. Do not exceed the recommended dosage. For best results, maintain consistent daily use."
                    },
                    {
                      question: "Is it safe to take with other supplements?",
                      answer: "Cerebroprotein can generally be taken with other supplements. However, avoid combining with other stimulants or nootropics without consulting a healthcare professional."
                    },
                    {
                      question: "What is your return policy?",
                      answer: "We offer a 30-day money-back guarantee. If you're not satisfied with your results, contact our customer service team for a full refund."
                    }
                  ].map((faq, index) => (
                    <div key={index} className="border-b pb-4 last:border-b-0">
                      <h4 className="font-medium mb-2">{faq.question}</h4>
                      <p className="text-muted-foreground text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Product;