import { useState } from 'react';
import { postLead } from '../lib/postLead.js';

const FIELDS = [
  { name: 'name', label: 'Full name', autoComplete: 'name', required: true },
  { name: 'organization', label: 'Company', autoComplete: 'organization' },
  { name: 'email', label: 'Work email', type: 'email', autoComplete: 'email' },
  { name: 'phone', label: 'Phone', type: 'tel', autoComplete: 'tel' },
  { name: 'city', label: 'City', autoComplete: 'address-level2', optional: true },
];

const EMPTY = {
  name: '',
  organization: '',
  email: '',
  phone: '',
  city: '',
  message: '',
};

export default function LeadForm({
  variant = 'knord',
  submitLabel = 'Send',
  messageLabel = 'How can we help?',
  messagePlaceholder = 'Tell us about your team and what you need.',
}) {
  const [fields, setFields] = useState(EMPTY);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const dark = variant === 'nityavali';

  const inputStyle = dark
    ? {
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
        borderColor: 'var(--n-dark-border)',
        color: 'var(--n-on-dark)',
      }
    : {
        backgroundColor: 'var(--card-bg)',
        borderColor: 'var(--card-border)',
        color: 'var(--heading)',
      };

  const labelStyle = {
    color: dark ? 'var(--n-on-dark-muted)' : 'var(--text-muted)',
  };

  const buttonStyle = dark
    ? { backgroundColor: 'var(--n-teal)', color: 'var(--n-on-dark)' }
    : { color: 'var(--on-accent)' };

  function onChange(event) {
    const { name, value } = event.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmit(event) {
    event.preventDefault();
    setError('');

    if (!fields.email.trim() && !fields.phone.trim()) {
      setError('Please add a work email or phone number.');
      return;
    }

    setStatus('submitting');
    try {
      await postLead({
        name: fields.name.trim(),
        organization: fields.organization.trim(),
        email: fields.email.trim(),
        phone: fields.phone.trim(),
        city: fields.city.trim(),
        message: fields.message.trim(),
      });
      setStatus('success');
    } catch (err) {
      setStatus('idle');
      setError(err.message || 'Could not send your request. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <p
        className="text-[16.5px] leading-[1.65]"
        style={{ color: dark ? 'var(--n-on-dark)' : 'var(--heading)' }}
        role="status"
      >
        Thanks — we received your request and will be in touch. No login needed
        unless you already use Nityavali.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {FIELDS.map((field) => (
        <label key={field.name} className="flex flex-col gap-1.5 text-left">
          <span className="text-[13px] font-semibold" style={labelStyle}>
            {field.label}
            {field.optional ? ' (optional)' : ''}
          </span>
          <input
            name={field.name}
            type={field.type || 'text'}
            autoComplete={field.autoComplete}
            required={Boolean(field.required)}
            value={fields[field.name]}
            onChange={onChange}
            className="theme-transition rounded-[10px] border px-3.5 py-3 text-[15px] outline-none placeholder:opacity-50"
            style={inputStyle}
          />
        </label>
      ))}

      <label className="flex flex-col gap-1.5 text-left sm:col-span-2">
        <span className="text-[13px] font-semibold" style={labelStyle}>
          {messageLabel}
        </span>
        <textarea
          name="message"
          rows={4}
          value={fields.message}
          onChange={onChange}
          placeholder={messagePlaceholder}
          className="theme-transition resize-y rounded-[10px] border px-3.5 py-3 text-[15px] outline-none placeholder:opacity-50"
          style={inputStyle}
        />
      </label>

      {error ? (
        <p className="text-[14px] font-medium sm:col-span-2" style={{ color: dark ? 'var(--n-amber)' : '#c2410c' }} role="alert">
          {error}
        </p>
      ) : null}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className={`rounded-[10px] px-[26px] py-[14px] text-[15.5px] font-semibold disabled:opacity-70 ${dark ? '' : 'bg-amber'}`}
          style={buttonStyle}
        >
          {status === 'submitting' ? 'Sending…' : submitLabel}
        </button>
        <p
          className="mt-3 text-[12.5px] leading-[1.55]"
          style={{ color: dark ? 'var(--n-on-dark-muted)' : 'var(--text-muted)' }}
        >
          By submitting, you agree we may use your details to respond to this
          request. See our{' '}
          <a
            href="/privacy"
            className="underline underline-offset-2"
            style={{ color: dark ? 'var(--n-on-dark)' : 'var(--heading)' }}
          >
            Data Privacy Policy
          </a>
          .
        </p>
      </div>
    </form>
  );
}
