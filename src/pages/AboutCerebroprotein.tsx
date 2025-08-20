import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Beaker, Shield, Zap, Brain, CheckCircle, Clock } from "lucide-react";
import cerebroproteinProduct from "@/assets/cerebroprotein-product-new.png";

export default function AboutCerebroprotein() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-6">About Cerebroprotein 90mg</h1>
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
              <h2 className="text-2xl font-bold text-foreground">What is Cerebroprotein?</h2>
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

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">How Cerebroprotein Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="shadow-soft text-center">
                <CardContent className="p-6">
                  <Beaker className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-3">Neuronal Support</h3>
                  <p className="text-muted-foreground text-sm">
                    Provides essential nutrients that support healthy brain cell function and protect against oxidative stress.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-soft text-center">
                <CardContent className="p-6">
                  <Zap className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-3">Enhanced Connectivity</h3>
                  <p className="text-muted-foreground text-sm">
                    Promotes the formation of new neural pathways and strengthens existing connections between brain cells.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-soft text-center">
                <CardContent className="p-6">
                  <Brain className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-3">Cognitive Enhancement</h3>
                  <p className="text-muted-foreground text-sm">
                    Improves focus, memory retention, and overall cognitive performance through optimized brain function.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Brain className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Enhanced Memory</h3>
                    <p className="text-muted-foreground text-sm">
                      Supports both short-term and long-term memory formation and recall.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Zap className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Improved Focus</h3>
                    <p className="text-muted-foreground text-sm">
                      Enhances concentration and attention span for better productivity.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Mental Clarity</h3>
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
                    <h3 className="font-semibold text-foreground mb-2">Neuroprotection</h3>
                    <p className="text-muted-foreground text-sm">
                      Provides antioxidant protection for brain cells against damage.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Long-term Support</h3>
                    <p className="text-muted-foreground text-sm">
                      Supports healthy aging of the brain and cognitive longevity.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Beaker className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Scientifically Proven</h3>
                    <p className="text-muted-foreground text-sm">
                      Backed by clinical research and rigorous testing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Clinical Research */}
          <div className="mb-16">
            <Card className="shadow-card bg-light-blue">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Clinical Research</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-accent mb-2">85%</div>
                    <p className="text-sm text-muted-foreground">Improvement in memory recall</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-2">78%</div>
                    <p className="text-sm text-muted-foreground">Enhanced focus and concentration</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-2">92%</div>
                    <p className="text-sm text-muted-foreground">User satisfaction rate</p>
                  </div>
                </div>
                <p className="text-center text-muted-foreground text-sm mt-6">
                  *Results from a 12-week clinical study with 200 participants
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Usage Instructions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">How to Use</h2>
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Dosage</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Take 1 tablet daily</li>
                      <li>• Preferably with a meal</li>
                      <li>• At the same time each day</li>
                      <li>• With a full glass of water</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Timeline</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Week 1-2: Initial effects may begin</li>
                      <li>• Week 3-4: Noticeable improvements</li>
                      <li>• Week 6-8: Optimal benefits</li>
                      <li>• Ongoing: Continued support</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-soft-beige rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Important:</strong> Consult with your healthcare provider before starting any new supplement regimen, 
                    especially if you have existing medical conditions or are taking other medications.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="shadow-card bg-gradient-hero">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-primary-foreground mb-4">
                  Ready to Enhance Your Cognitive Health?
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-6">
                  Join thousands who have improved their mental clarity with Cerebroprotein 90mg.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="secondary" size="lg">
                    <Link to="/product">View Product Details</Link>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                    <Link to="/checkout">Order Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}