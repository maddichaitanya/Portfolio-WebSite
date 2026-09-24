import { FaArrowRight, FaGithub } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="section-spacing">
      <div className="container-shell">
        <div className="mb-8 max-w-2xl">
          <p className="section-kicker">Projects</p>
          <h2 className="section-title">Selected projects demonstrating practical development skills.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {portfolioData.projects.map((project) => (
            <article key={project.name} className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 flex items-center justify-between gap-3">
                {project.featured ? (
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                    Featured Project
                  </span>
                ) : (
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                    Project
                  </span>
                )}
                {project.duration && (
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                    {project.duration}
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-bold text-slate-900">{project.name}</h3>
              <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">{project.role || 'Project Work'}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-base leading-7 text-slate-600">{project.description}</p>

              <div className="mt-5">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {project.features ? 'Key Features' : 'Responsibilities'}
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  {(project.features || project.responsibilities).map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 text-blue-600">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {project.github && (
                <div className="mt-6 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
                  >
                    <FaGithub />
                    GitHub
                    <FaArrowRight size={12} />
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
