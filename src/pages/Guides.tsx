import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import SEOHead from '@/components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { HeaderAd, ContentAd } from '@/components/AdSenseUnit';
import { Clock, ArrowRight, BookOpen, TrendingUp } from 'lucide-react';

const Guides = () => {
  const guides = [
    {
      title: 'Best Mortgage Refinance Rates in 2025: Updated Guide',
      description: 'Complete analysis of current refinance rates, market trends, and what to expect in 2025. Includes rate predictions and timing strategies.',
      readTime: '8 min read',
      category: 'Rates & Trends',
      slug: 'best-mortgage-refinance-rates-2025',
      featured: true,
      lastUpdated: '2025-01-15'
    },
    {
      title: 'How to Choose the Best Refinance Option',
      description: 'Step-by-step guide to evaluating refinance offers, comparing lenders, and selecting the right loan for your situation.',
      readTime: '10 min read',
      category: 'Decision Making',
      slug: 'how-to-choose-best-refinance-option',
      featured: true,
      lastUpdated: '2025-01-14'
    },
    {
      title: 'Cash-Out Refinance Explained: Pros and Cons',
      description: 'Everything you need to know about cash-out refinancing, including requirements, costs, and alternatives.',
      readTime: '12 min read',
      category: 'Loan Types',
      slug: 'cash-out-refinance-explained',
      featured: true,
      lastUpdated: '2025-01-13'
    },
    {
      title: 'How Much Can You Save by Refinancing?',
      description: 'Real examples and case studies showing potential refinance savings across different scenarios and loan amounts.',
      readTime: '6 min read',
      category: 'Savings Analysis',
      slug: 'how-much-save-refinancing',
      featured: false,
      lastUpdated: '2025-01-12'
    },
    {
      title: 'Fixed vs Adjustable Rate Refinance',
      description: 'Expert comparison to help you choose between fixed and adjustable rate mortgages for your refinance.',
      readTime: '7 min read',
      category: 'Loan Types',
      slug: 'fixed-vs-adjustable-rate-refinance',
      featured: false,
      lastUpdated: '2025-01-11'
    },
    {
      title: 'Top Refinance Lenders in 2025',
      description: 'Comprehensive review of the best mortgage refinance lenders, their strengths, and ideal customer profiles.',
      readTime: '15 min read',
      category: 'Lender Reviews',
      slug: 'top-refinance-lenders-2025',
      featured: false,
      lastUpdated: '2025-01-10'
    },
    {
      title: 'How to Qualify for the Lowest Refinance Rates',
      description: 'Proven strategies to improve your credit, reduce your debt-to-income ratio, and secure the best rates.',
      readTime: '9 min read',
      category: 'Qualification',
      slug: 'qualify-lowest-refinance-rates',
      featured: false,
      lastUpdated: '2025-01-09'
    },
    {
      title: 'Refinancing with Bad Credit: What\'s Possible?',
      description: 'Options for homeowners with poor credit, including government programs and alternative lenders.',
      readTime: '11 min read',
      category: 'Credit Issues',
      slug: 'refinancing-bad-credit-options',
      featured: false,
      lastUpdated: '2025-01-08'
    },
    {
      title: 'Refinance vs Home Equity Loan',
      description: 'Side-by-side comparison of refinancing versus home equity loans for accessing home equity.',
      readTime: '8 min read',
      category: 'Loan Types',
      slug: 'refinance-vs-home-equity-loan',
      featured: false,
      lastUpdated: '2025-01-07'
    },
    {
      title: 'Step-by-Step Mortgage Refinance Process',
      description: 'Complete walkthrough of the refinance process from application to closing, with timeline and tips.',
      readTime: '14 min read',
      category: 'Process Guide',
      slug: 'mortgage-refinance-process',
      featured: false,
      lastUpdated: '2025-01-06'
    },
    {
      title: 'When Is the Right Time to Refinance?',
      description: 'Market timing, personal factors, and financial indicators that signal when refinancing makes sense.',
      readTime: '7 min read',
      category: 'Timing',
      slug: 'right-time-refinance',
      featured: false,
      lastUpdated: '2025-01-05'
    },
    {
      title: 'How Credit Score Impacts Your Refinance Rate',
      description: 'Detailed breakdown of how different credit scores affect refinance rates and approval odds.',
      readTime: '6 min read',
      category: 'Credit & Rates',
      slug: 'credit-score-refinance-rate',
      featured: false,
      lastUpdated: '2025-01-04'
    },
    {
      title: 'Hidden Costs of Refinancing',
      description: 'Complete breakdown of refinance fees, closing costs, and unexpected expenses to budget for.',
      readTime: '9 min read',
      category: 'Costs & Fees',
      slug: 'hidden-costs-refinancing',
      featured: false,
      lastUpdated: '2025-01-03'
    },
    {
      title: 'VA Loan Refinance Options',
      description: 'Specialized guide for veterans and service members exploring VA refinance programs and benefits.',
      readTime: '10 min read',
      category: 'VA Loans',
      slug: 'va-loan-refinance-options',
      featured: false,
      lastUpdated: '2025-01-02'
    },
    {
      title: 'Rising Rates: What It Means for Refinancing in 2025',
      description: 'How changing interest rates affect refinance decisions and strategies for navigating a rising rate environment.',
      readTime: '8 min read',
      category: 'Market Analysis',
      slug: 'rising-rates-refinancing-2025',
      featured: false,
      lastUpdated: '2025-01-01'
    }
  ];

  const categories = [
    'All Guides',
    'Rates & Trends',
    'Decision Making',
    'Loan Types',
    'Process Guide',
    'Credit & Rates'
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Mortgage Refinance Guides - Expert Education and Tips",
    "description": "Comprehensive mortgage refinance guides written by industry experts. Learn about rates, lenders, qualification, and the refinance process.",
    "url": "https://refi-rate-genius.lovable.app/guides",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": guides.map((guide, index) => ({
        "@type": "Article",
        "position": index + 1,
        "name": guide.title,
        "description": guide.description,
        "url": `https://refi-rate-genius.lovable.app/guides/${guide.slug}`
      }))
    }
  };

  return (
    <Layout>
      <SEOHead
        title="Mortgage Refinance Guides - Expert Education and Tips"
        description="Comprehensive mortgage refinance guides written by industry experts. Learn about rates, lenders, qualification, and the refinance process."
        canonical="https://refi-rate-genius.lovable.app/guides"
        keywords="mortgage refinance guides, refinance tips, mortgage education, refinance process"
        schema={schema}
      />

      <div className="min-h-screen bg-background">
        <div className="container-page section-padding">
          <HeaderAd />

          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="h-8 w-8 text-accent mr-3" />
              <h1 className="text-hero">Refinance Guides & Education</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Expert-written guides to help you navigate every aspect of mortgage refinancing. 
              From understanding rates to choosing lenders, we've got you covered.
            </p>
          </div>

          {/* Featured Guides */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <TrendingUp className="h-6 w-6 text-accent mr-2" />
              <h2 className="text-section">Featured Guides</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {guides.filter(guide => guide.featured).map((guide, index) => (
                <Card key={index} className="card-feature group hover:shadow-elegant transition-all">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-accent/10 text-accent">
                        {guide.category}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {guide.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                      {guide.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                      {guide.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        Updated {new Date(guide.lastUpdated).toLocaleDateString()}
                      </span>
                      <Button asChild variant="outline" size="sm">
                        <Link to={`/guides/${guide.slug}`}>
                          Read Guide
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <ContentAd />

          {/* All Guides */}
          <div>
            <h2 className="text-section mb-8">All Guides</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Category Filter */}
              <div className="lg:col-span-1">
                <Card className="card-elevated sticky top-24">
                  <CardHeader>
                    <CardTitle className="text-lg">Browse by Category</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {categories.map((category, index) => (
                        <button
                          key={index}
                          className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-accent/10 hover:text-accent transition-colors"
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Guides List */}
              <div className="lg:col-span-3">
                <div className="space-y-6">
                  {guides.map((guide, index) => (
                    <Card key={index} className="card-elevated group">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-start gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline" className="text-xs">
                                {guide.category}
                              </Badge>
                              <div className="flex items-center text-xs text-muted-foreground">
                                <Clock className="h-3 w-3 mr-1" />
                                {guide.readTime}
                              </div>
                              {guide.featured && (
                                <Badge variant="secondary" className="bg-accent/10 text-accent text-xs">
                                  Featured
                                </Badge>
                              )}
                            </div>
                            
                            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                              {guide.title}
                            </h3>
                            
                            <p className="text-muted-foreground leading-relaxed mb-3">
                              {guide.description}
                            </p>
                            
                            <div className="text-xs text-muted-foreground">
                              Last updated: {new Date(guide.lastUpdated).toLocaleDateString()}
                            </div>
                          </div>
                          
                          <div className="flex-shrink-0">
                            <Button asChild variant="outline">
                              <Link to={`/guides/${guide.slug}`}>
                                Read Guide
                                <ArrowRight className="h-4 w-4 ml-2" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <Card className="card-feature mt-16 text-center">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Ready to Start Your Refinance Journey?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Use our calculator to estimate your savings and compare rates from top lenders 
                to find the best refinance option for your situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="btn-trust">
                  <Link to="/refinance-calculator">Calculate Savings</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/best-refinance-options">Compare Lenders</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Guides;