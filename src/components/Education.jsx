import { portfolioData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section-spacing">
      <div className="container-shell">
        <div className="mb-8 max-w-2xl">
          <p className="section-kicker">Education</p>
          <h2 className="section-title">Academic background and technical foundation.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {portfolioData.education.map((item) => (
            <article key={item.degree} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                  {item.year}
                </span>
                <span className="text-sm font-medium text-slate-500">{item.percentage}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">{item.degree}</h3>
              <p className="mt-3 text-slate-600">{item.institution}</p>
              <p className="mt-2 text-sm text-slate-500">{item.university}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
