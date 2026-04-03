
import { motion } from 'framer-motion'
import chartsImage from '../../assets/images/charts.avif'
import Alnoor from '../../assets/images/alnoor.png'
import Fazaa from '../../assets/images/fazaa.jpg'

interface Project {
    id: number
    name: string
    description: string
    techStack: string[]
    githubUrl?: string
    liveUrl?: string
    imageSrc?: string
    imageAlt: string
}

interface ProjectCardProps {
    project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article
            className="group relative flex h-full flex-col overflow-hidden rounded-[1.8rem] border border-gray-200 bg-white/50 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800/40"
        >
            <div className="relative aspect-[16/10] overflow-hidden border-b border-gray-200/80 bg-slate-900 dark:border-gray-700/80">
                {project.imageSrc ? (
                    <img
                        src={project.imageSrc}
                        alt={project.imageAlt}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(80,140,155,0.32),_transparent_58%),linear-gradient(135deg,_#0f172a,_#111827_60%,_#1e293b)] px-6 text-center">
                        <div className="space-y-3">
                            <div className="mx-auto h-12 w-12 rounded-2xl border border-white/15 bg-white/5" />
                            <p className="text-sm font-medium tracking-[0.24em] text-white/75 uppercase">Project Preview</p>
                        </div>
                    </div>
                )}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/60 to-transparent" />
                <motion.div
                    initial={false}
                    className="absolute inset-0 flex items-end bg-gradient-to-t bg-slate-950/50 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                    <p className="text-sm leading-relaxed text-white font-light">
                        {project.description}
                    </p>
                </motion.div>
            </div>

            <div className="flex flex-1 flex-col p-6">
                <div className="mb-4">
                    <h3 className="mb-3 text-2xl font-bold text-[#201E43] dark:text-white">{project.name}</h3>
                </div>

                <div className="mb-8 flex flex-wrap gap-2 mt-auto">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full border border-gray-100 bg-gray-50/50 px-3 py-1 text-xs font-medium text-[#508C9B] transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-700/30 dark:text-blue-400 dark:hover:bg-gray-700/50"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="mt-auto flex items-center gap-4">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-black shadow-md transition-all duration-200 hover:shadow-lg active:scale-95"
                        >
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                            GitHub
                        </a>
                    )}
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-bold text-[#201E43] shadow-sm transition-all duration-200 hover:bg-gray-100 hover:shadow-md active:scale-95 dark:border-gray-600 dark:bg-gray-700/50 dark:text-white dark:hover:bg-gray-700"
                        >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                            Live
                        </a>
                    )}
                </div>
            </div>
        </article>
    )
}

const Projects = () => {
    const projects: Project[] = [
        {
            id: 1,
            name: 'Fazaa',
            description: 'A contact and information sharing system, consisting of 2 apps and a dashboard for admins, built mainly to help business owners and customers to find and share contact info and services through shortened URLs and location sharing.',
            techStack: ['Django', 'Python', 'JavaScript', 'PostgreSQL', 'Redis'],
            githubUrl: 'https://github.com/rabeee361/Fazaa',
            imageSrc: Alnoor,
            imageAlt: 'Fazaa project preview',
        },
        {
            id: 2,
            name: 'Alnoor Hajj Campaign',
            description: 'Mobile app with a responsive dashboard to manage users/employees and manage the data shown in the app, with a custom and responsive registration form to sign up new pilgrims, and a custom landing page, all built on behalf of Al-Noor pilgrim campaign located in Al-kaddih, KSA.',
            techStack: ['Django', 'Python', 'JavaScript', 'PostgreSQL'],
            githubUrl: 'https://github.com/rabee361/Alnoor',
            liveUrl: 'https://alnoor-hajj.com',
            imageSrc: Fazaa,
            imageAlt: 'Alnoor Hajj Campaign project preview',
        },
        // {
        //     id: 3,
        //     name: 'Automation Tools & Scripts',
        //     description: 'A Collection of personal and commercial Automation tools and Workflows built with n8n with integration with services like Whatsapp, Youtube, Google Services and many more.',
        //     techStack: ['Go', 'n8n', 'Python', 'JavaScript'],
        // },
        {
            id: 4,
            name: 'Pulse',
            description: 'A Networking CLI tool built with Go, that provides a set of tools for network analysis and security testing, from port scanning, SSL Certificate checking, DNS lookup and more.',
            techStack: ['Go'],
            githubUrl: 'https://github.com/rabee361/pulse',
            imageSrc: chartsImage,
            imageAlt: 'Pulse project preview',
        },
    ]

    return (
        <div className="relative w-full py-20 overflow-hidden font-outfit">

            <section className="px-6 w-full max-w-6xl mx-auto flex flex-col items-center gap-12">
                {/* Section Header */}
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-6xl font-bold text-[#201E43] dark:text-white tracking-tight">
                        My <span className="text-[#508C9B] dark:text-blue-400">Projects</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
                        Some of the projects I've built, ranging from web apps to automation tools
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Projects