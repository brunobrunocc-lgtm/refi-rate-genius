import Layout from '@/components/Layout';
import SEOHead from '@/components/SEOHead';
import RefinanceCalculator from '@/components/RefinanceCalculator';
import { HeaderAd, ContentAd } from '@/components/AdSenseUnit';
import LeaderboardAd from '@/components/LeaderboardAd';
import StickyFooterAd from '@/components/StickyFooterAd';


const RefinanceCalculatorPage = () => {
  console.log('RefinanceCalculatorPage rendering');
  const schema = {
    "@context": "https://schema.org",
    "@type": ["WebPage", "SoftwareApplication"],
    "name": "Mortgage Refinance Calculator - Calculate Your Savings",
    "description": "Free refinance calculator to estimate monthly payment savings, break-even point, and total interest savings. Calculate if refinancing makes sense for you.",
    "url": "https://refi-rate-genius.lovable.app/refinance-calculator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Monthly payment calculation",
      "Break-even analysis",
      "Total interest savings",
      "Loan comparison tools"
    ]
  };

  return (
    <Layout>
      <SEOHead
        title="Mortgage Refinance Calculator - Calculate Your Savings"
        description="Free refinance calculator to estimate monthly payment savings, break-even point, and total interest savings. Calculate if refinancing makes sense for you."
        canonical="https://refi-rate-genius.lovable.app/refinance-calculator"
        keywords="refinance calculator, mortgage calculator, refinance savings calculator, loan payment calculator"
        schema={schema}
      />

      <div className="min-h-screen bg-background">
        <LeaderboardAd />
        
        <div className="container-page section-padding">
          <HeaderAd />
          
          <RefinanceCalculator />
          
          <ContentAd />
        </div>
        
        <StickyFooterAd />
      </div>
    </Layout>
  );
};

export default RefinanceCalculatorPage;