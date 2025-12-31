import { motion } from "framer-motion";

const companies = [
    { name: "ACME", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" }, // Placeholder for standard tech logo
    { name: "Globex", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png" },
    { name: "Soylent", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png" },
    { name: "Initech", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" },
    { name: "Massive Dynamic", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" }
];

export function TrustedBy() {
    return (
        <section className="py-12 bg-black border-y border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
                <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest">Trusted by 10,000+ Developers at</p>
            </div>

            <div className="relative flex overflow-x-hidden">
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...companies, ...companies, ...companies].map((company, i) => (
                        <div key={i} className="mx-12 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                            <img src={company.logo} alt={company.name} className="h-8 object-contain brightness-0 invert" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
