import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent mb-4">
              About Cerebro Boost Hub
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pioneering the future of cognitive enhancement through science-backed supplements and innovation
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-primary/10 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="default" className="bg-primary/10 text-primary">
                    Our Mission
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  At Cerebro Boost Hub, we are dedicated to unlocking human cognitive potential through cutting-edge research and premium-quality supplements. Our mission is to provide safe, effective, and scientifically-validated solutions that enhance mental performance, memory, and overall brain health.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-primary/10 shadow-soft">
                <CardHeader>
                  <CardTitle>Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To become the leading authority in cognitive enhancement, empowering individuals to achieve their maximum mental potential through innovative, research-driven solutions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/10 shadow-soft">
                <CardHeader>
                  <CardTitle>Our Values</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium">Scientific Integrity</p>
                      <p className="text-sm text-muted-foreground">Evidence-based formulations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium">Quality Excellence</p>
                      <p className="text-sm text-muted-foreground">Premium ingredients and manufacturing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium">Customer Focus</p>
                      <p className="text-sm text-muted-foreground">Your success is our priority</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Separator className="my-8" />

            <Card className="border-primary/10 shadow-soft">
              <CardHeader>
                <CardTitle>Our Story</CardTitle>
                <CardDescription>
                  Founded by researchers and entrepreneurs passionate about cognitive science
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Cerebro Boost Hub was founded in 2020 by a team of neuroscientists, nutritionists, and entrepreneurs who recognized the growing need for safe and effective cognitive enhancement solutions. Frustrated by the lack of transparency and scientific rigor in the supplement industry, we set out to create a company that would prioritize research, quality, and customer education.
                </p>
                <p className="text-muted-foreground">
                  Our founders, with combined decades of experience in neuroscience research and supplement development, established partnerships with leading universities and research institutions to ensure our products are backed by solid scientific evidence.
                </p>
                <p className="text-muted-foreground">
                  Today, we continue to innovate and expand our product line, always maintaining our commitment to scientific excellence and customer satisfaction. Every product we develop undergoes rigorous testing and quality assurance to ensure it meets our high standards.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-primary/10 shadow-soft text-center">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-primary">10,000+</CardTitle>
                  <CardDescription>Satisfied Customers</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/10 shadow-soft text-center">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-primary">50+</CardTitle>
                  <CardDescription>Research Studies</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/10 shadow-soft text-center">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-primary">99.8%</CardTitle>
                  <CardDescription>Quality Rating</CardDescription>
                </CardHeader>
              </Card>
            </div>

            <Card className="border-primary/10 shadow-soft">
              <CardHeader>
                <CardTitle>Why Choose Us?</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium">Research-Backed</p>
                      <p className="text-sm text-muted-foreground">All our products are supported by scientific research and clinical studies</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium">Premium Quality</p>
                      <p className="text-sm text-muted-foreground">We use only the highest quality ingredients from trusted suppliers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium">Transparent Process</p>
                      <p className="text-sm text-muted-foreground">Complete transparency in our manufacturing and testing processes</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium">Expert Support</p>
                      <p className="text-sm text-muted-foreground">Our team of experts is available to guide you on your cognitive enhancement journey</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium">Satisfaction Guarantee</p>
                      <p className="text-sm text-muted-foreground">We stand behind our products with a 100% satisfaction guarantee</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium">Continuous Innovation</p>
                      <p className="text-sm text-muted-foreground">We continuously invest in research to bring you the latest breakthroughs</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;