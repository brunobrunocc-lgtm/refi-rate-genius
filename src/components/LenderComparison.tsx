import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Star, Filter, ExternalLink, Shield, Clock, DollarSign } from 'lucide-react';

interface Lender {
  id: number;
  name: string;
  rating: number;
  reviews: number;
  apr: number;
  fees: number;
  closingTime: string;
  minCredit: number;
  maxLTV: number;
  specialty: string[];
  pros: string[];
  cons: string[];
  website: string;
  phone: string;
  featured: boolean;
}

const lendersData: Lender[] = [
  {
    id: 1,
    name: "Rocket Mortgage",
    rating: 4.8,
    reviews: 12543,
    apr: 7.125,
    fees: 0,
    closingTime: "30 days",
    minCredit: 580,
    maxLTV: 97,
    specialty: ["First-time buyers", "Online process"],
    pros: ["Fast online process", "Excellent customer service", "No origination fees"],
    cons: ["Higher rates for some borrowers", "Limited branch locations"],
    website: "rocket-mortgage.com",
    phone: "1-800-ROCKET",
    featured: true
  },
  {
    id: 2,
    name: "Better Mortgage",
    rating: 4.6,
    reviews: 8921,
    apr: 7.075,
    fees: 0,
    closingTime: "21 days",
    minCredit: 600,
    maxLTV: 95,
    specialty: ["Tech-forward", "Low fees"],
    pros: ["No origination fees", "Fast digital process", "Competitive rates"],
    cons: ["Limited loan types", "No physical branches"],
    website: "better.com",
    phone: "1-855-BETTER",
    featured: true
  },
  {
    id: 3,
    name: "Chase Mortgage",
    rating: 4.4,
    reviews: 15678,
    apr: 7.200,
    fees: 995,
    closingTime: "45 days",
    minCredit: 620,
    maxLTV: 95,
    specialty: ["Full-service banking", "Relationship discounts"],
    pros: ["Nationwide branches", "Relationship discounts", "Comprehensive services"],
    cons: ["Higher fees", "Longer closing times"],
    website: "chase.com",
    phone: "1-877-CHASE",
    featured: false
  },
  {
    id: 4,
    name: "SoFi Mortgage",
    rating: 4.7,
    reviews: 6432,
    apr: 7.050,
    fees: 0,
    closingTime: "30 days",
    minCredit: 650,
    maxLTV: 90,
    specialty: ["High earners", "Member benefits"],
    pros: ["No fees", "Member benefits", "Career coaching"],
    cons: ["Higher credit requirements", "Limited availability"],
    website: "sofi.com",
    phone: "1-855-SOFI",
    featured: false
  },
  {
    id: 5,
    name: "LoanDepot",
    rating: 4.3,
    reviews: 9876,
    apr: 7.175,
    fees: 895,
    closingTime: "35 days",
    minCredit: 580,
    maxLTV: 97,
    specialty: ["First-time buyers", "FHA loans"],
    pros: ["Flexible credit requirements", "FHA specialist", "Local offices"],
    cons: ["Origination fees", "Variable service quality"],
    website: "loandepot.com",
    phone: "1-888-LOAN",
    featured: false
  }
];

const LenderComparison = () => {
  console.log('LenderComparison component rendering');
  const [lenders] = useState<Lender[]>(lendersData);
  const [filteredLenders, setFilteredLenders] = useState<Lender[]>(lendersData);
  const [filters, setFilters] = useState({
    minCredit: '',
    maxAPR: '',
    maxFees: '',
    closingTime: '',
    specialty: ''
  });

  const applyFilters = () => {
    let filtered = lenders.filter(lender => {
      if (filters.minCredit && lender.minCredit > parseInt(filters.minCredit)) return false;
      if (filters.maxAPR && lender.apr > parseFloat(filters.maxAPR)) return false;
      if (filters.maxFees && lender.fees > parseInt(filters.maxFees)) return false;
      if (filters.specialty && !lender.specialty.some(s => 
        s.toLowerCase().includes(filters.specialty.toLowerCase())
      )) return false;
      return true;
    });
    
    // Sort: featured first, then by APR
    filtered.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return a.apr - b.apr;
    });
    
    setFilteredLenders(filtered);
  };

  const clearFilters = () => {
    setFilters({
      minCredit: '',
      maxAPR: '',
      maxFees: '',
      closingTime: '',
      specialty: ''
    });
    setFilteredLenders(lenders);
  };

  const formatAPR = (apr: number) => `${apr.toFixed(3)}%`;
  const formatFees = (fees: number) => fees === 0 ? 'No fees' : `$${fees.toLocaleString()}`;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-section text-gradient mb-4">Compare Top Refinance Lenders</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Compare rates, fees, and terms from leading mortgage lenders. Our comprehensive comparison helps you find the best refinance option for your situation.
        </p>
      </div>

      {/* Filters */}
      <Card className="card-elevated">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Filter className="h-5 w-5 mr-2 text-accent" />
            Filter Lenders
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">Min Credit Score</label>
              <Input
                type="number"
                placeholder="e.g., 620"
                value={filters.minCredit}
                onChange={(e) => setFilters({...filters, minCredit: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Max APR (%)</label>
              <Input
                type="number"
                step="0.01"
                placeholder="e.g., 7.5"
                value={filters.maxAPR}
                onChange={(e) => setFilters({...filters, maxAPR: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Max Fees ($)</label>
              <Input
                type="number"
                placeholder="e.g., 1000"
                value={filters.maxFees}
                onChange={(e) => setFilters({...filters, maxFees: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Specialty</label>
              <Select value={filters.specialty} onValueChange={(value) => setFilters({...filters, specialty: value === 'any' ? '' : value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="first-time">First-time buyers</SelectItem>
                  <SelectItem value="online">Online process</SelectItem>
                  <SelectItem value="low fees">Low fees</SelectItem>
                  <SelectItem value="fha">FHA loans</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex gap-2">
            <Button onClick={applyFilters} className="btn-primary">Apply Filters</Button>
            <Button variant="outline" onClick={clearFilters}>Clear All</Button>
          </div>
        </CardContent>
      </Card>

      {/* Lender Cards */}
      <div className="space-y-4">
        {filteredLenders.map((lender) => (
          <Card key={lender.id} className={`card-elevated ${lender.featured ? 'ring-2 ring-accent' : ''}`}>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Lender Info */}
                <div className="lg:col-span-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold">{lender.name}</h3>
                      <div className="flex items-center mt-1">
                        <div className="flex items-center mr-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(lender.rating)
                                  ? 'text-accent fill-current'
                                  : 'text-muted-foreground'
                              }`}
                            />
                          ))}
                          <span className="ml-1 text-sm font-medium">{lender.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          ({lender.reviews.toLocaleString()} reviews)
                        </span>
                      </div>
                    </div>
                    {lender.featured && (
                      <Badge variant="secondary" className="bg-accent text-accent-foreground">
                        Featured
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {lender.specialty.map((spec, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="lg:col-span-1">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 text-trust-green mr-2" />
                      <div>
                        <div className="text-sm text-muted-foreground">APR</div>
                        <div className="font-bold text-lg text-trust-green">
                          {formatAPR(lender.apr)}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Fees</div>
                      <div className="font-semibold">{formatFees(lender.fees)}</div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-accent mr-2" />
                      <div>
                        <div className="text-sm text-muted-foreground">Closing Time</div>
                        <div className="font-semibold">{lender.closingTime}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Requirements */}
                <div className="lg:col-span-1">
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-muted-foreground">Min Credit Score</div>
                      <div className="font-semibold">{lender.minCredit}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Max LTV</div>
                      <div className="font-semibold">{lender.maxLTV}%</div>
                    </div>
                    <div className="flex items-center">
                      <Shield className="h-4 w-4 text-trust-green mr-2" />
                      <span className="text-sm text-trust-green font-medium">FDIC Insured</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="lg:col-span-1">
                  <div className="space-y-3">
                    <Button 
                      className="w-full btn-trust"
                      onClick={() => window.open(`https://${lender.website}`, '_blank')}
                    >
                      Get Quote
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                    <div className="text-sm space-y-1">
                      <div className="flex items-center text-muted-foreground">
                        <span className="font-medium">Website:</span>
                        <span className="ml-1">{lender.website}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <span className="font-medium">Phone:</span>
                        <span className="ml-1">{lender.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pros and Cons */}
              <div className="mt-6 pt-6 border-t border-border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-trust-green mb-2">Pros</h4>
                    <ul className="text-sm space-y-1">
                      {lender.pros.map((pro, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-trust-green mr-2">✓</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-destructive mb-2">Considerations</h4>
                    <ul className="text-sm space-y-1">
                      {lender.cons.map((con, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-destructive mr-2">−</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Disclaimer */}
      <Card className="card-elevated border-accent/20">
        <CardContent className="pt-6">
          <div className="flex items-start">
            <Shield className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-muted-foreground">
              <p className="mb-2">
                <strong>Important Disclaimer:</strong> Rates and terms shown are examples and may not reflect current market conditions. 
                Actual rates depend on your credit profile, loan amount, property value, and other factors.
              </p>
              <p>
                We are not a lender and do not originate loans. We recommend contacting lenders directly for current rates and terms. 
                This comparison is for educational purposes only.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LenderComparison;