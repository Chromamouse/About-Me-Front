type AboutSectionProps = {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
};

export function AboutSection({
                                 title,
                                 description,
                                 imageSrc,
                                 imageAlt,
                             }: AboutSectionProps) {
    return (
        <section className="grid grid-cols-1 items-center gap-12 border-t border-neutral-700 py-16 md:grid-cols-2 md:gap-16 md:py-24">
            <div className="flex min-w-0 flex-col justify-center">
                <h2 className="font-mono text-sm uppercase tracking-widest text-neutral-500">
                    {title}
                </h2>

                <p className="mt-8 max-w-lg text-lg leading-relaxed text-neutral-400 md:text-xl">
                    {description}
                </p>
            </div>

            <div className="w-full md:justify-self-end">
                <div className="overflow-hidden rounded-sm bg-neutral-800">
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="aspect-[4/5] w-100vm object-cover grayscale transition duration-700"
                    />
                </div>
            </div>
        </section>
    );
}
