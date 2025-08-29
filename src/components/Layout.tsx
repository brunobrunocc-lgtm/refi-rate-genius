import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Best Options', href: '/best-refinance-options' },
    { name: 'Calculator', href: '/refinance-calculator' },
    { name: 'Guides', href: '/guides' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActivePage = (href: string) => {
    if (href === '/' && location.pathname === '/') return true;
    if (href !== '/' && location.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-card">
        <div className="container-page">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="Best Refinance Options" className="h-10 w-10" />
              <span className="text-xl font-playfair font-bold text-primary">
                Best Refinance Options
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActivePage(item.href)
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                variant="default" 
                className="btn-primary"
                onClick={() => window.location.href = '/refinance-calculator'}
              >
                Get Started
              </Button>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm font-medium transition-colors ${
                      isActivePage(item.href)
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-primary'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button 
                  variant="default" 
                  className="btn-primary w-fit mt-4"
                  onClick={() => window.location.href = '/refinance-calculator'}
                >
                  Get Started
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="container-page py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img src={logo} alt="Best Refinance Options" className="h-8 w-8" />
                <span className="text-lg font-playfair font-bold">
                  Best Refinance Options
                </span>
              </div>
              <p className="text-primary-foreground/80 mb-4 max-w-md">
                Independent mortgage refinance education platform helping homeowners find the best refinance options and save thousands on their mortgage.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-sm">
                  <Mail className="h-4 w-4 mr-2" />
                  info@bestrefinanceoptions.com
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/best-refinance-options" className="hover:text-accent-light">Best Options</Link></li>
                <li><Link to="/refinance-calculator" className="hover:text-accent-light">Calculator</Link></li>
                <li><Link to="/guides" className="hover:text-accent-light">Guides</Link></li>
                <li><Link to="/about" className="hover:text-accent-light">About Us</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/privacy-policy" className="hover:text-accent-light">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="hover:text-accent-light">Terms of Service</Link></li>
                <li><Link to="/disclaimer" className="hover:text-accent-light">Disclaimer</Link></li>
                <li><Link to="/contact" className="hover:text-accent-light">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-primary-light/20">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-primary-foreground/60">
                © 2025 Best Refinance Options. All rights reserved.
              </p>
              <p className="text-sm text-primary-foreground/60 mt-2 md:mt-0">
                Educational content only. Not a lender. Verify rates directly with providers.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;