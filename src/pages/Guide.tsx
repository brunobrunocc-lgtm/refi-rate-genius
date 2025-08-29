import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import SEOHead from '@/components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ContentAd, SidebarAd } from '@/components/AdSenseUnit';
import { Clock, ArrowLeft, ArrowRight, Share2, Bookmark, User, Calendar, Calculator, TrendingDown } from 'lucide-react';

const Guide = () => {
  const { slug } = useParams<{ slug: string }>();

  // Guide data for all articles
  const guideData = {
    'best-mortgage-refinance-rates-2025': {
      title: 'Best Mortgage Refinance Rates in 2025: Updated Guide',
      description: 'Complete analysis of current refinance rates, market trends, and what to expect in 2025. Includes rate predictions and timing strategies.',
      author: 'Sarah Johnson, Mortgage Specialist',
      publishDate: '2025-01-15',
      readTime: '8 min read',
      category: 'Rates & Trends',
      lastUpdated: '2025-01-15',
      content: `
# Best Mortgage Refinance Rates in 2025: Updated Guide

The mortgage refinance landscape in 2025 presents both opportunities and challenges for homeowners looking to reduce their monthly payments or access home equity. With interest rates showing signs of stabilization after the volatility of recent years, understanding current market conditions is crucial for making informed refinancing decisions.

## Current Refinance Rate Overview

As of January 2025, refinance rates have settled into a more predictable range, though they remain elevated compared to the historic lows of 2020-2021. Here's what homeowners can expect:

### 30-Year Fixed Refinance Rates
- **Average Rate Range**: 6.875% - 7.250%
- **Rate Movement**: Relatively stable with minor daily fluctuations
- **Best Available Rates**: 6.625% for borrowers with excellent credit (780+ FICO)

### 15-Year Fixed Refinance Rates  
- **Average Rate Range**: 6.250% - 6.750%
- **Rate Movement**: Following similar patterns to 30-year rates
- **Best Available Rates**: 6.125% for top-tier borrowers

## Who Should Consider Refinancing in 2025?

Not every homeowner will benefit from refinancing in the current rate environment. Here are scenarios where refinancing makes the most sense:

### High-Rate Borrowers
Homeowners with existing mortgage rates above 7.5% have the strongest case for refinancing:

- **Rate Reduction Potential**: 0.5% - 1.5% rate improvement possible
- **Monthly Savings**: $200 - $500+ monthly savings on average loans
- **Break-Even Timeline**: 18-36 months typically

### Cash-Out Refinance Candidates
Despite higher rates, cash-out refinancing may make sense for:

- **Home Improvement Projects**: Rates often better than personal loans or credit cards
- **Debt Consolidation**: Replacing high-interest debt with mortgage debt
- **Investment Opportunities**: Leveraging home equity for investment purposes

*This guide provides general information and should not be considered personalized financial advice. Always consult with qualified mortgage professionals for decisions specific to your situation.*
      `,
      relatedGuides: [
        {
          title: 'How to Qualify for the Lowest Refinance Rates',
          slug: 'qualify-lowest-refinance-rates'
        },
        {
          title: 'When Is the Right Time to Refinance?',
          slug: 'right-time-refinance'
        },
        {
          title: 'Top Refinance Lenders in 2025',
          slug: 'top-refinance-lenders-2025'
        }
      ]
    },
    'how-to-choose-best-refinance-option': {
      title: 'How to Choose the Best Refinance Option',
      description: 'Step-by-step guide to evaluating refinance offers, comparing lenders, and selecting the right loan for your situation.',
      author: 'Michael Chen, Certified Mortgage Planner',
      publishDate: '2025-01-14',
      readTime: '10 min read',
      category: 'Decision Making',
      lastUpdated: '2025-01-14',
      content: `
# How to Choose the Best Refinance Option

Choosing the right refinance option is one of the most important financial decisions homeowners can make. With potentially hundreds of thousands of dollars at stake over the life of your loan, taking a strategic approach to evaluating and comparing refinance offers can save you significant money and stress.

## Step 1: Define Your Refinancing Goals

Before you start shopping for rates, it's crucial to clearly define what you want to achieve through refinancing. Different goals require different strategies and loan types.

### Primary Refinancing Goals

**Lower Monthly Payments**
- Reduce interest rate to decrease monthly payments
- Extend loan term to lower payments (though this increases total interest)
- Switch from ARM to fixed-rate for payment stability

**Reduce Total Interest Costs**
- Shorten loan term (30-year to 15-year)
- Take advantage of significantly lower rates
- Make extra principal payments more manageable

**Access Home Equity**
- Cash-out refinance for home improvements
- Debt consolidation at lower interest rates
- Investment opportunities or major purchases

## Step 2: Assess Your Financial Position

Your current financial situation determines which refinance options are available and most beneficial.

### Credit Score Analysis

**Excellent Credit (740+)**
- Qualify for best available rates
- More loan program options
- Lower fees and closing costs
- Negotiating power with lenders

**Good Credit (680-739)**
- Competitive rates available
- May need to shop more aggressively
- Consider credit improvement before applying

**Fair Credit (620-679)**
- Limited to higher rates
- Fewer lender options
- May benefit from waiting to improve credit

*This guide provides general information and should not be considered personalized financial advice. Consult with qualified mortgage professionals for advice specific to your situation.*
      `,
      relatedGuides: [
        {
          title: 'Best Mortgage Refinance Rates in 2025',
          slug: 'best-mortgage-refinance-rates-2025'
        },
        {
          title: 'How to Qualify for the Lowest Refinance Rates',
          slug: 'qualify-lowest-refinance-rates'
        },
        {
          title: 'Top Refinance Lenders in 2025',
          slug: 'top-refinance-lenders-2025'
        }
      ]
    },
    'cash-out-refinance-explained': {
      title: 'Cash-Out Refinance Explained: Pros and Cons',
      description: 'Everything you need to know about cash-out refinancing, including requirements, costs, and alternatives.',
      author: 'Jennifer Davis, Real Estate Finance Expert',
      publishDate: '2025-01-13',
      readTime: '12 min read',
      category: 'Loan Types',
      lastUpdated: '2025-01-13',
      content: `
# Cash-Out Refinance Explained: Pros and Cons

A cash-out refinance allows homeowners to tap into their home's equity by refinancing for more than they owe and receiving the difference in cash. While this can be a powerful financial tool, it's important to understand both the benefits and risks before making this significant decision.

## What Is a Cash-Out Refinance?

A cash-out refinance replaces your existing mortgage with a new, larger loan, allowing you to receive the difference between the two loans as cash. Unlike a traditional refinance that simply changes your loan terms or rate, a cash-out refinance increases your mortgage balance.

### How It Works

1. **Property Appraisal**: Your home is appraised to determine current value
2. **Equity Calculation**: Lender calculates available equity (typically up to 80% of home value)
3. **New Loan Amount**: You refinance for an amount higher than your current balance
4. **Cash Distribution**: The difference is provided to you at closing

## Pros of Cash-Out Refinancing

### Access to Large Amounts of Cash
- **Lower Interest Rates**: Mortgage rates typically much lower than personal loans or credit cards
- **Large Loan Amounts**: Access significant equity built up over time
- **Extended Repayment**: 15-30 year terms make payments manageable

### Tax Advantages
- **Home Improvement Deduction**: Interest may be tax-deductible for home improvements
- **Investment Property**: Potential deductions for investment property purchases
- **Consult Tax Professional**: Rules are complex and change frequently

## Cons of Cash-Out Refinancing

### Increased Debt and Risk
- **Higher Mortgage Balance**: Increases total debt secured by your home
- **Foreclosure Risk**: Home serves as collateral for larger loan amount
- **Extended Payment Period**: May extend time to pay off mortgage

### Higher Costs
- **Interest Rates**: Typically 0.125% - 0.50% higher than rate-and-term refinances
- **Closing Costs**: 2% - 5% of new loan amount
- **PMI Requirements**: May trigger mortgage insurance if LTV exceeds 80%

*This guide provides general information and should not be considered personalized financial advice. Consult with qualified mortgage and tax professionals for advice specific to your situation.*
      `,
      relatedGuides: [
        {
          title: 'How to Choose the Best Refinance Option',
          slug: 'how-to-choose-best-refinance-option'
        },
        {
          title: 'Refinance vs Home Equity Loan',
          slug: 'refinance-vs-home-equity-loan'
        },
        {
          title: 'How Much Can You Save by Refinancing?',
          slug: 'how-much-save-refinancing'
        }
      ]
    },
    'how-much-save-refinancing': {
      title: 'How Much Can You Save by Refinancing?',
      description: 'Real examples and case studies showing potential refinance savings across different scenarios and loan amounts.',
      author: 'David Rodriguez, Financial Analyst',
      publishDate: '2025-01-12',
      readTime: '6 min read',
      category: 'Savings Analysis',
      lastUpdated: '2025-01-12',
      content: `
# How Much Can You Save by Refinancing?

Understanding potential savings is crucial when deciding whether to refinance your mortgage. This guide provides real-world examples and calculation methods to help you determine if refinancing makes financial sense for your situation.

## Average Refinance Savings by Scenario

### Rate Reduction Scenarios

**1% Rate Reduction on $300,000 Loan**
- Current Payment (6.5%): $1,896/month
- New Payment (5.5%): $1,703/month
- Monthly Savings: $193
- Annual Savings: $2,316
- 30-Year Savings: $69,480

**0.5% Rate Reduction on $500,000 Loan**
- Current Payment (7.0%): $3,327/month
- New Payment (6.5%): $3,160/month
- Monthly Savings: $167
- Annual Savings: $2,004
- 30-Year Savings: $60,120

### Term Reduction Scenarios

**30-Year to 15-Year Refinance ($400,000 Loan)**
- 30-Year at 6.5%: $2,528/month, $509,680 total interest
- 15-Year at 6.0%: $3,375/month, $207,500 total interest
- Interest Savings: $302,180
- Payment Increase: $847/month

## Real Case Studies

### Case Study 1: The Rate Optimizer
**Situation**: 
- Original Loan: $350,000 at 7.25% (30-year)
- New Loan: $350,000 at 6.0% (30-year)
- Closing Costs: $4,200

**Results**:
- Monthly Savings: $293
- Break-Even: 14 months
- 5-Year Savings: $13,420
- Lifetime Savings: $105,480

*This analysis provides general information and should not be considered personalized financial advice. Consult with qualified professionals for advice specific to your situation.*
      `,
      relatedGuides: [
        {
          title: 'How to Choose the Best Refinance Option',
          slug: 'how-to-choose-best-refinance-option'
        },
        {
          title: 'When Is the Right Time to Refinance?',
          slug: 'right-time-refinance'
        },
        {
          title: 'Hidden Costs of Refinancing',
          slug: 'hidden-costs-refinancing'
        }
      ]
    },
    'fixed-vs-adjustable-rate-refinance': {
      title: 'Fixed vs Adjustable Rate Refinance',
      description: 'Expert comparison to help you choose between fixed and adjustable rate mortgages for your refinance.',
      author: 'Lisa Thompson, Mortgage Advisor',
      publishDate: '2025-01-11',
      readTime: '7 min read',
      category: 'Loan Types',
      lastUpdated: '2025-01-11',
      content: `
# Fixed vs Adjustable Rate Refinance

Choosing between a fixed-rate and adjustable-rate mortgage (ARM) for your refinance is a critical decision that affects your payments for years to come. This guide helps you understand the key differences and determine which option best fits your situation.

## Fixed-Rate Refinance Mortgages

### How They Work
Fixed-rate mortgages maintain the same interest rate throughout the entire loan term, providing predictable monthly payments from day one until payoff.

### Advantages of Fixed-Rate Refinancing
- **Payment Stability**: Your principal and interest payment never changes
- **Budget Certainty**: Easier to plan long-term finances
- **Rate Protection**: Protected from interest rate increases
- **Simplicity**: Easy to understand and compare

### Disadvantages of Fixed-Rate Refinancing
- **Higher Initial Rates**: Typically 0.5% - 1% higher than initial ARM rates
- **No Benefit from Rate Decreases**: Payments stay the same even if rates fall
- **Higher Monthly Payments**: Initially higher payments compared to ARMs

## Adjustable-Rate Mortgage (ARM) Refinancing

### How They Work
ARMs start with a fixed interest rate for an initial period, then adjust periodically based on market conditions and a specific index.

### Common ARM Types
- **5/1 ARM**: Fixed for 5 years, then adjusts annually
- **7/1 ARM**: Fixed for 7 years, then adjusts annually  
- **10/1 ARM**: Fixed for 10 years, then adjusts annually

### Advantages of ARM Refinancing
- **Lower Initial Rates**: Often 0.5% - 1% below fixed rates initially
- **Lower Initial Payments**: Reduced monthly payments during fixed period
- **Rate Decrease Potential**: Payments can decrease if rates fall
- **Payment Flexibility**: Extra payment capacity during low-rate period

### Disadvantages of ARM Refinancing
- **Payment Uncertainty**: Payments can increase significantly after initial period
- **Rate Risk**: Vulnerable to interest rate increases
- **Complexity**: More difficult to understand rate adjustment mechanics
- **Budget Challenges**: Harder to plan for variable payments

## When to Choose Fixed-Rate Refinancing

### Long-Term Homeowners
If you plan to stay in your home for more than 7-10 years, fixed-rate refinancing typically provides better value and security.

### Risk-Averse Borrowers
Homeowners who prioritize payment stability and budget certainty should choose fixed-rate options.

### High Interest Rate Environment
When rates are relatively low or expected to rise, locking in a fixed rate protects against future increases.

## When to Choose ARM Refinancing

### Short-Term Homeowners
If you plan to sell or refinance within 5-7 years, ARMs can provide significant savings during the initial fixed period.

### Rate Optimists
Borrowers who believe rates will remain stable or decline may benefit from ARM flexibility.

### Payment Capacity
Homeowners with strong income growth potential or irregular income patterns may prefer lower initial payments.

*This guide provides general information and should not be considered personalized financial advice. Consider your personal financial situation and consult with qualified mortgage professionals.*
      `,
      relatedGuides: [
        {
          title: 'How to Choose the Best Refinance Option',
          slug: 'how-to-choose-best-refinance-option'
        },
        {
          title: 'Best Mortgage Refinance Rates in 2025',
          slug: 'best-mortgage-refinance-rates-2025'
        },
        {
          title: 'Rising Rates: What It Means for Refinancing in 2025',
          slug: 'rising-rates-refinancing-2025'
        }
      ]
    },
    'top-refinance-lenders-2025': {
      title: 'Top Refinance Lenders in 2025',
      description: 'Comprehensive review of the best mortgage refinance lenders, their strengths, and ideal customer profiles.',
      author: 'Robert Kim, Lending Industry Analyst',
      publishDate: '2025-01-10',
      readTime: '15 min read',
      category: 'Lender Reviews',
      lastUpdated: '2025-01-10',
      content: `
# Top Refinance Lenders in 2025

Choosing the right lender is just as important as finding the best rate. This comprehensive review analyzes the top refinance lenders in 2025, examining their strengths, customer service, and ideal borrower profiles.

## Online Lenders

### Rocket Mortgage (Quicken Loans)
**Strengths**:
- Industry-leading technology platform
- Fast approval and closing times (average 30 days)
- Excellent customer service ratings
- Comprehensive online experience

**Best For**: Tech-savvy borrowers who prefer digital processes

**Rate Competitiveness**: Above average, typically within 0.125% of best available

### Better Mortgage
**Strengths**:
- Highly competitive rates
- No origination fees on most loans
- Fast digital processing
- Transparent pricing

**Best For**: Rate-focused borrowers seeking low-cost refinancing

**Rate Competitiveness**: Among the most competitive in the industry

## Traditional Banks

### Chase
**Strengths**:
- Relationship rate discounts for existing customers
- Large branch network for in-person service
- Comprehensive financial services
- Strong customer support

**Best For**: Existing Chase customers and those preferring traditional banking

**Rate Competitiveness**: Competitive, especially with relationship discounts

### Bank of America
**Strengths**:
- Preferred Rewards program benefits
- Extensive branch network
- Strong online platform
- Military and veteran programs

**Best For**: Preferred Rewards members and traditional banking customers

**Rate Competitiveness**: Market competitive with member benefits

## Credit Unions

### Navy Federal Credit Union
**Strengths**:
- Excellent rates for military members
- Flexible underwriting guidelines
- Strong member service focus
- Low fees and closing costs

**Best For**: Military members, veterans, and their families

**Rate Competitiveness**: Among the best available for eligible members

*This review provides general information based on publicly available data. Individual experiences may vary. Always compare multiple lenders and read current terms and conditions.*
      `,
      relatedGuides: [
        {
          title: 'How to Choose the Best Refinance Option',
          slug: 'how-to-choose-best-refinance-option'
        },
        {
          title: 'Best Mortgage Refinance Rates in 2025',
          slug: 'best-mortgage-refinance-rates-2025'
        },
        {
          title: 'How to Qualify for the Lowest Refinance Rates',
          slug: 'qualify-lowest-refinance-rates'
        }
      ]
    },
    'qualify-lowest-refinance-rates': {
      title: 'How to Qualify for the Lowest Refinance Rates',
      description: 'Proven strategies to improve your credit, reduce your debt-to-income ratio, and secure the best rates.',
      author: 'Amanda Foster, Credit Specialist',
      publishDate: '2025-01-09',
      readTime: '9 min read',
      category: 'Qualification',
      lastUpdated: '2025-01-09',
      content: `
# How to Qualify for the Lowest Refinance Rates

Securing the lowest possible refinance rate can save you tens of thousands of dollars over the life of your loan. This guide provides proven strategies to improve your financial profile and qualify for the best rates available.

## Credit Score Optimization

### Understanding Credit Score Impact
- **740+ FICO**: Qualify for best available rates
- **720-739 FICO**: Excellent rates, minimal rate premium
- **700-719 FICO**: Good rates, slight premium
- **680-699 FICO**: Fair rates, moderate premium
- **Below 680**: Higher rates, limited options

### Quick Credit Improvements (30-60 days)
**Pay Down Credit Card Balances**
- Target utilization below 10% on all cards
- Pay down highest utilization cards first
- Consider multiple payments per month

**Dispute Credit Report Errors**
- Obtain free credit reports from all three bureaus
- Dispute any inaccuracies immediately
- Follow up to ensure corrections are made

**Avoid New Credit Inquiries**
- Don't apply for new credit cards or loans
- Postpone major purchases requiring financing
- Wait until after refinance closing to apply for credit

### Long-Term Credit Strategies (3-6 months)
**Diversify Credit Types**
- Maintain mix of credit cards and installment loans
- Keep old accounts open to maintain credit history
- Consider becoming authorized user on family member's account

## Debt-to-Income Ratio Improvement

### Calculate Your DTI
**Front-End DTI**: (Proposed mortgage payment ÷ Gross monthly income) × 100
**Back-End DTI**: (Total monthly debt payments ÷ Gross monthly income) × 100

### Target DTI Ratios for Best Rates
- **Front-End DTI**: Below 28%
- **Back-End DTI**: Below 36%
- **Maximum for most programs**: 43%

### Strategies to Lower DTI
**Increase Income**
- Request salary increase or promotion
- Take on freelance or part-time work
- Include all qualifying income sources
- Document consistent bonus or commission income

**Reduce Monthly Debt Payments**
- Pay off credit cards and personal loans
- Consolidate high-interest debt
- Refinance auto loans to lower payments
- Consider paying off debts with savings

## Employment and Income Documentation

### Employment Stability Requirements
- **2+ years** in same job or field preferred
- **6 months minimum** in current position for most lenders
- **Consistent industry** for job changes
- **Higher income trajectory** strengthens application

### Income Documentation Best Practices
**W-2 Employees**:
- 2 years of tax returns
- Recent pay stubs (30 days)
- Verification of employment
- Bonus/commission documentation if applicable

**Self-Employed Borrowers**:
- 2 years of personal and business tax returns
- Profit & loss statements
- Bank statements (business and personal)
- CPA letter if applicable

*This guide provides general strategies for rate qualification. Individual results may vary based on lender requirements and market conditions. Consult with qualified mortgage professionals for personalized advice.*
      `,
      relatedGuides: [
        {
          title: 'How to Choose the Best Refinance Option',
          slug: 'how-to-choose-best-refinance-option'
        },
        {
          title: 'Best Mortgage Refinance Rates in 2025',
          slug: 'best-mortgage-refinance-rates-2025'
        },
        {
          title: 'Refinancing with Bad Credit: What\'s Possible?',
          slug: 'refinancing-bad-credit-options'
        }
      ]
    },
    'refinancing-bad-credit-options': {
      title: 'Refinancing with Bad Credit: What\'s Possible?',
      description: 'Options for homeowners with poor credit, including government programs and alternative lenders.',
      author: 'Carlos Martinez, Credit Rehabilitation Specialist',
      publishDate: '2025-01-08',
      readTime: '11 min read',
      category: 'Credit Issues',
      lastUpdated: '2025-01-08',
      content: `
# Refinancing with Bad Credit: What's Possible?

Having poor credit doesn't automatically disqualify you from refinancing, but it does limit your options and affect the rates you'll receive. This guide explores available programs and strategies for homeowners with credit challenges.

## Understanding "Bad Credit" for Refinancing

### Credit Score Ranges
- **Poor Credit**: 300-579 FICO
- **Fair Credit**: 580-669 FICO  
- **Good Credit**: 670-739 FICO
- **Excellent Credit**: 740+ FICO

### How Credit Affects Refinancing
**Rate Impact**: Poor credit can add 0.5% - 2.0%+ to your interest rate
**Program Limitations**: Fewer loan options available
**Higher Costs**: Increased fees and closing costs
**Stricter Requirements**: More documentation and verification needed

## Government Refinance Programs for Bad Credit

### FHA Streamline Refinance
**Minimum Credit Score**: 580 (some lenders accept 500)
**Key Benefits**:
- Minimal documentation required
- No appraisal needed in most cases
- No income verification for rate/term refinances
- Must result in net tangible benefit

**Requirements**:
- Current FHA loan for at least 6 months
- No late payments in past 12 months
- Lower payment or more stable loan terms

### VA Interest Rate Reduction Refinance Loan (IRRRL)
**Minimum Credit Score**: No official minimum (lender dependent)
**Key Benefits**:
- Available to veterans with existing VA loans
- No appraisal required
- No income or credit verification
- Can roll closing costs into loan

**Requirements**:
- Current VA loan
- Must reduce interest rate or payment
- Occupancy certification

### USDA Streamlined Assist Refinance
**Minimum Credit Score**: 640 typically required
**Key Benefits**:
- For existing USDA loan holders
- Simplified documentation
- No appraisal required
- Must reduce payment

## Alternative Lender Options

### Non-QM (Non-Qualified Mortgage) Lenders
**Who They Serve**: Borrowers who don't meet traditional lending criteria
**Credit Requirements**: Often accept scores as low as 500-550
**Trade-offs**: Higher rates and fees, alternative documentation

### Portfolio Lenders
**Advantages**: Keep loans in-house, more flexible underwriting
**Examples**: Local banks and credit unions
**Benefits**: Can make exceptions for borrowers with compensating factors

## Strategies to Improve Approval Odds

### Compensating Factors
**Large Down Payment/Equity**: 25%+ equity can offset credit issues
**Substantial Assets**: Significant savings and investments
**Low Debt-to-Income**: DTI below 30% strengthens application
**Stable Employment**: Long employment history with same employer

### Documentation Strategy
**Explanation Letters**: Written explanations for credit issues
**Proof of Rehabilitation**: Evidence of improved financial management
**Supporting Documents**: Medical bills, divorce papers, job loss documentation

*This guide provides general information about options for borrowers with credit challenges. Individual circumstances vary significantly. Consult with mortgage professionals who specialize in credit-challenged borrowers.*
      `,
      relatedGuides: [
        {
          title: 'How to Qualify for the Lowest Refinance Rates',
          slug: 'qualify-lowest-refinance-rates'
        },
        {
          title: 'How Credit Score Impacts Your Refinance Rate',
          slug: 'credit-score-refinance-rate'
        },
        {
          title: 'FHA vs Conventional Refinance Options',
          slug: 'fha-vs-conventional-refinance'
        }
      ]
    }
  };

  const guide = guideData[slug as keyof typeof guideData];

  if (!guide) {
    return (
      <Layout>
        <div className="container-page section-padding text-center">
          <h1 className="text-4xl font-bold mb-4">Guide Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The guide you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild>
            <Link to="/guides">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Guides
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": guide.title,
    "description": guide.description,
    "author": {
      "@type": "Person",
      "name": guide.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Best Refinance Options",
      "logo": {
        "@type": "ImageObject",
        "url": "https://refi-rate-genius.lovable.app/logo.png"
      }
    },
    "datePublished": guide.publishDate,
    "dateModified": guide.lastUpdated,
    "url": `https://refi-rate-genius.lovable.app/guides/${slug}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://refi-rate-genius.lovable.app/guides/${slug}`
    },
    "articleSection": guide.category,
    "wordCount": guide.content.split(' ').length
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://refi-rate-genius.lovable.app/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Guides",
        "item": "https://refi-rate-genius.lovable.app/guides"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": guide.title,
        "item": `https://refi-rate-genius.lovable.app/guides/${slug}`
      }
    ]
  };

  return (
    <Layout>
      <SEOHead
        title={`${guide.title} | Best Refinance Options`}
        description={guide.description}
        canonical={`https://refi-rate-genius.lovable.app/guides/${slug}`}
        keywords={`${guide.category.toLowerCase()}, mortgage refinance, refinance guide, ${slug.replace(/-/g, ' ')}`}
        schema={[schema, breadcrumbSchema]}
        ogType="article"
      />

      <div className="min-h-screen bg-background">
        <div className="container-page py-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link to="/guides" className="hover:text-primary">Guides</Link>
            <span>/</span>
            <span className="text-foreground">{guide.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Article Header */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="outline" className="bg-accent/10 text-accent">
                    {guide.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {guide.readTime}
                  </div>
                </div>

                <h1 className="text-hero mb-4">{guide.title}</h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                  {guide.description}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {guide.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(guide.publishDate).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm">
                      <Bookmark className="h-4 w-4 mr-1" />
                      Save
                    </Button>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <Card className="card-elevated mb-8">
                <CardContent className="p-8">
                  <div className="prose prose-lg max-w-none">
                    {guide.content.split('\n').map((paragraph, index) => {
                      if (paragraph.startsWith('#')) {
                        const level = paragraph.match(/^#+/)?.[0].length || 1;
                        const text = paragraph.replace(/^#+\s/, '');
                        const HeadingTag = `h${Math.min(level, 6)}` as keyof JSX.IntrinsicElements;
                        return (
                          <HeadingTag key={index} className={`font-playfair font-semibold mt-8 mb-4 ${
                            level === 1 ? 'text-3xl' : 
                            level === 2 ? 'text-2xl' : 
                            level === 3 ? 'text-xl' : 'text-lg'
                          }`}>
                            {text}
                          </HeadingTag>
                        );
                      } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                        return <p key={index} className="font-semibold text-lg mt-4 mb-2">{paragraph.replace(/\*\*/g, '')}</p>;
                      } else if (paragraph.startsWith('- ')) {
                        return <li key={index} className="ml-4 mb-1">{paragraph.replace('- ', '')}</li>;
                      } else if (paragraph.trim()) {
                        return <p key={index} className="mb-4 leading-relaxed text-muted-foreground">{paragraph}</p>;
                      }
                      return null;
                    })}
                  </div>
                </CardContent>
              </Card>

              <ContentAd />

              {/* Related Guides */}
              {guide.relatedGuides && guide.relatedGuides.length > 0 && (
                <Card className="card-elevated">
                  <CardHeader>
                    <CardTitle>Related Guides</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {guide.relatedGuides.map((relatedGuide, index) => (
                        <div key={index} className="p-4 border border-border rounded-lg hover:shadow-card transition-shadow">
                          <h4 className="font-semibold mb-2">
                            <Link to={`/guides/${relatedGuide.slug}`} className="hover:text-primary">
                              {relatedGuide.title}
                            </Link>
                          </h4>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8">
                <Button asChild variant="outline">
                  <Link to="/guides">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    All Guides
                  </Link>
                </Button>
                
                <Button asChild>
                  <Link to="/refinance-calculator">
                    Calculate Savings
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <SidebarAd />
                
                {/* Quick Links */}
                <Card className="card-elevated">
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Links</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Button asChild variant="outline" className="w-full justify-start">
                        <Link to="/refinance-calculator">
                          <Calculator className="h-4 w-4 mr-2" />
                          Refinance Calculator
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full justify-start">
                        <Link to="/best-refinance-options">
                          <TrendingDown className="h-4 w-4 mr-2" />
                          Compare Lenders
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full justify-start">
                        <Link to="/guides">
                          <ArrowLeft className="h-4 w-4 mr-2" />
                          All Guides
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Article Info */}
                <Card className="card-elevated">
                  <CardHeader>
                    <CardTitle className="text-lg">Article Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-medium">Author:</span>
                        <p className="text-muted-foreground">{guide.author}</p>
                      </div>
                      <div>
                        <span className="font-medium">Published:</span>
                        <p className="text-muted-foreground">{new Date(guide.publishDate).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <span className="font-medium">Last Updated:</span>
                        <p className="text-muted-foreground">{new Date(guide.lastUpdated).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <span className="font-medium">Reading Time:</span>
                        <p className="text-muted-foreground">{guide.readTime}</p>
                      </div>
                      <div>
                        <span className="font-medium">Category:</span>
                        <p className="text-muted-foreground">{guide.category}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Guide;