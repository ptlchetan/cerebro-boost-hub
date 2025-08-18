import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Shield, Zap, CheckCircle, Star } from "lucide-react";
import cerebroproteinProduct from "@/assets/cerebroprotein-product.png";

export default function Product() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-6">
              <div className="text-center">
                <img
                  src={cerebroproteinProduct}
                  alt="Cerebroprotein 90mg"
                  className="w-full max-w-lg mx-auto rounded-lg shadow-card"
                />
                <p className="text-sm text-muted-foreground italic mt-4">
                  *The product may look different than the picture shown.
                </p>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-4">
                  Cerebroprotein 90 mg
                </h1>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-muted-foreground">(127 reviews)</span>
                </div>
                <p className="text-xl text-muted-foreground">
                  Advanced brain health supplement designed to support cognitive function, memory, and mental clarity.
                </p>
              </div>

              {/* Key Benefits */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Key Benefits</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Brain className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">Enhanced cognitive function and memory</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">Clinically tested and scientifically proven</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">Improved focus and mental clarity</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">Safe for daily use with quality assurance</span>
                  </div>
                </div>
              </div>

              {/* Pricing Options */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Choose Your Package</h3>
                <div className="space-y-4">
                  <Card className="shadow-soft border-2 border-accent">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <h4 className="text-lg font-semibold text-foreground">100 Tablets</h4>
                          <p className="text-sm text-muted-foreground">1-2 month supply</p>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-foreground">$125</span>
                          <span className="text-lg text-muted-foreground line-through ml-2">$175</span>
                          <p className="text-sm text-accent font-medium">Save $50!</p>
                        </div>
                      </div>
                      <Button asChild variant="cta" className="w-full">
                        <Link to="/checkout?variant=100">Select This Package</Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="shadow-soft border-2 border-primary">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <h4 className="text-lg font-semibold text-foreground">200 Tablets</h4>
                          <p className="text-sm text-muted-foreground">3-4 month supply</p>
                          <span className="inline-block bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full mt-1">
                            BEST VALUE
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-foreground">$249</span>
                          <span className="text-lg text-muted-foreground line-through ml-2">$299</span>
                          <p className="text-sm text-accent font-medium">Save $50!</p>
                        </div>
                      </div>
                      <Button asChild variant="cta" className="w-full">
                        <Link to="/checkout?variant=200">Select This Package</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Additional Info */}
              <div className="space-y-4 pt-6 border-t border-border">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-foreground">Active Ingredient:</span>
                    <p className="text-muted-foreground">Cerebroprotein 90mg</p>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Form:</span>
                    <p className="text-muted-foreground">Tablets</p>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Dosage:</span>
                    <p className="text-muted-foreground">1 tablet daily</p>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Storage:</span>
                    <p className="text-muted-foreground">Cool, dry place</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Description */}
          <div className="mt-16 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">How It Works</h3>
                  <p className="text-muted-foreground">
                    Cerebroprotein 90mg works by supporting neuronal health and promoting optimal brain function. 
                    The active ingredients help enhance neurotransmitter activity, improve blood flow to the brain, 
                    and support the formation of new neural connections.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Recommended Usage</h3>
                  <p className="text-muted-foreground">
                    Take one tablet daily with water, preferably with a meal. For best results, maintain consistent 
                    daily usage. Effects may be noticed within 2-4 weeks of regular use. Consult your healthcare 
                    provider before starting any new supplement regimen.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}