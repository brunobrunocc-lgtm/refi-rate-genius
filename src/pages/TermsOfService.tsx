import Layout from '@/components/Layout';
import SEOHead from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';

const TermsOfService = () => {
  return (
    <Layout>
      <SEOHead
        title="Terms of Service - Best Refinance Options"
        description="Terms of service for using our mortgage refinance comparison platform and educational content."
        canonical="https://bestrefinanceoptions.com/terms-of-service"
        noindex={true}
      />

      <div className="container-page section-padding">
        <h1 className="text-hero mb-8">Terms of Service</h1>
        
        <Card className="card-elevated">
          <CardContent className="p-8 prose max-w-none">
            <p className="text-muted-foreground mb-6">
              <strong>Effective Date:</strong> January 1, 2025<br />
              <strong>Last Updated:</strong> January 15, 2025
            </p>

            <h2>Acceptance of Terms</h2>
            <p>By accessing and using Best Refinance Options, you accept and agree to be bound by the terms and provision of this agreement.</p>

            <h2>Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials on Best Refinance Options for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>

            <h2>Disclaimer</h2>
            <p>The materials on Best Refinance Options are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties including, without limitation, implied warranties of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.</p>

            <h2>Educational Purpose</h2>
            <p>All content is for educational and informational purposes only. We do not provide personal financial advice. Always consult with qualified professionals for financial decisions.</p>

            <h2>Limitations</h2>
            <p>In no event shall Best Refinance Options or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.</p>

            <h2>Accuracy of Materials</h2>
            <p>While we strive for accuracy, the materials on Best Refinance Options may include technical, typographical, or photographic errors. We do not warrant that any of the materials are accurate, complete, or current.</p>

            <h2>Links</h2>
            <p>We have not reviewed all sites linked to our website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement.</p>

            <h2>Modifications</h2>
            <p>We may revise these terms of service at any time without notice. By using this website, you agree to be bound by the then current version of these terms.</p>

            <h2>Contact Information</h2>
            <p>If you have any questions about these Terms of Service, please contact us at legal@bestrefinanceoptions.com.</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default TermsOfService;