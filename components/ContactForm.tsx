import { useState } from 'react';

const ContactForm = () => {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [alertType, setAlertType] = useState<'success' | 'error' | 'info' | ''>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('');
    setAlertType('');
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const data = {
      name: form.get('name'),
      email: form.get('email'),
      message: form.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setStatus('✅ Message sent successfully! I’ll get back to you soon.');
        setAlertType('success');
        (e.target as HTMLFormElement).reset();
      } else if (result.error?.includes('email')) {
        setStatus('❌ Invalid email address. Please check and try again.');
        setAlertType('error');
      } else if (res.status === 429) {
        setStatus('⚠️ Too many requests. Please wait before sending another message.');
        setAlertType('info');
      } else {
        setStatus('❌ Something went wrong. Please try again later.');
        setAlertType('error');
      }
    } catch {
      setStatus('⚠️ Network error. Please check your connection.');
      setAlertType('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Your Name"
          className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 mt-1
                     focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="you@example.com"
          className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 mt-1
                     focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Your message..."
          rows={5}
          className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 mt-1
                     focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium
                    hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>

      {/* Alert Message */}
      {status && (
        <div
          className={`rounded-lg p-3 text-sm font-medium mt-3
          ${
            alertType === 'success'
              ? 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300 border border-green-300 dark:border-green-700'
              : alertType === 'info'
              ? 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300 border border-yellow-300 dark:border-yellow-700'
              : 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300 border border-red-300 dark:border-red-700'
          }`}
        >
          {status}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
