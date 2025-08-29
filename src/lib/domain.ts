// Utility function to get the current domain
export const getCurrentDomain = (): string => {
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  // Fallback for SSR or build time
  return 'https://bestrefinanceoptions.com';
};

// Get canonical URL for current domain
export const getCanonicalUrl = (path: string): string => {
  return `${getCurrentDomain()}${path}`;
};