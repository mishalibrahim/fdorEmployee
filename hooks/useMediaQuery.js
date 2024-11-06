import { useState, useEffect } from 'react';

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const handleChange = (event) => setMatches(event.matches);

    // Set the initial value
    setMatches(mediaQueryList.matches);

    // Add event listener
    mediaQueryList.addEventListener('change', handleChange);

    // Clean up event listener on component unmount
    return () => mediaQueryList.removeEventListener('change', handleChange);
  }, [query]);

  return matches;
}