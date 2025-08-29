import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from '@/components/Layout';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Search, Calculator, BookOpen } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <SEOHead
        title="Page Not Found (404) - Best Refinance Options"
        description="The page you're looking for doesn't exist. Return to our homepage or explore our refinance guides and calculator."
        canonical={`https://bestrefinanceoptions.com${location.pathname}`}
        noindex={true}
      />

      <div className="container-page section-padding text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-hero mb-6">404 - Page Not Found</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Sorry, the page you're looking for doesn't exist. It may have been moved, deleted, or the URL might be incorrect.
          </p>

          <Card className="card-elevated mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-6">What would you like to do?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button asChild className="h-auto p-4">
                  <Link to="/">
                    <div className="flex items-center">
                      <Home className="h-5 w-5 mr-3" />
                      <div className="text-left">
                        <div className="font-semibold">Go Home</div>
                        <div className="text-sm opacity-80">Return to homepage</div>
                      </div>
                    </div>
                  </Link>
                </Button>

                <Button asChild variant="outline" className="h-auto p-4">
                  <Link to="/refinance-calculator">
                    <div className="flex items-center">
                      <Calculator className="h-5 w-5 mr-3" />
                      <div className="text-left">
                        <div className="font-semibold">Calculator</div>
                        <div className="text-sm opacity-80">Calculate savings</div>
                      </div>
                    </div>
                  </Link>
                </Button>

                <Button asChild variant="outline" className="h-auto p-4">
                  <Link to="/best-refinance-options">
                    <div className="flex items-center">
                      <Search className="h-5 w-5 mr-3" />
                      <div className="text-left">
                        <div className="font-semibold">Compare Lenders</div>
                        <div className="text-sm opacity-80">Find best rates</div>
                      </div>
                    </div>
                  </Link>
                </Button>

                <Button asChild variant="outline" className="h-auto p-4">
                  <Link to="/guides">
                    <div className="flex items-center">
                      <BookOpen className="h-5 w-5 mr-3" />
                      <div className="text-left">
                        <div className="font-semibold">Read Guides</div>
                        <div className="text-sm opacity-80">Learn about refinancing</div>
                      </div>
                    </div>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <p className="text-sm text-muted-foreground">
            If you believe this is an error, please <Link to="/contact" className="text-primary hover:underline">contact us</Link> 
            and let us know what page you were trying to reach.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
