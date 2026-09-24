import { FaArrowRight, FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.08),transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(15,23,42,0.06),transparent_25%)]" />
      <div className="container-shell relative grid gap-12 py-16 md:grid-cols-[1.2fr_0.8fr] md:py-20">
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Open to early opportunities
          </p>
          <h1 className="max-w-xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {portfolioData.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg font-medium text-slate-700 sm:text-xl">
            {portfolioData.title}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View Projects
              <FaArrowRight />
            </a>
            <a href="/Maddi-Chaitanya-Resume.txt" download className="btn-secondary">
              <FaDownload />
              Download Resume
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-slate-600">
            <a
              href={portfolioData.gitHub}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium transition hover:border-slate-900 hover:text-slate-900"
            >
              <FaGithub />
              GitHub
            </a>
            <a
              href={portfolioData.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium transition hover:border-slate-900 hover:text-slate-900"
            >
              <FaLinkedin />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-xl font-bold text-white">
              MC
            </div>
            <div>
              <p className="text-xl font-bold text-slate-900">{portfolioData.name}</p>
              <p className="text-sm text-slate-500">Java Full Stack Developer</p>
            </div>
          </div>

          <div className="space-y-4 border-t border-slate-200 pt-4 text-sm text-slate-600">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-600" />
              <span>{portfolioData.location}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-600" />
              <a href={`mailto:${portfolioData.email}`} className="hover:text-slate-900">
                {portfolioData.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-600" />
              <a href={`tel:${portfolioData.phone.replace(/\s+/g, '')}`} className="hover:text-slate-900">
                {portfolioData.phone}
              </a>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-blue-50 p-4 text-center">
              <p className="text-xl font-bold text-slate-900">B.E.</p>
              <p className="mt-2 text-xs text-slate-600">CSE Graduate</p>
            </div>
            <div className="rounded-2xl bg-slate-100 p-4 text-center">
              <p className="text-xl font-bold text-slate-900">Java</p>
              <p className="mt-2 text-xs text-slate-600">Core & Full Stack</p>
            </div>
            <div className="rounded-2xl bg-slate-100 p-4 text-center">
              <p className="text-xl font-bold text-slate-900">SQL</p>
              <p className="mt-2 text-xs text-slate-600">Database Skills</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
