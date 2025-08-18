import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact Info</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Phone: +1-XXX-XXX-XXXX</p>
              <p>Email: support@cerebroprotein.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <Link to="/" className="block text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about-us" className="block text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/product" className="block text-muted-foreground hover:text-primary transition-colors">
                Product
              </Link>
              <Link to="/about-cerebroprotein" className="block text-muted-foreground hover:text-primary transition-colors">
                About Cerebroprotein
              </Link>
              <Link to="/blogs" className="block text-muted-foreground hover:text-primary transition-colors">
                Blogs
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Legal</h3>
            <nav className="space-y-2">
              <Link to="/privacy-policy" className="block text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="block text-muted-foreground hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Cerebroprotein. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};