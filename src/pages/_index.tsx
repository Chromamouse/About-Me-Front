import { LinkButton } from "../components/shared/LinkButton/LinkButton";
import { HeroSection } from "../components/shared/HeroSection/HeroSection";
import { SkillsSection } from "../components/shared/SkillsSection/SkillsSection";
import { Footer } from "../components/shared/Footer/Footer";
import { AboutSection } from "../components/shared/AboutSection/AboutSection";

import staticImage from "../assets/images/static1.jpg";

const Index = () => {
  return (
    <main className="min-h-screen w-full bg-radial from-neutral-800 to-neutral-950 text-neutral-200 ">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 md:px-16">
        {/* Navigation */}
        <div className="flex justify-between">
          <span className="tracking-tight flex py-8 font-mono text-sm">
            DM / PORTFOLIO
          </span>
          <nav className="flex py-8 gap-3 font-mono text-sm">
            <LinkButton
                label="CONTACT ↗"
                href="mailto:dawid.malek13@gmail.com"
            />

            <LinkButton
                label="GITHUB ↗"
                href="https://github.com/Chromamouse"
                external
            />
          </nav>
        </div>


        <HeroSection
            intro="Hello, I'm"
            name="Dawid Małek"
            description="I study programming at a technical school in Poland. I enjoy creating video games and console applications, and I also have a passion for music and sound design."
            imageSrc="/src/assets/images/profile.jpg"
            imageAlt="Portrait of Dawid Małek"
        />

        <AboutSection
            title="(01) A bit more about me"
            description={'I developed my own video game called "Second Gravity", and worked with the Raspberry Pi as a hobby project. I am currently learning sound design, synthesis, and music production. In the future, I hope to combine my hobbies and program VST plugins or help write operating systems for instruments.'}
            imageSrc={staticImage}
            imageAlt="A photo of an electricity pole"
        />

        <SkillsSection
            title="(02) Competencies"
            skills={[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Web Design",
              "Java",
              "Python",
              "Linux",
            ]}
        />

        <Footer copyright="© 2026 Dawid Małek" />
      </div>
    </main>
  );
};

export default Index;
