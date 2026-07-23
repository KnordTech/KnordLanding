import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import NityavaliPage from './nityavali/NityavaliPage.jsx';

// Minimal pathname routing — the site is otherwise a single page, so a full
// router would be overkill. `/nityavali` renders the product landing page;
// everything else renders the Knord Technologies home page.
const path = window.location.pathname.replace(/\/+$/, '');
const Root = path === '/nityavali' ? NityavaliPage : App;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
