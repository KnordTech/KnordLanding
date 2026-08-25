import { useEffect } from 'react';
import './nityavali.css';
import NityaNav from './components/NityaNav';
import NityaHero from './components/NityaHero';
import NityaFeatures from './components/NityaFeatures';
import NityaModules from './components/NityaModules';
import NityaFunnel from './components/NityaFunnel';
import NityaWhy from './components/NityaWhy';
import NityaCTA from './components/NityaCTA';
import NityaFooter from './components/NityaFooter';

export default function NityavaliPage() {
  // This page owns a fixed light palette. Drop any dark-mode class the parent
  // site's boot script may have set on <html>, and set the browser tab title.
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    document.title = 'Nityavali — Operations Management Platform';
  }, []);

  return (
    <div className="nityavali min-h-screen overflow-x-hidden">
      <NityaNav />
      <NityaHero />
      <NityaFeatures />
      <NityaModules />
      <NityaFunnel />
      <NityaWhy />
      <NityaCTA />
      <NityaFooter />
    </div>
  );
}
