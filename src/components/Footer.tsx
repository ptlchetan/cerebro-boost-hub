import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <div className="space-y-1 text-muted-foreground">
              <p>Phone: +1-XXX-XXX-XXXX</p>
              <p>Email: support@cerebroprotein.com</p>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Terms & Conditions  
            </Link>
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