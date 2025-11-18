import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // No backend form handling yet; just simulate success
    setTimeout(() => setStatus('Thanks! We\'ll get back to you shortly.'), 800);
  };

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(700px_300px_at_0%_100%,rgba(59,130,246,0.08),transparent_60%),radial-gradient(700px_300px_at_100%_100%,rgba(8,145,178,0.08),transparent_60%)]" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Contact</h2>
        <p className="mt-3 text-blue-200/85">Have a question or need a quick quote? Send us a message.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
          <input required placeholder="Name" className="col-span-1 rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input required placeholder="Email" type="email" className="col-span-1 rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input placeholder="Phone (optional)" className="sm:col-span-2 rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea required placeholder="Tell us about the issue" rows={5} className="sm:col-span-2 rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <div className="sm:col-span-2 flex items-center gap-3">
            <button type="submit" className="rounded-lg bg-blue-600 px-5 py-3 text-white font-medium shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition">Send Message</button>
            <span className="text-blue-200/80 text-sm">{status}</span>
          </div>
        </form>

        <div className="mt-10 grid sm:grid-cols-3 gap-6 text-blue-200/85">
          <div>
            <div className="text-white font-semibold">Visit</div>
            123 Tech Ave, Suite 200
          </div>
          <div>
            <div className="text-white font-semibold">Call</div>
            <a href="tel:+1234567890" className="hover:text-white">(123) 456-7890</a>
          </div>
          <div>
            <div className="text-white font-semibold">Hours</div>
            Mon–Sat: 10am – 7pm
          </div>
        </div>
      </div>
    </section>
  );
}
