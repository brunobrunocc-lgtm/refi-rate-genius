import Layout from '@/components/Layout';
import SEOHead from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';

const Disclaimer = () => {
  return (
    <Layout>
      <SEOHead
        title="Disclaimer - Best Refinance Options"
        description="Important disclaimers about our educational content and comparison tools. We are not a lender and do not provide personal financial advice."
        canonical="https://bestrefinanceoptions.com/disclaimer"
        noindex={true}
      />

      <div className="container-page section-padding">
        <h1 className="text-hero mb-8">Disclaimer</h1>
        
        <Card className="card-elevated">
          <CardContent className="p-8 prose max-w-none">
            <h2>Educational Content Only</h2>
            <p>All content on this website is for educational and informational purposes only. We do not provide personalized financial advice, tax advice, or legal advice.</p>

            <h2>Not a Lender</h2>
            <p>Best Refinance Options is not a mortgage lender, broker, or loan originator. We do not make loans or credit decisions. We are an independent educational platform.</p>

            <h2>Rate and Information Accuracy</h2>
            <p>While we strive for accuracy, mortgage rates and lender information change frequently. Always verify current rates and terms directly with lenders before making decisions.</p>

            <h2>Calculator Estimates</h2>
            <p>Our calculators provide estimates based on the information you provide. Actual loan terms, payments, and savings may differ. Consult with qualified professionals for precise calculations.</p>

            <h2>No Guarantee of Approval</h2>
            <p>We do not guarantee loan approval or specific rates. Lender approval depends on your credit profile, income, property value, and other factors determined by individual lenders.</p>

            <h2>Referral Relationships</h2>
            <p>We may receive compensation from some lenders when users click through to their websites. This does not influence our rankings or editorial content, which remain independent.</p>

            <h2>Professional Consultation Recommended</h2>
            <p>Before making any mortgage or refinancing decisions, consult with qualified mortgage professionals, financial advisors, or attorneys who can provide personalized guidance for your situation.</p>

            <h2>Limitation of Liability</h2>
            <p>We are not responsible for decisions made based on our content or any damages resulting from use of our platform. Use this information at your own discretion.</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Disclaimer;