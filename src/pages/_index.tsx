const Index = () => {
  return (
    <main className="min-h-screen w-full bg-radial from-neutral-800 to-neutral-950 text-neutral-200 ">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 md:px-16">
        {/* Navigation */}
        <div className="flex justify-between">
          <span className="tracking-tight flex py-8 font-mono text-sm">
            DM / PORTFOLIO
          </span>
          <nav className="flex py-8 font-mono text-sm">
            <a
              href="mailto:dawid.malek13@gmail.com"
              className=" rounded-full border border-neutral-100 px-6 py-3 font-mono text-sm text-neutral-300 transition hover:border-neutral-400"
            >
              CONTACT ↗
            </a>
            <a
              href="https://github.com/Chromamouse"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-neutral-100 px-6 py-3 font-mono text-sm text-neutral-300 transition hover:border-neutral-400"
            >
              GITHUB ↗
            </a>
          </nav>
        </div>

        {/* Hero */}
        <section className="grid grid-cols-1 items-center border-t border-neutral-700 gap-12 py-16 md:grid-cols-2 md:gap-16 md:py-24">
          {/* Left: Introduction */}
          <div className="flex min-w-0 flex-col justify-center">
            <p className="mb-6 font-mono text-sm uppercase tracking-[0.3em] text-neutral-500">
              Hello, I'm
            </p>

            <h1 className="text-[15vw] text-x font-bold leading-[0.85] tracking-tighter select-none md:text-[5vw] lg:text-7xl">
              Dawid Małek<span className="text-neutral-500 text-xl">.</span>
            </h1>

            <p className="mt-8 max-w-lg text-lg leading-relaxed text-neutral-400 md:text-xl">
              I study programming at a technical school in Poland. I enjoy
              creating video games and console applications, and I also have a
              passion for music and sound design.
            </p>
          </div>

          {/* Right: Photo */}
          <div className="w-full md:justify-self-end">
            <div className="overflow-hidden rounded-sm bg-neutral-800">
              <img
                src="/src/assets/images/profile.jpg"
                alt="Portrait of Dawid Małek"
                className="aspect-[3/5] w-100wm h-100wm rounded-full object-cover grayscale transition duration-700"
              />
            </div>
          </div>
        </section>

        {/* About */}
        <section className="grid grid-cols-1 border-t border-neutral-700 items-center gap-12 py-16 md:grid-cols-2 md:gap-16 md:py-24">
          {/* Left: Introduction */}
          <div className="flex min-w-0 flex-col justify-center">
            <h2 className="font-mono text-sm uppercase tracking-widest text-neutral-500">
              (01) A bit more about me
            </h2>

            <p className="mt-8 max-w-lg text-lg leading-relaxed text-neutral-400 md:text-xl">
              I developed my own video game called "Second Gravity", and worked
              with the raspberry pi as a hobby project. I am currently learning
              sound design, synthesis, and music production. In the future I
              hope to combine my hobbies and program VST plugins or help write
              operating systems for intruments.
            </p>
          </div>

          {/* Right: Photo */}
          <div className="w-full md:justify-self-end">
            <div className="overflow-hidden rounded-sm bg-neutral-800">
              <img
                src="/src/assets/images/static1.jpg"
                alt="A photo of a electricity pole"
                className="aspect-[4/5] w-100wm border-radius-100wm object-cover grayscale transition duration-700"
              />
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="grid grid-cols-1 gap-10 border-t border-neutral-700 py-16 md:grid-cols-[1fr_2fr] md:py-24">
          <h2 className="font-mono text-sm uppercase tracking-widest text-neutral-500">
            (02) Competencies
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Web Design",
              "Game Maker Language",
              "python",
              "Java",
              "JavaScript",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-neutral-700 px-5 py-3 font-mono text-sm text-neutral-300 transition hover:border-neutral-400 hover:bg-neutral-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="flex flex-col justify-between gap-4 border-t border-neutral-700 py-6 font-mono text-xs text-neutral-500 sm:flex-row">
          <span>© 2026 Dawid Małek</span>
        </footer>
      </div>
    </main>
  );
};

export default Index;
