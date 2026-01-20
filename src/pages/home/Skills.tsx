import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
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
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

interface Skill {
    name: string;
    icon: JSX.Element;
}

interface SkillCategory {
    title: string;
    skills: Skill[];
}

function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

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
            id="skills"
            className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden"
        >

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={mainControls}
                className="font-outfit w-full max-w-6xl px-6 flex flex-col items-center gap-12"
            >
                {/* Section Header */}
                <motion.div variants={cardVariants} className="text-center space-y-4">
                    <h2 className="text-4xl md:text-6xl font-bold text-[#201E43] dark:text-white tracking-tight">
                        My <span className="text-[#508C9B] dark:text-blue-400">Skills</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
                        Technologies and tools I work with to build robust applications
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
                >
                    {skillCategories.map((category, idx) => (
                        <SkillCard key={idx} category={category} variants={cardVariants} />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}

interface SkillCardProps {
    category: SkillCategory;
    variants: any;
}

function SkillCard({ category, variants }: SkillCardProps) {
    return (
        <motion.div
            variants={variants}
            className="group relative p-6 bg-white/50 dark:bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
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
        </motion.div>
    );
}

export default Skills;
