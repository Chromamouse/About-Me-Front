type HeroSectionProps = {
    name: string;
    intro: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
};

export function HeroSection({
                                name,
                                intro,
                                description,
                                imageSrc,
                                imageAlt,
                            }: HeroSectionProps) {
    return (
        <section className="grid grid-cols-1 items-center gap-12 border-t border-neutral-700 py-16 md:grid-cols-2 md:gap-16 md:py-24">
            {/* Left: Introduction */}
            <div className="flex min-w-0 flex-col justify-center">
                <p className="mb-6 font-mono text-sm uppercase tracking-[0.3em] text-neutral-500">
                    {intro}
                </p>

                <h1 className="text-[15vw] font-bold leading-[0.85] tracking-tighter select-none md:text-[5vw] lg:text-7xl">
                    {name}
                    <span className="text-xl text-neutral-500">.</span>
                </h1>

                <p className="mt-8 max-w-lg text-lg leading-relaxed text-neutral-400 md:text-xl">
                    {description}
                </p>
            </div>

            {/* Right: Portrait */}
            <div className="w-full md:justify-self-end">
                <div className="overflow-hidden rounded-sm bg-neutral-800">
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="aspect-[3/5] w-100vm rounded-full object-cover grayscale transition duration-700"
                    />
                </div>
            </div>
        </section>
    );
}