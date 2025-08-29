import { useState } from 'react';
import Layout from '@/components/Layout';
import SEOHead from '@/components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, MessageSquare, Clock, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for contacting us. We'll respond within 24 hours.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        category: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Best Refinance Options - Get Help with Mortgage Questions",
    "description": "Contact our team for questions about mortgage refinancing, our platform, or feedback. We're here to help with your refinancing needs.",
    "url": "https://bestrefinanceoptions.com/contact"
  };

  return (
    <Layout>
      <SEOHead
        title="Contact Best Refinance Options - Get Help with Mortgage Questions"
        description="Contact our team for questions about mortgage refinancing, our platform, or feedback. We're here to help with your refinancing needs."
        canonical="https://bestrefinanceoptions.com/contact"
        keywords="contact refinance help, mortgage questions, refinance support"
        schema={schema}
      />

      <div className="min-h-screen bg-background">
        <div className="container-page section-padding">
          <div className="text-center mb-12">
            <h1 className="text-hero mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Have questions about refinancing or our platform? We're here to help. 
              Send us a message and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-accent/10 rounded-full">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Email Us</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        For general inquiries and support
                      </p>
                      <a 
                        href="mailto:info@bestrefinanceoptions.com" 
                        className="text-accent hover:text-accent-dark transition-colors"
                      >
                        info@bestrefinanceoptions.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-trust-green/10 rounded-full">
                      <Clock className="h-6 w-6 text-trust-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Response Time</h3>
                      <p className="text-muted-foreground text-sm">
                        We typically respond to all inquiries within 24 hours during business days.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Privacy</h3>
                      <p className="text-muted-foreground text-sm">
                        Your information is secure and will never be shared with third parties without your consent.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="card-feature">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="h-6 w-6 mr-2 text-accent" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="category">Inquiry Type</Label>
                        <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Question</SelectItem>
                            <SelectItem value="refinance">Refinance Advice</SelectItem>
                            <SelectItem value="technical">Technical Support</SelectItem>
                            <SelectItem value="feedback">Platform Feedback</SelectItem>
                            <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                            <SelectItem value="press">Press/Media</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          type="text"
                          value={formData.subject}
                          onChange={(e) => handleInputChange('subject', e.target.value)}
                          required
                          placeholder="Brief subject line"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        required
                        placeholder="Please provide details about your question or feedback..."
                        rows={6}
                      />
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="font-medium mb-2">Important Notice</h4>
                      <p className="text-sm text-muted-foreground">
                        We are an educational platform and do not provide personal financial advice. 
                        For specific refinancing decisions, please consult with a qualified mortgage professional. 
                        We do not originate loans or provide lending services.
                      </p>
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full btn-primary"
                    >
                      {isSubmitting ? 'Sending Message...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <Card className="card-elevated mt-16">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-2">Do you provide personal financial advice?</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    No, we provide educational content and comparison tools. For personalized advice, 
                    consult with a qualified mortgage professional or financial advisor.
                  </p>
                  
                  <h4 className="font-semibold mb-2">Are you a lender?</h4>
                  <p className="text-muted-foreground text-sm">
                    No, we are not a lender. We are an independent educational platform that helps 
                    consumers compare refinance options from various lenders.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">How do you make money?</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    We may receive referral fees from some lenders when users click through to their sites. 
                    This never influences our rankings or editorial content.
                  </p>
                  
                  <h4 className="font-semibold mb-2">How often are rates updated?</h4>
                  <p className="text-muted-foreground text-sm">
                    We update rate information daily from lender websites and verified data sources 
                    to ensure accuracy and relevance.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;