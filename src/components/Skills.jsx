import { portfolioData } from '../data/portfolioData';

const skillGroups = [
  { title: 'Programming Languages', items: portfolioData.skills.programming },
  { title: 'Web Technologies', items: portfolioData.skills.web },
  { title: 'Database', items: portfolioData.skills.database },
  { title: 'Tools', items: portfolioData.skills.tools },
  { title: 'Soft Skills', items: portfolioData.skills.soft },
];

export default function Skills() {
  return (
    <section id="skills" className="section-spacing">
      <div className="container-shell">
        <div className="mb-8 max-w-2xl">
          <p className="section-kicker">Technical Skills</p>
          <h2 className="section-title">Skills aligned with Java and software development fundamentals.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="mb-5 text-xl font-bold text-slate-900">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
