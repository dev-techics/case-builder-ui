import { useState, useEffect } from 'react';
export const MOBILE_BREAKPOINT = 768;

function getIsMobile(breakpoint: number) {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.innerWidth < breakpoint;
}

export function useIsMobile(breakpoint = MOBILE_BREAKPOINT) {
  const [isMobile, setIsMobile] = useState(() =>
    getIsMobile(breakpoint)
  );

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const handleChange = () => setIsMobile(getIsMobile(breakpoint));

    handleChange();

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleChange);

      return () => mediaQuery.removeEventListener('change', handleChange);
    }

    mediaQuery.addListener(handleChange);

    return () => mediaQuery.removeListener(handleChange);
  }, [breakpoint]);

  return isMobile;
}
