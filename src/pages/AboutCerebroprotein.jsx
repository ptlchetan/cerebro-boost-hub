import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import cerebroproteinImage from "@/assets/cerebroprotein_image.png";

const AboutCerebroprotein = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent mb-4">
              About Cerebroprotein
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the science behind our revolutionary brain enhancement supplement
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <Card className="border-primary/10 shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="default" className="bg-primary/10 text-primary">
                      Advanced Formula
                    </Badge>
                  </CardTitle>
                  <CardDescription className="text-base">
                    Cerebroprotein is a cutting-edge nootropic supplement designed to enhance cognitive function, memory, and mental clarity.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our proprietary blend combines scientifically-proven ingredients to support brain health and optimize neural performance.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/10 shadow-soft">
                <CardHeader>
                  <CardTitle>Key Benefits</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Enhanced memory retention and recall</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Improved focus and concentration</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Increased mental clarity and alertness</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Support for overall brain health</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center items-start">
              <div className="relative">
                <img 
                  src={cerebroproteinImage} 
                  alt="Cerebroprotein supplement bottle showing advanced brain enhancement formula"
                  className="w-full max-w-md rounded-lg shadow-card transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-lg pointer-events-none"></div>
              </div>
            </div>
          </div>

          <Separator className="my-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-primary/10 shadow-soft">
              <CardHeader>
                <CardTitle>Scientific Research</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our formula is backed by extensive research and clinical studies demonstrating its effectiveness in cognitive enhancement.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Peer-reviewed studies on key ingredients</li>
                  <li>• Third-party laboratory testing</li>
                  <li>• Quality assurance protocols</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/10 shadow-soft">
              <CardHeader>
                <CardTitle>Quality & Safety</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Manufactured in FDA-approved facilities with the highest quality standards and safety protocols.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• GMP certified manufacturing</li>
                  <li>• No artificial additives or fillers</li>
                  <li>• Rigorous purity testing</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCerebroprotein;