import AdSenseUnit from '@/components/AdSenseUnit';

const LeaderboardAd = () => {
  return (
    <div className="w-full flex justify-center bg-muted/20 py-4">
      <AdSenseUnit
        slot="6789012345"
        format="horizontal"
        className="max-w-full"
        style={{ 
          minHeight: '90px',
          maxHeight: '250px',
          width: '100%',
          maxWidth: '970px'
        }}
      />
    </div>
  );
};

export default LeaderboardAd;