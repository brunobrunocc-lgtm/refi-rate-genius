import { useEffect } from 'react';

interface AdSenseUnitProps {
  slot: string;
  format?: string;
  responsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const AdSenseUnit: React.FC<AdSenseUnitProps> = ({
  slot,
  format = 'auto',
  responsive = true,
  className = '',
  style = {}
}) => {
  useEffect(() => {
    // Load AdSense ads
    try {
      if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      }
    } catch (err) {
      console.log('AdSense error:', err);
    }
  }, []);

  return (
    <div className={`adsense-container ${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXXX" // Replace with actual publisher ID
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      ></ins>
    </div>
  );
};

// Predefined ad units
export const HeaderAd = () => (
  <AdSenseUnit 
    slot="1234567890"
    className="my-6 text-center"
    style={{ minHeight: '90px' }}
  />
);

export const ContentAd = () => (
  <AdSenseUnit 
    slot="2345678901"
    className="my-8 text-center"
    style={{ minHeight: '250px' }}
  />
);

export const SidebarAd = () => (
  <AdSenseUnit 
    slot="3456789012"
    format="rectangle"
    className="mb-6"
    style={{ minHeight: '300px', maxWidth: '336px' }}
  />
);

export const FooterAd = () => (
  <AdSenseUnit 
    slot="4567890123"
    className="my-6 text-center"
    style={{ minHeight: '90px' }}
  />
);

export default AdSenseUnit;