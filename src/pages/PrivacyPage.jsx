import { useEffect } from 'react';
import KnordLogo from '../components/KnordLogo.jsx';

const SECTIONS = [
  {
    id: 'who-we-are',
    title: '1. Who we are',
    body: [
      'This Data Privacy Policy describes how Knord Technologies (“Knord”, “we”, “us”, or “our”), an India-based enterprise software company, collects, uses, stores, and shares personal information when you visit our websites, submit a demo or contact request, or interact with our products and related services — including Nityavali, our flagship operations management platform.',
      'Our primary marketing sites include knordtechnologies.com (and www.knordtechnologies.com) and related product pages such as /nityavali. Product workspaces (for example tenant apps on nityavali.com) are governed by the same principles below, together with any customer agreement that applies to a specific tenant.',
    ],
  },
  {
    id: 'scope',
    title: '2. Scope',
    body: [
      'This policy applies to personal information processed in connection with:',
    ],
    bullets: [
      'Our public marketing websites and landing pages',
      'Demo, contact, and lead-capture forms',
      'Emails and other communications you send to us (for example hello@knordtechnologies.com)',
      'Integrations that send enquiry or messaging data into Knord systems (for example website webhooks, WhatsApp Business, Meta Lead Ads, or email capture), when those channels are enabled for a Knord or customer workspace',
      'Limited operational / product analytics needed to run and improve our services',
    ],
  },
  {
    id: 'information-we-collect',
    title: '3. Information we collect',
    body: [
      'Depending on how you interact with us, we may collect:',
    ],
    bullets: [
      'Identity and contact details — name, company/organisation, email address, phone number, city, and job or role context you choose to share',
      'Enquiry content — messages, demo requests, and other information you submit in forms or conversations',
      'Technical and usage data — IP address, browser type, device information, referring URLs, pages viewed, and approximate location derived from IP',
      'Marketing attribution — UTM parameters and similar campaign tags when present in links you use',
      'Integration payloads — data delivered by third-party platforms you or we connect (for example Meta, WhatsApp, or email providers), limited to what those platforms send for lead or support capture',
    ],
  },
  {
    id: 'how-we-use',
    title: '4. How we use information',
    body: [
      'We use personal information to:',
    ],
    bullets: [
      'Respond to enquiries, schedule demos, and provide customer support',
      'Create and manage leads, activities, and related CRM records in our systems (including the Knord tenant in Nityavali where website form submissions are configured to land)',
      'Operate, secure, and improve our websites and products',
      'Send service-related or follow-up communications you request',
      'Comply with legal obligations and enforce our terms',
      'Analyse aggregated or de-identified trends to improve marketing and product experience',
    ],
  },
  {
    id: 'legal-bases',
    title: '5. Legal bases (where applicable)',
    body: [
      'Where data-protection laws require a legal basis, we typically rely on: (a) your consent (for example when you submit a form or opt into a messaging channel); (b) performance of a contract or steps prior to entering one; (c) our legitimate interests in operating a B2B software business, securing systems, and improving services, balanced against your rights; and (d) compliance with law.',
      'If you are in India, we process personal data in line with the Digital Personal Data Protection Act, 2023 and applicable rules, including purpose limitation and security safeguards.',
    ],
  },
  {
    id: 'sharing',
    title: '6. How we share information',
    body: [
      'We do not sell personal information. We may share it with:',
    ],
    bullets: [
      'Service providers who help us host websites, send email, store data, or run analytics — under contractual confidentiality and security obligations',
      'Integration platforms you or we enable (for example Meta, WhatsApp, Google, or email providers) so messages and leads can be delivered into our CRM or product',
      'Professional advisors, auditors, or authorities when required by law or to protect rights and safety',
      'A successor entity in connection with a merger, acquisition, or asset transfer, subject to appropriate safeguards',
    ],
    after: [
      'Customer tenants of Nityavali control data in their own workspaces. Knord does not use one customer’s CRM content to market to another customer’s prospects without a lawful basis.',
    ],
  },
  {
    id: 'cookies',
    title: '7. Cookies and similar technologies',
    body: [
      'Our sites may use cookies or local storage for essential functions (for example remembering theme preference) and, where enabled, limited analytics or attribution. You can control cookies through your browser settings. Blocking some cookies may affect site behaviour.',
    ],
  },
  {
    id: 'retention',
    title: '8. Retention',
    body: [
      'We keep personal information only as long as needed for the purposes described above — for example while we respond to an enquiry, maintain a sales relationship, operate a product account, or meet legal and accounting requirements. Lead and CRM records may be retained according to our internal sales and compliance schedules, then deleted or anonymised when no longer required.',
    ],
  },
  {
    id: 'security',
    title: '9. Security',
    body: [
      'We use reasonable technical and organisational measures to protect personal information, including access controls, encrypted transport (HTTPS), and secrets management for server-side integrations. No method of transmission or storage is completely secure; we work to prevent unauthorised access, use, or disclosure.',
    ],
  },
  {
    id: 'international',
    title: '10. International transfers',
    body: [
      'We primarily operate from India. Service providers or infrastructure may process data in other countries. Where required, we use appropriate safeguards for cross-border transfers.',
    ],
  },
  {
    id: 'your-rights',
    title: '11. Your rights',
    body: [
      'Subject to applicable law, you may request access to, correction of, or deletion of your personal information, withdraw consent where processing is consent-based, or raise a concern about our handling of your data. To exercise these rights, contact us using the details below. We may need to verify your identity before fulfilling a request.',
      'If you submitted information through a customer’s Nityavali workspace (not Knord’s own marketing forms), please contact that organisation first — they are typically the controller of that workspace data.',
    ],
  },
  {
    id: 'children',
    title: '12. Children',
    body: [
      'Our websites and products are directed to businesses and professionals. We do not knowingly collect personal information from children under 18. If you believe we have done so, contact us and we will take appropriate steps to delete it.',
    ],
  },
  {
    id: 'third-parties',
    title: '13. Third-party links and platforms',
    body: [
      'Our sites may link to third-party services. Their privacy practices are governed by their own policies. For messaging or ads platforms (for example Meta or WhatsApp), please also review those providers’ terms and privacy notices.',
    ],
  },
  {
    id: 'changes',
    title: '14. Changes to this policy',
    body: [
      'We may update this Data Privacy Policy from time to time. The “Last updated” date at the top of this page will change when we do. Continued use of our sites or services after an update constitutes notice of the revised policy, except where applicable law requires additional consent.',
    ],
  },
  {
    id: 'contact',
    title: '15. Contact us',
    body: [
      'For privacy questions or requests related to Knord Technologies or Nityavali marketing and product operations:',
    ],
    bullets: [
      'Email: hello@knordtechnologies.com',
      'Organisation: Knord Technologies, India',
      'Website: https://www.knordtechnologies.com',
    ],
    after: [
      'Canonical privacy policy URL for app / integration settings (Meta, WhatsApp Business, Google, etc.): https://www.knordtechnologies.com/privacy',
    ],
  },
];

export default function PrivacyPage() {
  useEffect(() => {
    document.title = 'Data Privacy Policy — Knord Technologies';
  }, []);

  return (
    <div
      className="theme-transition min-h-screen"
      style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}
    >
      <header
        className="theme-transition sticky top-0 z-50 border-b px-6 py-4 backdrop-blur-[10px] sm:px-14"
        style={{ backgroundColor: 'var(--nav-bg)', borderColor: 'var(--border)' }}
      >
        <div className="mx-auto flex max-w-[760px] items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-3">
            <KnordLogo size={32} />
            <span
              className="theme-transition text-[16px] font-bold"
              style={{ color: 'var(--heading)' }}
            >
              Knord Technologies
            </span>
          </a>
          <a
            href="/"
            className="theme-transition text-[14px] font-medium"
            style={{ color: 'var(--text-muted)' }}
          >
            &#8592; Home
          </a>
        </div>
      </header>

      <main className="px-6 py-14 sm:px-14 sm:py-20">
        <article className="mx-auto max-w-[760px]">
          <p
            className="text-[13px] font-semibold uppercase tracking-[0.08em]"
            style={{ color: 'var(--indigo)' }}
          >
            Legal
          </p>
          <h1
            className="mt-3 text-[32px] font-extrabold tracking-[-0.02em] sm:text-[40px]"
            style={{ color: 'var(--heading)' }}
          >
            Data Privacy Policy
          </h1>
          <p className="mt-3 text-[15px]" style={{ color: 'var(--text-muted)' }}>
            Last updated: 26 August 2026
          </p>
          <p
            className="mt-6 text-[16px] leading-[1.7]"
            style={{ color: 'var(--text-muted)' }}
          >
            This policy explains how Knord Technologies handles personal
            information collected through our websites, forms, and product
            integrations. Use this page as the public privacy URL when
            configuring third-party apps and messaging integrations.
          </p>

          <div className="mt-12 flex flex-col gap-10">
            {SECTIONS.map((section) => (
              <section key={section.id} id={section.id}>
                <h2
                  className="text-[20px] font-bold tracking-[-0.01em]"
                  style={{ color: 'var(--heading)' }}
                >
                  {section.title}
                </h2>
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="mt-3 text-[15.5px] leading-[1.7]"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {paragraph}
                  </p>
                ))}
                {section.bullets ? (
                  <ul
                    className="mt-3 list-disc space-y-2 pl-5 text-[15.5px] leading-[1.65]"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
                {section.after?.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="mt-3 text-[15.5px] leading-[1.7]"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </article>
      </main>

      <footer
        className="theme-transition border-t px-6 py-8 sm:px-14"
        style={{ borderColor: 'var(--border)' }}
      >
        <div
          className="mx-auto max-w-[760px] text-[13px]"
          style={{ color: 'var(--text-muted)' }}
        >
          &copy; 2026 Knord Technologies. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
