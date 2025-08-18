import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Science Behind Cognitive Enhancement: How Brain Supplements Work",
    excerpt: "Explore the fascinating world of neuroscience and discover how targeted nutrition can support brain health and cognitive function.",
    author: "Dr. Sarah Chen",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Science",
  },
  {
    id: 2,
    title: "5 Daily Habits to Boost Your Brain Health Naturally",
    excerpt: "Simple lifestyle changes that can enhance your cognitive performance and support long-term brain health.",
    author: "Michael Rodriguez",
    date: "2024-01-10",
    readTime: "4 min read",
    category: "Lifestyle",
  },
  {
    id: 3,
    title: "Understanding Memory: How to Improve Recall and Retention",
    excerpt: "Learn about the different types of memory and evidence-based strategies to enhance your ability to remember and recall information.",
    author: "Dr. Emily Johnson",
    date: "2024-01-08",
    readTime: "6 min read",
    category: "Health",
  },
  {
    id: 4,
    title: "The Connection Between Nutrition and Cognitive Performance",
    excerpt: "Discover how what you eat affects your brain function and which nutrients are essential for optimal cognitive health.",
    author: "Dr. Sarah Chen",
    date: "2024-01-05",
    readTime: "7 min read",
    category: "Nutrition",
  },
  {
    id: 5,
    title: "Managing Brain Fog: Causes and Solutions",
    excerpt: "Understanding the common causes of mental fatigue and practical strategies to regain mental clarity and focus.",
    author: "Lisa Thompson",
    date: "2024-01-03",
    readTime: "4 min read",
    category: "Health",
  },
  {
    id: 6,
    title: "Age and Cognitive Health: Maintaining Mental Sharpness Over Time",
    excerpt: "How aging affects the brain and what you can do to maintain cognitive function throughout your life.",
    author: "Dr. Emily Johnson",
    date: "2024-01-01",
    readTime: "8 min read",
    category: "Aging",
  },
];

const categories = ["All", "Science", "Health", "Lifestyle", "Nutrition", "Aging"];

export default function Blogs() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-6">Brain Health Blog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay informed with the latest research, tips, and insights on cognitive health 
              and brain optimization from our team of experts.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Post */}
          <Card className="shadow-card mb-12 bg-gradient-section">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-block bg-accent text-accent-foreground text-xs px-3 py-1 rounded-full mb-4">
                    FEATURED
                  </span>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  <Button variant="cta">Read Full Article</Button>
                </div>
                <div className="hidden lg:block">
                  <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground">Featured Article Image</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="shadow-soft hover:shadow-card transition-shadow">
                <CardContent className="p-0">
                  <div className="w-full h-48 bg-muted rounded-t-lg flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Article Image</span>
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <Button variant="outline" size="sm">
                        Read More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <Card className="shadow-card mt-16 bg-light-blue">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Stay Updated with Brain Health Insights
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter and get the latest articles, research findings, 
                and expert tips delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button variant="cta">Subscribe</Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                No spam, unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}