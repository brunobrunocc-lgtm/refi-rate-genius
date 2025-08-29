import Layout from '@/components/Layout';
import SEOHead from '@/components/SEOHead';
import LenderComparison from '@/components/LenderComparison';
import { HeaderAd, ContentAd } from '@/components/AdSenseUnit';
import { getCanonicalUrl } from '@/lib/domain';

const BestRefinanceOptions = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Best Refinance Options - Compare Top Mortgage Lenders 2025",
    "description": "Compare the best mortgage refinance lenders, rates, and terms. Find the perfect refinance option with our comprehensive lender comparison tool.",
    "url": getCanonicalUrl("/best-refinance-options")
  };

  return (
    <Layout>
      <SEOHead
        title="Best Refinance Options - Compare Top Mortgage Lenders 2025"
        description="Compare the best mortgage refinance lenders, rates, and terms. Find the perfect refinance option with our comprehensive lender comparison tool."
        canonical={getCanonicalUrl("/best-refinance-options")}
        keywords="best refinance lenders, mortgage refinance comparison, refinance rates, top mortgage lenders"
        schema={schema}
      />

      <div className="min-h-screen bg-background">
        <div className="container-page pt-8">
          <HeaderAd />
          
          <LenderComparison />
          
          <ContentAd />
        </div>
      </div>
    </Layout>
  );
};

export default BestRefinanceOptions;