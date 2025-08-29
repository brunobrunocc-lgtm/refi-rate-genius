import Layout from '@/components/Layout';
import SEOHead from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, TrendingUp, Award } from 'lucide-react';
import { HeaderAd } from '@/components/AdSenseUnit';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Independence',
      description: 'We are not owned by any lender or financial institution. Our recommendations are based solely on data and consumer benefit.'
    },
    {
      icon: Users,
      title: 'Transparency',
      description: 'We clearly disclose our methodology, data sources, and any potential conflicts of interest in all our content.'
    },
    {
      icon: TrendingUp,
      title: 'Accuracy',
      description: 'Our data is updated regularly and sourced from reputable financial institutions and market data providers.'
    },
    {
      icon: Award,
      title: 'Education',
      description: 'We believe informed consumers make better financial decisions. Our guides prioritize education over sales.'
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Best Refinance Options - Independent Mortgage Education",
    "description": "Learn about our mission to provide independent, unbiased mortgage refinance education and comparison tools to help homeowners make informed decisions.",
    "url": "https://bestrefinanceoptions.com/about"
  };

  return (
    <Layout>
      <SEOHead
        title="About Best Refinance Options - Independent Mortgage Education"
        description="Learn about our mission to provide independent, unbiased mortgage refinance education and comparison tools to help homeowners make informed decisions."
        canonical="https://bestrefinanceoptions.com/about"
        keywords="about best refinance options, mortgage education, independent financial advice"
        schema={schema}
      />

      <div className="min-h-screen bg-background">
        <div className="container-page section-padding">
          <HeaderAd />

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-hero mb-6">About Best Refinance Options</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're an independent platform dedicated to helping homeowners navigate the complex world of mortgage refinancing 
              with unbiased information, transparent comparisons, and educational resources.
            </p>
          </div>

          {/* Mission Section */}
          <Card className="card-feature mb-16">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-section mb-6">Our Mission</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Mortgage refinancing can save homeowners thousands of dollars, but the process is often confusing and overwhelming. 
                    Many consumers struggle to understand their options, compare offers effectively, or determine if refinancing makes 
                    financial sense for their situation.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Best Refinance Options was created to bridge this gap by providing clear, unbiased information and powerful 
                    comparison tools that help homeowners make informed decisions about their mortgage refinancing needs.
                  </p>
                </div>
                <div className="bg-gradient-subtle rounded-lg p-8">
                  <blockquote className="text-lg italic text-primary">
                    "Every homeowner deserves access to clear, unbiased information about their refinancing options."
                  </blockquote>
                  <footer className="mt-4 text-muted-foreground">
                    - Our founding principle
                  </footer>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Values Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-section mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These core values guide everything we do and ensure that our platform serves the best interests of homeowners.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="card-elevated">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-accent/10 rounded-full flex-shrink-0">
                          <Icon className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Methodology Section */}
          <Card className="card-feature mb-16">
            <CardContent className="p-8">
              <h2 className="text-section mb-6">Our Methodology</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Data Collection</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    We gather rate and fee information directly from lender websites, regulatory filings, and verified third-party 
                    data providers. Our data is updated daily to ensure accuracy and relevance.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4">Lender Evaluation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lenders are evaluated based on rates, fees, customer service ratings, processing times, and loan product 
                    availability. We consider both quantitative metrics and qualitative factors like customer reviews.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Editorial Standards</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Our content is written by financial professionals with mortgage industry experience. All articles are 
                    fact-checked and reviewed for accuracy before publication.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4">Independence</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We maintain strict editorial independence. While we may receive referral fees from some lenders, 
                    these relationships never influence our rankings, recommendations, or editorial content.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Team Section */}
          <div className="text-center mb-16">
            <h2 className="text-section mb-6">Our Commitment to You</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We understand that your home is likely your largest asset, and refinancing decisions have long-term financial 
                implications. That's why we're committed to providing you with the most accurate, up-to-date, and unbiased 
                information available.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">100%</div>
                  <div className="text-muted-foreground">Free to Use</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">Daily</div>
                  <div className="text-muted-foreground">Rate Updates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">0</div>
                  <div className="text-muted-foreground">Hidden Fees</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <Card className="card-elevated text-center">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Questions About Our Platform?</h3>
              <p className="text-muted-foreground mb-6">
                We're always looking to improve our platform and provide better resources for homeowners. 
                If you have questions, suggestions, or feedback, we'd love to hear from you.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors"
              >
                Contact Us
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default About;