import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AdSenseUnit from '@/components/AdSenseUnit';

const StickyFooterAd = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      // Show sticky ad after user scrolls down 300px on mobile
      if (window.innerWidth < 768) {
        setIsVisible(window.scrollY > 300);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isMobile || !isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t shadow-lg">
      <div className="relative">
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-1 right-1 z-10 h-8 w-8 p-0"
          onClick={() => setIsVisible(false)}
          aria-label="Close advertisement"
        >
          <X className="h-4 w-4" />
        </Button>
        <AdSenseUnit
          slot="5678901234"
          format="horizontal"
          className="p-2"
          style={{ minHeight: '50px', maxHeight: '100px' }}
        />
      </div>
    </div>
  );
};

export default StickyFooterAd;