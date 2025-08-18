import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, Users, Award } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-6">About Us</h1>
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

          {/* Our Story */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Story</h2>
            <div className="bg-light-blue rounded-lg p-8">
              <p className="text-muted-foreground mb-6">
                Founded by a team of neuroscientists, researchers, and healthcare professionals, our company 
                emerged from a shared commitment to addressing the growing need for effective cognitive health solutions. 
                We recognized that as people live longer and face increasing mental demands, there was a critical 
                need for scientifically-proven supplements that could support brain function.
              </p>
              <p className="text-muted-foreground mb-6">
                After years of research and clinical trials, we developed Cerebroprotein 90mg, a breakthrough 
                supplement that combines cutting-edge neuroscience with natural ingredients. Our rigorous testing 
                and quality assurance processes ensure that every tablet meets the highest standards of safety and efficacy.
              </p>
              <p className="text-muted-foreground">
                Today, thousands of customers trust our products to support their cognitive health, and we continue 
                to invest in research and development to bring innovative solutions to the market.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <Brain className="h-10 w-10 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Scientific Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  Every product is backed by rigorous research and clinical evidence.
                </p>
              </div>
              <div className="text-center">
                <Award className="h-10 w-10 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Quality Assurance</h3>
                <p className="text-sm text-muted-foreground">
                  We maintain the highest manufacturing and testing standards.
                </p>
              </div>
              <div className="text-center">
                <Users className="h-10 w-10 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Customer Focus</h3>
                <p className="text-sm text-muted-foreground">
                  Your health and satisfaction are our top priorities.
                </p>
              </div>
              <div className="text-center">
                <Heart className="h-10 w-10 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Integrity</h3>
                <p className="text-sm text-muted-foreground">
                  We operate with transparency and ethical practices.
                </p>
              </div>
            </div>
          </div>

          {/* Commitment */}
          <Card className="shadow-card bg-gradient-section">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Commitment to You</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We are committed to providing you with the highest quality cognitive health supplements. 
                Every batch is tested for purity, potency, and safety. We stand behind our products with 
                comprehensive quality guarantees and responsive customer support.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">✓ Third-Party Tested</h4>
                  <p className="text-muted-foreground">Independent verification of quality and purity</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">✓ GMP Certified</h4>
                  <p className="text-muted-foreground">Manufactured in certified facilities</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">✓ Customer Support</h4>
                  <p className="text-muted-foreground">Dedicated team ready to help</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}