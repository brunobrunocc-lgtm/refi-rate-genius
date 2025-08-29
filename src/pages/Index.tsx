import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';
import SEOHead from '@/components/SEOHead';
import { HeaderAd, ContentAd } from '@/components/AdSenseUnit';
import { Calculator, TrendingDown, Shield, Clock, Star, ArrowRight, CheckCircle } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Index = () => {
  const currentRates = [
    { term: '30-Year Fixed', rate: '7.125%', apr: '7.285%', change: '-0.125%' },
    { term: '15-Year Fixed', rate: '6.750%', apr: '6.875%', change: '-0.100%' },
    { term: '30-Year FHA', rate: '6.875%', apr: '7.125%', change: '-0.075%' },
    { term: '30-Year VA', rate: '6.625%', apr: '6.875%', change: '-0.150%' }
  ];

  const benefits = [
    {
      icon: TrendingDown,
      title: 'Lower Monthly Payments',
      description: 'Reduce your monthly mortgage payment by refinancing to a lower interest rate.'
    },
    {
      icon: Calculator,
      title: 'Cash-Out Options',
      description: 'Access your home equity for home improvements, debt consolidation, or other needs.'
    },
    {
      icon: Shield,
      title: 'Trusted Lenders',
      description: 'Compare rates from vetted, reputable lenders with proven track records.'
    },
    {
      icon: Clock,
      title: 'Fast Processing',
      description: 'Many lenders offer streamlined processes with closings in 30 days or less.'
    }
  ];

  const featuredGuides = [
    {
      title: 'Best Mortgage Refinance Rates in 2025: Updated Guide',
      description: 'Complete analysis of current refinance rates and market trends for 2025.',
      readTime: '8 min read',
      slug: 'best-mortgage-refinance-rates-2025'
    },
    {
      title: 'How Much Can You Save by Refinancing?',
      description: 'Real examples and case studies showing potential refinance savings.',
      readTime: '6 min read',
      slug: 'how-much-save-refinancing'
    },
    {
      title: 'Fixed vs Adjustable Rate Refinance',
      description: 'Expert comparison to help you choose the right loan type for your situation.',
      readTime: '7 min read',
      slug: 'fixed-vs-adjustable-rate-refinance'
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Best Refinance Options - Compare Top Mortgage Refinance Rates 2025",
    "description": "Find the best mortgage refinance options with our comprehensive rate comparison tool and expert guides. Compare top lenders, calculate savings, and secure the lowest refinance rates in 2025.",
    "url": "https://bestrefinanceoptions.com/",
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are today's refinance rates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Current refinance rates vary by loan type and lender. 30-year fixed rates are around 7.125%, while 15-year fixed rates are approximately 6.750%. Rates change daily based on market conditions."
          }
        },
        {
          "@type": "Question", 
          "name": "How much can I save by refinancing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Refinance savings depend on your current rate, new rate, loan amount, and how long you plan to stay in your home. Use our calculator to estimate your potential monthly and lifetime savings."
          }
        }
      ]
    }
  };

  return (
    <Layout>
      <SEOHead
        title="Best Refinance Options - Compare Top Mortgage Refinance Rates 2025"
        description="Find the best mortgage refinance options with our comprehensive rate comparison tool and expert guides. Compare top lenders, calculate savings, and secure the lowest refinance rates in 2025."
        canonical="https://bestrefinanceoptions.com/"
        keywords="mortgage refinance, refinance rates, best refinance options, mortgage rates, refinance calculator, home loan refinancing"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
        <div className="container-page relative section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div>
                <h1 className="text-hero mb-6">
                  Find the Best Refinance Options for Your Home
                </h1>
                <p className="text-xl text-primary-foreground/90 leading-relaxed">
                  Compare top mortgage refinance rates, calculate your savings, and find trusted lenders. 
                  Our comprehensive guides help you secure the lowest rates and save thousands on your mortgage.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="btn-hero">
                  <Link to="/refinance-calculator">
                    <Calculator className="h-5 w-5 mr-2" />
                    Calculate Savings
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20">
                  <Link to="/best-refinance-options">
                    Compare Lenders
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-accent mr-2" />
                  <span>4.8/5 User Rating</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-accent mr-2" />
                  <span>Trusted by 100k+ Users</span>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-up">
              <img 
                src={heroImage} 
                alt="Family looking at their new home after successful refinancing" 
                className="rounded-lg shadow-elegant w-full h-auto"
                loading="eager"
                width="600"
                height="400"
              />
            </div>
          </div>
        </div>
      </section>

      <HeaderAd />

      {/* Current Rates Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-section text-gradient mb-4">Today's Refinance Rates</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Current refinance rates from top lenders. Rates updated daily and vary based on credit score, 
              loan amount, and other factors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentRates.map((rate, index) => (
              <Card key={index} className="card-feature text-center">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base text-primary">{rate.term}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-trust-green">{rate.rate}</div>
                    <div className="text-sm text-muted-foreground">APR {rate.apr}</div>
                    <Badge variant={rate.change.startsWith('-') ? 'default' : 'destructive'} className="text-xs">
                      {rate.change} vs yesterday
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild className="btn-primary">
              <Link to="/best-refinance-options">
                Compare All Lender Rates
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-section mb-4">Why Refinance Your Mortgage?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Refinancing can help you achieve multiple financial goals. Here are the most common benefits 
              homeowners experience when they refinance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="card-elevated text-center group hover:scale-105 transition-transform">
                  <CardContent className="pt-8">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                        <Icon className="h-8 w-8 text-accent" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <ContentAd />

      {/* Calculator Preview Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-page">
          <Card className="card-feature max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-section mb-6">Calculate Your Refinance Savings</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Use our comprehensive refinance calculator to see exactly how much you could save. 
                    Get instant estimates for monthly payments, total interest savings, and break-even analysis.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-trust-green mr-3" />
                      <span>Monthly payment comparison</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-trust-green mr-3" />
                      <span>Total interest savings calculation</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-trust-green mr-3" />
                      <span>Break-even point analysis</span>
                    </div>
                  </div>

                  <Button asChild size="lg" className="btn-trust">
                    <Link to="/refinance-calculator">
                      Try Calculator Now
                      <Calculator className="h-5 w-5 ml-2" />
                    </Link>
                  </Button>
                </div>

                <div className="bg-primary/5 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-center">Example Savings</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Current Payment:</span>
                      <span className="font-semibold text-destructive">$2,456/month</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">New Payment:</span>
                      <span className="font-semibold text-trust-green">$2,187/month</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Monthly Savings:</span>
                        <span className="font-bold text-trust-green text-lg">$269/month</span>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="font-medium">Total Savings:</span>
                        <span className="font-bold text-trust-green text-lg">$96,840</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Guides Section */}
      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-section mb-4">Expert Refinance Guides</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn from our comprehensive guides written by mortgage professionals. Get the knowledge 
              you need to make informed refinancing decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredGuides.map((guide, index) => (
              <Card key={index} className="card-elevated group hover:shadow-elegant transition-all">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">{guide.readTime}</Badge>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {guide.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {guide.description}
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={`/guides/${guide.slug}`}>
                      Read Guide
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to="/guides">
                View All Guides
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-page text-center">
          <h2 className="text-section mb-8">Trusted by Homeowners Nationwide</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">100k+</div>
              <div className="text-primary-foreground/80">Users Helped</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">$2.5B+</div>
              <div className="text-primary-foreground/80">Loans Compared</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">4.8/5</div>
              <div className="text-primary-foreground/80">User Rating</div>
            </div>
          </div>

          <blockquote className="max-w-3xl mx-auto">
            <p className="text-xl italic mb-4">
              "Best Refinance Options helped me find a lender that saved me $385 per month. 
              The comparison tool made it easy to see all my options in one place."
            </p>
            <footer className="text-primary-foreground/80">
              - Sarah M., Homeowner from Austin, TX
            </footer>
          </blockquote>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
