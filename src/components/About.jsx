import { FaCheckCircle } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="section-spacing">
      <div className="container-shell">
        <div className="mb-8 max-w-2xl">
          <p className="section-kicker">About Me</p>
          <h2 className="section-title">Computer Science graduate focused on software development.</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
            <p className="text-lg leading-8 text-slate-600">{portfolioData.about}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center gap-3 font-semibold text-slate-900">
                  <FaCheckCircle className="text-blue-600" />
                  Java & OOP
                </div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center gap-3 font-semibold text-slate-900">
                  <FaCheckCircle className="text-blue-600" />
                  SQL & Database
                </div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center gap-3 font-semibold text-slate-900">
                  <FaCheckCircle className="text-blue-600" />
                  Web Development
                </div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center gap-3 font-semibold text-slate-900">
                  <FaCheckCircle className="text-blue-600" />
                  Problem Solving
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white shadow-soft sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Profile</p>
            <h3 className="mt-4 text-2xl font-bold">{portfolioData.name}</h3>
            <p className="mt-3 text-slate-300">{portfolioData.title}</p>
            <div className="mt-6 space-y-4 text-sm text-slate-300">
              <div>
                <span className="block text-xs uppercase tracking-[0.2em] text-slate-400">Location</span>
                <span className="mt-1 block">{portfolioData.location}</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-[0.2em] text-slate-400">Email</span>
                <a href={`mailto:${portfolioData.email}`} className="mt-1 block hover:text-white">
                  {portfolioData.email}
                </a>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-[0.2em] text-slate-400">Phone</span>
                <a href={`tel:${portfolioData.phone.replace(/\s+/g, '')}`} className="mt-1 block hover:text-white">
                  {portfolioData.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
