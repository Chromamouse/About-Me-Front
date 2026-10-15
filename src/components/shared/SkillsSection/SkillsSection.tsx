import { SkillTag } from "../SkillTag/SkillTag";

type SkillsSectionProps = {
    title: string;
    skills: string[];
};

export function SkillsSection({
                                  title,
                                  skills,
                              }: SkillsSectionProps) {
    return (
        <section className="grid grid-cols-1 gap-10 border-t border-neutral-700 py-16 md:grid-cols-[1fr_2fr] md:py-24">
            <h2 className="font-mono text-sm uppercase tracking-widest text-neutral-500">
                {title}
            </h2>

            <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                    <SkillTag key={skill} label={skill} />
                ))}
            </div>
        </section>
    );
}