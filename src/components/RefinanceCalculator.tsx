import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Calculator, DollarSign, Clock, TrendingDown } from 'lucide-react';

interface CalculatorResult {
  currentPayment: number;
  newPayment: number;
  monthlySavings: number;
  totalInterestSaved: number;
  breakEvenMonths: number;
  breakEvenYears: number;
}

const RefinanceCalculator = () => {
  const [inputs, setInputs] = useState({
    loanAmount: 300000,
    currentRate: 6.5,
    newRate: 5.5,
    currentTerm: 30,
    newTerm: 30,
    remainingYears: 25,
    closingCosts: 5000
  });

  const [results, setResults] = useState<CalculatorResult | null>(null);

  const calculatePayment = (principal: number, rate: number, years: number): number => {
    const monthlyRate = rate / 100 / 12;
    const numPayments = years * 12;
    if (monthlyRate === 0) return principal / numPayments;
    
    return principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
           (Math.pow(1 + monthlyRate, numPayments) - 1);
  };

  const calculateResults = () => {
    const currentPayment = calculatePayment(inputs.loanAmount, inputs.currentRate, inputs.currentTerm);
    const newPayment = calculatePayment(inputs.loanAmount, inputs.newRate, inputs.newTerm);
    const monthlySavings = currentPayment - newPayment;
    
    // Calculate total interest saved over remaining years
    const remainingPayments = inputs.remainingYears * 12;
    const currentTotalPayments = currentPayment * remainingPayments;
    const newTotalPayments = newPayment * remainingPayments;
    const totalInterestSaved = currentTotalPayments - newTotalPayments;
    
    // Calculate break-even point
    const breakEvenMonths = monthlySavings > 0 ? inputs.closingCosts / monthlySavings : 0;
    
    setResults({
      currentPayment,
      newPayment,
      monthlySavings,
      totalInterestSaved,
      breakEvenMonths,
      breakEvenYears: breakEvenMonths / 12
    });
  };

  useEffect(() => {
    calculateResults();
  }, [inputs]);

  const handleInputChange = (field: string, value: string) => {
    setInputs(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="space-y-8">
      {/* Calculator Header */}
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <Calculator className="h-8 w-8 text-accent mr-3" />
          <h2 className="text-section text-gradient">Refinance Calculator</h2>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Calculate your potential savings with our comprehensive refinance calculator. 
          See how much you could save monthly and over the life of your loan.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="flex items-center">
              <DollarSign className="h-5 w-5 mr-2 text-accent" />
              Loan Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="loanAmount">Current Loan Amount</Label>
                <Input
                  id="loanAmount"
                  type="number"
                  value={inputs.loanAmount}
                  onChange={(e) => handleInputChange('loanAmount', e.target.value)}
                  placeholder="300000"
                />
              </div>
              <div>
                <Label htmlFor="closingCosts">Estimated Closing Costs</Label>
                <Input
                  id="closingCosts"
                  type="number"
                  value={inputs.closingCosts}
                  onChange={(e) => handleInputChange('closingCosts', e.target.value)}
                  placeholder="5000"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="currentRate">Current Interest Rate (%)</Label>
                <Input
                  id="currentRate"
                  type="number"
                  step="0.01"
                  value={inputs.currentRate}
                  onChange={(e) => handleInputChange('currentRate', e.target.value)}
                  placeholder="6.5"
                />
              </div>
              <div>
                <Label htmlFor="newRate">New Interest Rate (%)</Label>
                <Input
                  id="newRate"
                  type="number"
                  step="0.01"
                  value={inputs.newRate}
                  onChange={(e) => handleInputChange('newRate', e.target.value)}
                  placeholder="5.5"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="currentTerm">Current Term (Years)</Label>
                <Input
                  id="currentTerm"
                  type="number"
                  value={inputs.currentTerm}
                  onChange={(e) => handleInputChange('currentTerm', e.target.value)}
                  placeholder="30"
                />
              </div>
              <div>
                <Label htmlFor="newTerm">New Term (Years)</Label>
                <Input
                  id="newTerm"
                  type="number"
                  value={inputs.newTerm}
                  onChange={(e) => handleInputChange('newTerm', e.target.value)}
                  placeholder="30"
                />
              </div>
              <div>
                <Label htmlFor="remainingYears">Years Remaining</Label>
                <Input
                  id="remainingYears"
                  type="number"
                  value={inputs.remainingYears}
                  onChange={(e) => handleInputChange('remainingYears', e.target.value)}
                  placeholder="25"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        {results && (
          <Card className="card-feature">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingDown className="h-5 w-5 mr-2 text-trust-green" />
                Your Potential Savings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-background/50 rounded-lg p-4 border">
                  <div className="text-sm text-muted-foreground">Current Payment</div>
                  <div className="text-2xl font-bold text-destructive">
                    {formatCurrency(results.currentPayment)}
                  </div>
                </div>
                <div className="bg-background/50 rounded-lg p-4 border">
                  <div className="text-sm text-muted-foreground">New Payment</div>
                  <div className="text-2xl font-bold text-trust-green">
                    {formatCurrency(results.newPayment)}
                  </div>
                </div>
              </div>

              <div className="bg-trust-green/10 rounded-lg p-4 border-l-4 border-trust-green">
                <div className="text-sm text-muted-foreground">Monthly Savings</div>
                <div className="text-3xl font-bold text-trust-green">
                  {formatCurrency(results.monthlySavings)}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Interest Saved:</span>
                  <span className="font-semibold text-trust-green">
                    {formatCurrency(results.totalInterestSaved)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Break-Even Point:</span>
                  <span className="font-semibold">
                    {results.breakEvenMonths > 0 ? `${Math.ceil(results.breakEvenMonths)} months` : 'Immediate'}
                  </span>
                </div>
              </div>

              <Button className="w-full btn-trust">
                Find Lenders with These Rates
              </Button>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Calculator Explanation */}
      <Card className="card-elevated">
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-4">How This Calculator Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground">
            <div>
              <h4 className="font-medium text-foreground mb-2">Payment Calculation</h4>
              <p>We use the standard mortgage payment formula that considers your loan amount, interest rate, and loan term to calculate your monthly principal and interest payment.</p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Break-Even Analysis</h4>
              <p>The break-even point shows how long it will take for your monthly savings to offset the refinancing costs. This helps you determine if refinancing makes financial sense.</p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Interest Savings</h4>
              <p>Total interest saved is calculated over your remaining loan term, comparing what you'd pay with your current loan versus the new refinanced loan.</p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Important Note</h4>
              <p>This calculator provides estimates. Actual rates and terms may vary. Consult with lenders for precise quotes and consider all costs involved in refinancing.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RefinanceCalculator;