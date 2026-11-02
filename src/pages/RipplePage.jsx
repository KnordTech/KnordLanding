import { useEffect } from 'react';
import SmoothScroll from '../components/site/SmoothScroll.jsx';
import Nav from '../components/site/Nav.jsx';
import Footer from '../components/site/Footer.jsx';
import WhatsAppButton from '../components/site/WhatsAppButton.jsx';
import RippleHero from '../components/ripple/RippleHero.jsx';
import HowItWorks from '../components/ripple/HowItWorks.jsx';
import Evidence from '../components/ripple/Evidence.jsx';
import WhatYouCanTest from '../components/ripple/WhatYouCanTest.jsx';
import EarlyAccess from '../components/ripple/EarlyAccess.jsx';
import Faq from '../components/home/Faq.jsx';

const QA = [
  [
    'Is this a real audience?',
    'No. Ripple simulates people built from public data. It is a rehearsal that shows what is likely to happen and why, not a guarantee of results.',
  ],
  [
    'Where does the audience come from?',
    'Public census and survey data: World Bank figures for India and other countries, and the US Census down to the ZIP code. Every trait links back to the query it was sampled from.',
  ],
  [
    'Will Ripple post or spend money on its own?',
    'No. It can draft a rewrite for you, but anything that publishes or spends is created paused and waits for your approval.',
  ],
  [
    'What can I test?',
    'Posts, images, ads and short campaigns for Instagram, Facebook, YouTube, X and Reddit. Give it one draft to see how it lands, or two to compare.',
  ],
  ['Who is it for?', 'For now, small and growing businesses in India that post and advertise on social media.'],
];

// /ripple: Knord's second product, in early access.
export default function RipplePage() {
  useEffect(() => {
    const prev = document.title;
    document.title = 'Ripple by Knord Technologies · See how people will react before you post';
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip bg-canvas text-ink">
      <SmoothScroll />
      <Nav product="ripple" />
      <main id="top">
        <RippleHero />
        <HowItWorks />
        <Evidence />
        <WhatYouCanTest />
        <Faq items={QA} title="Things people ask about Ripple." accent="text-ripple-600" />
        <EarlyAccess />
      </main>
      <Footer />
      <WhatsAppButton product="Ripple" />
    </div>
  );
}
