import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import KnordPage from './pages/KnordPage.jsx';
import NityavaliPage from './pages/NityavaliPage.jsx';
import PrivacyPage from './pages/PrivacyPage.jsx';
import RipplePage from './pages/RipplePage.jsx';
import { initUtms } from './lib/utm.js';

initUtms();

// Minimal pathname routing — a handful of pages, so a full router would be overkill.
// `/` is the Knord company page; each product has its own page.
const PAGES = { '/nityavali': NityavaliPage, '/ripple': RipplePage, '/privacy': PrivacyPage };
const path = window.location.pathname.replace(/\/+$/, '');
const Root = PAGES[path] || KnordPage;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
