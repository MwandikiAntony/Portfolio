import { useState } from 'react';

const ContactForm = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = {
      name: form.get('name'),
      email: form.get('email'),
      message: form.get('message'),
    };

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) setStatus('Message sent!');
    else setStatus('Something went wrong.');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="name" required placeholder="Your Name" className="w-full border p-2" />
      <input type="email" name="email" required placeholder="Your Email" className="w-full border p-2" />
      <textarea name="message" required placeholder="Your Message" className="w-full border p-2" rows={5} />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Send
      </button>
      {status && <p className="text-sm text-gray-600 mt-2">{status}</p>}
    </form>
  );
};

export default ContactForm;
