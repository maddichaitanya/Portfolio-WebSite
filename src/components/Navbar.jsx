import { useState } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Training', href: '#training' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <nav className="container-shell flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-3" aria-label="Maddi Chaitanya home">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
            MC
          </div>
          <span className="text-lg font-semibold text-slate-900">{portfolioData.name}</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com/maddichaitanya"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-300 p-2 text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
            aria-label="GitHub"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/maddi-chaitanya-ba5a11252/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-300 p-2 text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href="/Maddi-Chaitanya-Resume.txt"
            download
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          className="inline-flex rounded-full border border-slate-300 p-2 text-slate-700 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="container-shell flex flex-col gap-3 py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-700"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-3">
              <a
                href="https://github.com/maddichaitanya"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-300 p-2 text-slate-700"
                aria-label="GitHub"
              >
                <FaGithub size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/maddi-chaitanya-ba5a11252/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-300 p-2 text-slate-700"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href="/Maddi-Chaitanya-Resume.txt"
                download
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
