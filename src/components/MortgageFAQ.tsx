import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import SEOHead from '@/components/SEOHead';

const faqData = [
  {
    question: "What is mortgage refinancing?",
    answer: "Mortgage refinancing is the process of replacing your current home loan with a new one, typically to get a lower interest rate, reduce monthly payments, or change loan terms. The new loan pays off your existing mortgage, and you start making payments on the new loan."
  },
  {
    question: "When should I consider refinancing my mortgage?",
    answer: "Consider refinancing when interest rates drop significantly (typically 0.5-1% lower than your current rate), your credit score has improved, you want to switch from an adjustable to fixed-rate loan, or you need to access home equity through a cash-out refinance."
  },
  {
    question: "How much does it cost to refinance a mortgage?",
    answer: "Refinancing typically costs 2-6% of your loan amount, including appraisal fees ($300-600), origination fees (0.5-1.5% of loan), title insurance ($500-2,000), and other closing costs. Use our calculator to estimate your specific costs and break-even point."
  },
  {
    question: "What credit score do I need to refinance?",
    answer: "Most lenders require a minimum credit score of 620 for conventional refinancing, though some programs accept scores as low as 580. Higher scores (740+) typically qualify for the best rates. Check with multiple lenders as requirements vary."
  },
  {
    question: "How long does the refinancing process take?",
    answer: "The refinancing process typically takes 30-45 days from application to closing. This includes time for application review, appraisal, underwriting, and final approval. Having all documents ready can help speed up the process."
  },
  {
    question: "Should I refinance if I plan to move soon?",
    answer: "Generally, refinancing isn't worthwhile if you plan to move within 2-3 years, as you may not recoup the closing costs. Use our break-even calculator to determine if refinancing makes sense for your timeline."
  },
  {
    question: "What's the difference between rate-and-term and cash-out refinancing?",
    answer: "Rate-and-term refinancing changes your interest rate or loan term without borrowing additional money. Cash-out refinancing lets you borrow more than you owe and receive the difference in cash, using your home's equity."
  },
  {
    question: "Can I refinance if I have an FHA loan?",
    answer: "Yes, you can refinance an FHA loan through the FHA Streamline program (easier qualification) or refinance to a conventional loan if you have 20% equity to avoid mortgage insurance."
  },
  {
    question: "What documents do I need for refinancing?",
    answer: "Typical documents include recent pay stubs, W-2s, tax returns, bank statements, current mortgage statement, homeowners insurance policy, and property tax records. Lenders may request additional documentation based on your situation."
  },
  {
    question: "Will refinancing hurt my credit score?",
    answer: "Refinancing may temporarily lower your credit score by 3-5 points due to the hard credit inquiry. However, this impact is minor and short-term. The long-term benefits of a lower payment often outweigh this temporary effect."
  }
];

const MortgageFAQ = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq, index) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <SEOHead 
        title="Mortgage Refinancing FAQ - Expert Answers to Common Questions"
        description="Get expert answers to frequently asked questions about mortgage refinancing. Learn about costs, credit requirements, timelines, and more."
        schema={faqSchema} 
      />
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Frequently Asked Questions About Mortgage Refinancing
          </CardTitle>
          <CardDescription className="text-center">
            Get answers to the most common questions about refinancing your mortgage
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="multiple" value={openItems} onValueChange={setOpenItems}>
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </>
  );
};

export default MortgageFAQ;