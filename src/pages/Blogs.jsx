import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Science Behind Nootropics: How They Enhance Cognitive Function",
      excerpt: "Explore the fascinating world of nootropics and understand the mechanisms behind cognitive enhancement supplements.",
      category: "Science",
      readTime: "5 min read",
      date: "March 15, 2024",
      featured: true
    },
    {
      id: 2,
      title: "Memory Enhancement: Techniques and Supplements That Actually Work",
      excerpt: "Discover proven strategies and supplements for improving memory retention and recall capabilities.",
      category: "Memory",
      readTime: "7 min read",
      date: "March 10, 2024",
      featured: false
    },
    {
      id: 3,
      title: "Focus and Concentration: Building Mental Discipline in a Distracted World",
      excerpt: "Learn practical methods to improve focus and maintain concentration in our increasingly distracted digital age.",
      category: "Focus",
      readTime: "6 min read",
      date: "March 5, 2024",
      featured: false
    },
    {
      id: 4,
      title: "Brain Health Nutrition: Foods That Boost Cognitive Performance",
      excerpt: "Discover the essential nutrients and foods that support optimal brain function and mental clarity.",
      category: "Nutrition",
      readTime: "8 min read",
      date: "February 28, 2024",
      featured: false
    },
    {
      id: 5,
      title: "The Future of Cognitive Enhancement: Emerging Research and Trends",
      excerpt: "Stay ahead of the curve with insights into cutting-edge research in cognitive enhancement and brain optimization.",
      category: "Research",
      readTime: "10 min read",
      date: "February 20, 2024",
      featured: false
    },
    {
      id: 6,
      title: "Sleep and Cognitive Function: The Crucial Connection",
      excerpt: "Understand how sleep quality directly impacts cognitive performance and learn optimization strategies.",
      category: "Lifestyle",
      readTime: "6 min read",
      date: "February 15, 2024",
      featured: false
    }
  ];

  const categories = ["All", "Science", "Memory", "Focus", "Nutrition", "Research", "Lifestyle"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent mb-4">
              Brain Boost Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert insights, research updates, and practical tips for optimizing your cognitive performance
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((category) => (
              <Button 
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Post */}
          {blogPosts.find(post => post.featured) && (
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="default" className="bg-primary/10 text-primary">
                  Featured Article
                </Badge>
              </div>
              {blogPosts.filter(post => post.featured).map((post) => (
                <Card key={post.id} className="border-primary/20 shadow-card hover:shadow-card-hover transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                    </div>
                    <CardTitle className="text-2xl md:text-3xl mb-2">{post.title}</CardTitle>
                    <CardDescription className="text-base">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="cta" className="w-full sm:w-auto">
                      Read Full Article
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <Separator className="my-12" />

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <Card key={post.id} className="border-primary/10 shadow-soft hover:shadow-card transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Badge variant="outline" className="text-xs">{post.category}</Badge>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors duration-200">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                      Read More →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16">
            <Card className="border-primary/20 shadow-card bg-gradient-to-r from-primary/5 to-primary/10">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">Stay Updated</CardTitle>
                <CardDescription className="text-base">
                  Subscribe to our newsletter for the latest research, tips, and insights on cognitive enhancement
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  />
                  <Button variant="cta">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  No spam, unsubscribe at any time. Your privacy is our priority.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;