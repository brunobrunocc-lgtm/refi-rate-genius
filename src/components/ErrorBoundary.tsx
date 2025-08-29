import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
    // Optional: force a reload if the error persists
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="container-page section-padding">
          <Card className="card-elevated">
            <CardContent className="p-8 text-center">
              <h2 className="text-section mb-2">Something went wrong</h2>
              <p className="text-muted-foreground mb-6">We couldn't load this section. Please try again.</p>
              <div className="flex justify-center">
                <Button onClick={this.handleRetry} className="btn-primary">Retry</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children as React.ReactElement;
  }
}

export default ErrorBoundary;
