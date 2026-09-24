import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function Training() {
  return (
    <section id="training" className="section-spacing">
      <div className="container-shell">
        <div className="mb-8 max-w-2xl">
          <p className="section-kicker">Training Experience</p>
          <h2 className="section-title">Practical learning and technology exposure.</h2>
        </div>

        <div className="space-y-6">
          {portfolioData.training.map((item) => (
            <div key={`${item.company}-${item.title}`} className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="absolute left-8 top-8 h-full w-px bg-slate-200" />
              <div className="relative flex flex-col gap-4 pl-10 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                    {item.title.includes('Java') ? <FaBriefcase size={14} /> : <FaGraduationCap size={14} />}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-slate-600">{item.company}</p>
                    <p className="mt-1 text-sm text-slate-500">{item.location}</p>
                  </div>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                  {item.duration}
                </span>
              </div>

              {item.skills && (
                <div className="relative mt-5 pl-10">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Skills being learned</p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span key={skill} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {item.experience && (
                <div className="relative mt-5 pl-10">
                  <p className="text-slate-600">{item.experience}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
