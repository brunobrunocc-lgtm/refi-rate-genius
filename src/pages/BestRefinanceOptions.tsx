import Layout from '@/components/Layout';
import SEOHead from '@/components/SEOHead';
import LenderComparison from '@/components/LenderComparison';
import { HeaderAd, ContentAd } from '@/components/AdSenseUnit';
import ErrorBoundary from '@/components/ErrorBoundary';

const BestRefinanceOptions = () => {
  console.log('BestRefinanceOptions component rendering');
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Best Refinance Options - Compare Top Mortgage Lenders 2025",
    "description": "Compare the best mortgage refinance lenders, rates, and terms. Find the perfect refinance option with our comprehensive lender comparison tool.",
    "url": "https://refi-rate-genius.lovable.app/best-refinance-options"
  };

  return (
    <Layout>
      <SEOHead
        title="Best Refinance Options - Compare Top Mortgage Lenders 2025"
        description="Compare the best mortgage refinance lenders, rates, and terms. Find the perfect refinance option with our comprehensive lender comparison tool."
        canonical="https://refi-rate-genius.lovable.app/best-refinance-options"
        keywords="best refinance lenders, mortgage refinance comparison, refinance rates, top mortgage lenders"
        schema={schema}
      />

      <div className="min-h-screen bg-background">
        <div className="container-page pt-8">
          <HeaderAd />
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Compare Best Refinance Options</h1>
            <p className="text-xl text-muted-foreground">
              Find and compare the best mortgage refinance lenders for your needs.
            </p>
          </div>
          
          <ErrorBoundary>
            <LenderComparison />
          </ErrorBoundary>
          
          <ContentAd />
        </div>
      </div>
    </Layout>
  );
};

export default BestRefinanceOptions;