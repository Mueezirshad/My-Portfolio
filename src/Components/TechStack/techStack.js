import TechCard from "./techCard";
import { techStack } from "@/data/portfolio";

export default function TechStack() {

    return (
        <section
            id="skills"
            className="py-28"
        >
            <div className="mx-auto max-w-6xl px-6">

                <h2 className="text-center text-5xl font-bold">
                    Tech Stack
                </h2>
                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {techStack.map((tech) => (
                        <TechCard
                            key={tech.name}
                            name={tech.name}
                            icon={<tech.icon />}
                        />
                    ))}
                </div>
                <p className="mx-auto mt-5 max-w-2xl text-center text-gray-400">
                    Technologies I use to build modern,
                    responsive and scalable web applications.
                </p>

            </div>
        </section>
    );
}