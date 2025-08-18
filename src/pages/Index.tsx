import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Shield, Zap, CheckCircle } from "lucide-react";
import cerebroproteinProduct from "@/assets/cerebroprotein-product.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-section py-20">
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
                <Button asChild variant="cta" size="lg">
                  <Link to="/checkout">Buy Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about-cerebroprotein">Learn More</Link>
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
                        <Button asChild variant="cta" className="w-full">
                          <Link to="/checkout?variant=100">Buy Now</Link>
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
                        <Button asChild variant="cta" className="w-full">
                          <Link to="/checkout?variant=200">Buy Now</Link>
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
              <Button asChild variant="secondary" size="lg">
                <Link to="/checkout?variant=100">100 Tablets - $125</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link to="/checkout?variant=200">200 Tablets - $249</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
