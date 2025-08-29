import Layout from '@/components/Layout';
import SEOHead from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <SEOHead
        title="Privacy Policy - Best Refinance Options"
        description="Our privacy policy explains how we collect, use, and protect your personal information when you use our mortgage refinance comparison platform."
        canonical="https://bestrefinanceoptions.com/privacy-policy"
        noindex={true}
      />

      <div className="container-page section-padding">
        <h1 className="text-hero mb-8">Privacy Policy</h1>
        
        <Card className="card-elevated">
          <CardContent className="p-8 prose max-w-none">
            <p className="text-muted-foreground mb-6">
              <strong>Effective Date:</strong> January 1, 2025<br />
              <strong>Last Updated:</strong> January 15, 2025
            </p>

            <h2>Information We Collect</h2>
            <p>We collect information you provide directly, such as when you use our calculator, contact us, or subscribe to updates. We also collect usage data and may use cookies for analytics and advertising.</p>

            <h2>How We Use Your Information</h2>
            <p>We use your information to provide our services, improve our platform, communicate with you, and show relevant advertising through Google AdSense and other partners.</p>

            <h2>Information Sharing</h2>
            <p>We do not sell personal information. We may share data with service providers, analytics partners, and advertising networks. When you click through to lenders, their privacy policies apply.</p>

            <h2>Cookies and Tracking</h2>
            <p>We use cookies for functionality, analytics (Google Analytics), and advertising (Google AdSense). You can control cookies through your browser settings.</p>

            <h2>Your Rights</h2>
            <p>You may request access to, correction of, or deletion of your personal information. Contact us at privacy@bestrefinanceoptions.com.</p>

            <h2>Security</h2>
            <p>We implement appropriate security measures to protect your information, though no internet transmission is 100% secure.</p>

            <h2>Changes to This Policy</h2>
            <p>We may update this policy and will notify you of material changes. Continued use constitutes acceptance of the updated policy.</p>

            <h2>Contact Us</h2>
            <p>For privacy questions, contact us at privacy@bestrefinanceoptions.com.</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;