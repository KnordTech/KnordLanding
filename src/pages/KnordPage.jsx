import SmoothScroll from '../components/site/SmoothScroll.jsx';
import Nav from '../components/site/Nav.jsx';
import Footer from '../components/site/Footer.jsx';
import WhatsAppButton from '../components/site/WhatsAppButton.jsx';
import KnordHero from '../components/knord/KnordHero.jsx';
import ProductLineup from '../components/knord/ProductLineup.jsx';
import Mission from '../components/knord/Mission.jsx';
import HowWeWork from '../components/knord/HowWeWork.jsx';
import Contact from '../components/knord/Contact.jsx';

// `/`: Knord Technologies, the company, with every product in one place.
export default function KnordPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-canvas text-ink">
      <SmoothScroll />
      <Nav product="knord" />
      <main id="top">
        <KnordHero />
        <ProductLineup />
        <Mission />
        <HowWeWork />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton product="Knord Technologies" />
    </div>
  );
}
