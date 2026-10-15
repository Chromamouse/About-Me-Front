type FooterProps = {
    copyright: string;
};

export function Footer({ copyright }: FooterProps) {
    return (
        <footer className="flex flex-col justify-between gap-4 border-t border-neutral-700 py-6 font-mono text-xs text-neutral-500 sm:flex-row">
            <span>{copyright}</span>
        </footer>
    );
}
