import useTheme from './hooks/useTheme';
import Nav from './components/Nav';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import Products from './components/Products';
import WhyKnord from './components/WhyKnord';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [dark, toggleTheme] = useTheme();

  return (
    <div
      className="theme-transition min-h-screen overflow-x-hidden"
      style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}
    >
      <Nav dark={dark} onToggleTheme={toggleTheme} />
      <Hero dark={dark} />
      <WhatWeDo />
      <Products />
      <WhyKnord />
      <Contact />
      <Footer />
    </div>
  );
}
