import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import NityavaliPage from './nityavali/NityavaliPage.jsx';
import PrivacyPage from './pages/PrivacyPage.jsx';
import { initUtms } from './lib/utm.js';

initUtms();

// Minimal pathname routing — the site is otherwise a single page, so a full
// router would be overkill.
const path = window.location.pathname.replace(/\/+$/, '');
const Root =
  path === '/nityavali'
    ? NityavaliPage
    : path === '/privacy'
      ? PrivacyPage
      : App;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
