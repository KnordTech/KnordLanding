import SmoothScroll from './components/site/SmoothScroll.jsx';
import Nav from './components/site/Nav.jsx';
import Footer from './components/site/Footer.jsx';
import WhatsAppButton from './components/site/WhatsAppButton.jsx';
import Hero from './components/home/Hero.jsx';
import IndustryStrip from './components/home/IndustryStrip.jsx';
import WorkflowStory from './components/home/WorkflowStory.jsx';
import Modules from './components/home/Modules.jsx';
import Industries from './components/home/Industries.jsx';
import Security from './components/home/Security.jsx';
import Rollout from './components/home/Rollout.jsx';
import Plans from './components/home/Plans.jsx';
import Faq from './components/home/Faq.jsx';
import AboutKnord from './components/home/AboutKnord.jsx';
import DemoSection from './components/home/DemoSection.jsx';

// v2.0 home: Nityavali-led, with Knord as the company behind it.
export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-canvas text-ink">
      <SmoothScroll />
      <Nav />
      <main id="top">
        <Hero />
        <IndustryStrip />
        <WorkflowStory />
        <Modules />
        <Industries />
        <Security />
        <Rollout />
        <Plans />
        <Faq />
        <AboutKnord />
        <DemoSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
