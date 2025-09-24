import TranslateButton from '../components/TranslateButton.jsx'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-950 text-slate-100">
      <header className="border-b border-slate-800/60 bg-slate-900/40 backdrop-blur">
        <div className="container flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Portfolio</p>
            <h1 className="text-2xl font-semibold sm:text-3xl">Jaspreet Bhamra</h1>
            <p className="text-sm text-slate-400">Software Engineer · Builder · Lifelong Learner</p>
          </div>
          <TranslateButton />
        </div>
      </header>

      <main className="container space-y-16 py-16">
        <section className="rounded-3xl border border-slate-800/40 bg-slate-900/40 p-10 shadow-[0_40px_120px_-60px_rgba(15,23,42,0.9)]">
          <h2 className="text-3xl font-semibold sm:text-4xl">Hi, I&apos;m Jaspreet 👋</h2>
          <p className="mt-4 text-lg text-slate-300">
            Welcome to my digital home. This site will evolve into a comprehensive look at my work, experience, and interests.
            I&apos;m currently setting the foundation for an accessible, responsive, and content-friendly personal website built with
            React, Vite, and TailwindCSS.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-800/60 bg-slate-900/60 p-6">
              <h3 className="text-lg font-semibold text-slate-100">What&apos;s coming next?</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>• Resume overview and downloadable CV</li>
                <li>• Deep dives into flagship projects</li>
                <li>• Professional journey and key milestones</li>
                <li>• Personal favorites, hobbies, and fun reads</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-800/60 bg-slate-900/60 p-6">
              <h3 className="text-lg font-semibold text-slate-100">Tech Stack</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>• React 19 + Vite</li>
                <li>• TailwindCSS for rapid styling</li>
                <li>• GitHub Pages for deployment</li>
                <li>• GitHub Actions for CI/CD (coming soon)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          {[{
            title: 'Resume',
            description: 'Highlighting roles, responsibilities, and achievements from my career to date.',
          },
          {
            title: 'Projects',
            description: 'A curated selection of engineering projects, experiments, and learnings.',
          },
          {
            title: 'Professional Experience',
            description: 'Stories from the workplace—mentorship, leadership, collaboration, and impact.',
          },
          {
            title: 'Fun Stuff',
            description: 'Books, travel, creative pursuits, and the things that keep me inspired.',
          }].map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-slate-800/60 bg-slate-900/50 p-8 transition hover:border-sky-500/50 hover:shadow-[0_30px_80px_-60px_rgba(14,116,144,0.75)]"
            >
              <h3 className="text-xl font-semibold text-slate-100">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{item.description}</p>
              <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-sky-400">
                Coming soon
                <span aria-hidden className="text-sky-500">→</span>
              </p>
            </article>
          ))}
        </section>
      </main>

      <footer className="border-t border-slate-800/60 bg-slate-950/80">
        <div className="container flex flex-col gap-4 py-10 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Jaspreet Bhamra. All rights reserved.</p>
          <p className="text-xs">
            Built with React, Vite, TailwindCSS, and deployed via GitHub Pages.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Home
