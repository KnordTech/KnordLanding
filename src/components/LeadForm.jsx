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
  submitLabel = 'Send',
  messageLabel = 'How can we help?',
  messagePlaceholder = 'Tell us about your team and what you need.',
}) {
  const [fields, setFields] = useState(EMPTY);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

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
      <p className="rounded-xl border border-on-ink/15 bg-on-ink/5 p-5 text-[16px] leading-[1.6] text-on-ink" role="status">
        Thanks, we received your request and will be in touch shortly.
      </p>
    );
  }

  const inputClass =
    'w-full rounded-[10px] border border-on-ink/15 bg-on-ink/[0.06] px-3 py-[11px] text-[15px] text-on-ink outline-none transition-colors placeholder:text-on-ink/35 focus:border-brand-300 focus:bg-on-ink/[0.09]';

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {FIELDS.map((field) => (
        <label key={field.name} className="flex flex-col gap-1.5 text-[13px] text-on-ink/60">
          <span>
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
            className={inputClass}
          />
        </label>
      ))}

      <label className="flex flex-col gap-1.5 text-[13px] text-on-ink/60 sm:col-span-2">
        <span>{messageLabel}</span>
        <textarea
          name="message"
          rows={3}
          value={fields.message}
          onChange={onChange}
          placeholder={messagePlaceholder}
          className={`${inputClass} resize-y`}
        />
      </label>

      {error ? (
        <p className="text-[14px] font-medium text-[#F5B26B] sm:col-span-2" role="alert">
          {error}
        </p>
      ) : null}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full rounded-[10px] bg-brand-600 px-6 py-3.5 text-[15.5px] font-semibold text-on-ink transition hover:bg-brand-700 disabled:opacity-70 sm:w-auto"
        >
          {status === 'submitting' ? 'Sending…' : submitLabel}
        </button>
        <p className="mt-3 text-[12.5px] leading-[1.55] text-on-ink/55">
          By submitting, you agree we may use your details to respond to this request. See our{' '}
          <a href="/privacy" className="text-on-ink underline underline-offset-2">
            Data Privacy Policy
          </a>
          .
        </p>
      </div>
    </form>
  );
}
