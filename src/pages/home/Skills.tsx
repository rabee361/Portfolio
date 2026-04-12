import type { CSSProperties, JSX } from "react";
import {
    SiGo,
    SiPython,
    SiElixir,
    SiJavascript,
    SiDjango,
    SiFastapi,
    SiFlask,
    SiReact,
    SiTailwindcss,
    SiGithub,
    SiGit,
    SiBitbucket,
    SiNginx,
    SiLinux,
    SiMysql,
    SiSqlite,
    SiPostgresql
} from '../../components/Icons';
import { FaDatabase } from '../../components/Icons';
import { useInView } from '../../hooks/useInView';

interface Skill {
    name: string;
    icon: JSX.Element;
}

interface SkillCategory {
    title: string;
    skills: Skill[];
}

function Skills() {
    const [ref, isInView] = useInView<HTMLDivElement>({
        freezeOnceVisible: true,
        rootMargin: '-100px',
    });

    const skillCategories: SkillCategory[] = [
        {
            title: "Programming Languages",
            skills: [
                { name: "Go", icon: <SiGo className="text-2xl" /> },
                { name: "Python", icon: <SiPython className="text-2xl" /> },
                { name: "Elixir", icon: <SiElixir className="text-2xl" /> },
                { name: "JavaScript", icon: <SiJavascript className="text-2xl" /> },
            ],
        },
        {
            title: "Frameworks & Libraries",
            skills: [
                { name: "Django", icon: <SiDjango className="text-2xl" /> },
                { name: "FastAPI", icon: <SiFastapi className="text-2xl" /> },
                { name: "Flask", icon: <SiFlask className="text-2xl" /> },
                { name: "React", icon: <SiReact className="text-2xl" /> },
                { name: "Tailwind", icon: <SiTailwindcss className="text-2xl" /> },
            ],
        },
        {
            title: "DevOps & Tools",
            skills: [
                { name: "GitHub", icon: <SiGithub className="text-2xl" /> },
                { name: "Git", icon: <SiGit className="text-2xl" /> },
                { name: "Bitbucket", icon: <SiBitbucket className="text-2xl" /> },
                { name: "Nginx", icon: <SiNginx className="text-2xl" /> },
                { name: "Linux", icon: <SiLinux className="text-2xl" /> },
            ],
        },
        {
            title: "Databases",
            skills: [
                { name: "SQL", icon: <FaDatabase className="text-2xl" /> },
                { name: "SQLite", icon: <SiSqlite className="text-2xl" /> },
                { name: "MySQL", icon: <SiMysql className="text-2xl" /> },
                { name: "PostgreSQL", icon: <SiPostgresql className="text-2xl" /> },
            ],
        },
    ];

    return (
        <div
            ref={ref}
            className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden py-20 dark:bg-[#0d1027]"
        >

            <div
                className={`reveal-section font-sans flex w-full max-w-6xl flex-col items-center gap-12 px-6 ${isInView ? 'is-visible' : ''}`}
            >
                {/* Section Header */}
                <div className="reveal-item text-center space-y-4" style={{ transitionDelay: '120ms' }}>
                    <h2 className="text-4xl md:text-6xl font-bold text-[#201E43] dark:text-white tracking-tight">
                        My <span className="text-[#508C9B] dark:text-blue-400">Skills</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
                        Technologies and tools I work with to build robust applications
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {skillCategories.map((category, idx) => (
                        <SkillCard key={category.title} category={category} delayMs={220 + idx * 90} />
                    ))}
                </div>
            </div>
        </div>
    );
}

interface SkillCardProps {
    category: SkillCategory;
    delayMs: number;
}

function SkillCard({ category, delayMs }: SkillCardProps) {
    return (
        <div
            className="reveal-item group relative overflow-hidden rounded-2xl border border-gray-200 bg-white/50 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800/40"
            style={{ transitionDelay: `${delayMs}ms` } as CSSProperties}
        >

            {/* Category Title */}
            <h3 className="text-xl font-semibold text-[#201E43] dark:text-white mb-4 flex items-center gap-2">
                {category.title}
            </h3>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center gap-2 p-3 rounded-xl bg-gray-50/50 dark:bg-gray-700/30 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-all duration-200 group/skill"
                    >
                        <div className="text-[#508C9B] dark:text-blue-400 group-hover/skill:scale-110 transition-transform duration-200">
                            {skill.icon}
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
