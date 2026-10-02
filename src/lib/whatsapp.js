// The number is stored split up and only joined when someone taps the button, so it never
// appears as a plain wa.me link in the page HTML (cuts down on scraped spam).
const PARTS = ['91', '98996', '36727'];

export function openWhatsApp(message = 'Hi Knord team, I would like to know more about Nityavali.') {
  const url = `https://wa.me/${PARTS.join('')}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener');
}
