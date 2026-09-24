import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-shell flex flex-col gap-4 py-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {portfolioData.name}</p>

        <div className="flex items-center gap-4">
          <a href={portfolioData.gitHub} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-slate-900">
            <FaGithub />
            GitHub
          </a>
          <a href={portfolioData.linkedIn} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-slate-900">
            <FaLinkedin />
            LinkedIn
          </a>
          <a href={`mailto:${portfolioData.email}`} className="inline-flex items-center gap-2 hover:text-slate-900">
            <FaEnvelope />
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
