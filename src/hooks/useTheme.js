import { useEffect, useState } from 'react';

export default function useTheme() {
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem('knord-theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('knord-theme', dark ? 'dark' : 'light');
  }, [dark]);

  return [dark, () => setDark((d) => !d)];
}
