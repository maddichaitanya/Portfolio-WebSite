import { FaEnvelope, FaLinkedin, FaPhoneAlt, FaGithub } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get('name') || '').toString().trim();
    const email = (formData.get('email') || '').toString().trim();
    const message = (formData.get('message') || '').toString().trim();

    const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:${portfolioData.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-spacing pb-20">
      <div className="container-shell">
        <div className="mb-8 max-w-2xl">
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Let&apos;s connect for internship and early opportunities.</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white shadow-soft sm:p-8">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <div className="mt-6 space-y-5 text-slate-300">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-300" />
                <a href={`mailto:${portfolioData.email}`} className="hover:text-white">
                  {portfolioData.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-300" />
                <a href={`tel:${portfolioData.phone.replace(/\s+/g, '')}`} className="hover:text-white">
                  {portfolioData.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaLinkedin className="text-blue-300" />
                <a href={portfolioData.linkedIn} target="_blank" rel="noreferrer" className="hover:text-white">
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaGithub className="text-blue-300" />
                <a href={portfolioData.gitHub} target="_blank" rel="noreferrer" className="hover:text-white">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write your message here..."
                  required
                  className="w-full resize-none rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white"
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                Send via Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
