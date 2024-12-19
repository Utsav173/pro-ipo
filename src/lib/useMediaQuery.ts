import { useEffect, useState } from 'react';

export default function useMediaQuery(mediaQuery: string) {
  const [matches, setMatches] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(mediaQuery).matches
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQueryList = window.matchMedia(mediaQuery);

    const handleChange = () => {
      setMatches(mediaQueryList.matches);
    };

    mediaQueryList.addEventListener('change', handleChange);

    return () => {
      mediaQueryList.removeEventListener('change', handleChange);
    };
  }, [mediaQuery]);

  return matches;
}
