import {
    SiReact,
    SiNextdotjs,
    SiVuedotjs,
    SiSvelte,
    SiTailwindcss,
    SiSass,
    SiNodedotjs,
    SiExpress,
    SiPython,
    SiDjango,
    SiPostgresql,
    SiMysql,
    SiMongodb,
    SiFirebase,
    SiGraphql,
    SiVercel,
    SiNetlify,
    SiGithub,
    SiDocker,
    SiPostman,
} from "react-icons/si";
import { cn } from "../../lib/utils";
import { Marquee } from "../../lib/marquee";
// import { Marquee } from "../../lib/marquee";

const webTechnologies = [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Vue.js", icon: SiVuedotjs },
    { name: "Svelte", icon: SiSvelte },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Sass/SCSS", icon: SiSass },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "Python", icon: SiPython },
    { name: "Django", icon: SiDjango },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MySQL", icon: SiMysql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Firebase", icon: SiFirebase },
    { name: "GraphQL", icon: SiGraphql },
    { name: "Vercel", icon: SiVercel },
    { name: "Netlify", icon: SiNetlify },
    { name: "GitHub", icon: SiGithub },
    { name: "Docker", icon: SiDocker },
    { name: "Postman", icon: SiPostman },
];

const firstRow = webTechnologies.slice(0, webTechnologies.length / 2);
const secondRow = webTechnologies.slice(webTechnologies.length / 2);

function ReviewCard({ icon: Icon, name }) {
    return (
        <figure
            className={cn(
                "relative h-full w-52 cursor-pointer overflow-hidden rounded-sm border p-4 conatainer mx-auto ",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gradient-to-r from-[#092846]  to-[#06585C] [transition-all duration-500",
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
        >
            <div className="flex items-center gap-2">
                <Icon className="text-2xl md:text-5xl text-gray-500" />
                <figcaption className="text-lg font-medium text-gray-500">{name}</figcaption>
            </div>
        </figure>
    );
}

export function TrustedByBusinesses() {
    return (
        <div className="relative overflow-hidden w-full md:py-20 py-10 container mx-auto px-4">
            <div className="flex flex-col items-center mb-10 ">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Trusted by Businesses Across Industries</h2>
                <p className="texts text-center text-lg max-w-3xl mx-auto">
                    We partner with organizations of every size and sector, delivering reliable IT solutions that drive lasting success.
                </p>
            </div>
            {/* First row */}
            {/* <div className="marquee">
                {firstRow.map((tech) => (
                    <ReviewCard key={tech.name} {...tech} />
                ))}
            </div>

          
            <div className="marquee reverse mt-4">
                {secondRow.map((tech) => (
                    <ReviewCard key={tech.name} {...tech} />
                ))}
            </div> */}

               <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((tech) => (
            <ReviewCard key={tech.name} {...tech} />
          ))}
        </Marquee>

        {/* second row (reverse) */}
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((tech) => (
            <ReviewCard key={tech.name} {...tech} />
          ))}
        </Marquee>
        </div>


    );
}



