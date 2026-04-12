import chartsImage from '../../assets/images/charts.avif'
import Alnoor from '../../assets/images/alnoor.png'
import Fazaa from '../../assets/images/fazaa.jpg'

interface Project {
    id: number
    name: string
    year: number
    description: string
    techStack: string[]
    githubUrl?: string
    liveUrl?: string
    imageSrc?: string
    imageAlt: string
}

interface ProjectSectionProps {
    project: Project
    reversed: boolean
}

function ProjectSection({ project, reversed }: ProjectSectionProps) {
    const minimumTrackItems = 10
    const repeatedTechStack = Array.from(
        { length: Math.max(2, Math.ceil(minimumTrackItems / project.techStack.length)) },
        () => project.techStack,
    ).flat()
    const techItems = [...repeatedTechStack, ...repeatedTechStack]

    return (
        <section className="relative flex min-h-screen w-full items-center justify-center px-6 py-24 lg:py-0">
            <div className="relative mx-auto w-full max-w-6xl">
                <div className="pointer-events-none absolute left-1/2 top-0 z-20 w-[60%] -translate-x-1/2 -translate-y-1/2 overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_16%,black_84%,transparent_100%)]">
                    <div className="flex w-max animate-marquee items-center gap-2" style={{ animationDuration: '14s' }}>
                        {techItems.map((tech, i) => (
                            <span
                                key={`${tech}-${i}`}
                                className="inline-flex shrink-0 items-center rounded-full border border-slate-200/80 bg-white/90 px-4 py-1.5 text-xs font-semibold tracking-[0.02em] text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.1)] backdrop-blur-md dark:border-slate-600/70 dark:bg-slate-800/85 dark:text-slate-100"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div
                    className={`relative mx-auto flex w-full max-w-5xl flex-col rounded-[2rem] border border-slate-200/70 bg-white/75 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/70 dark:shadow-[0_20px_70px_rgba(2,6,23,0.45)]`}
                >
                    <div
                        className={`flex w-full flex-col items-center gap-10 p-6 pt-12 lg:gap-16 lg:p-9 lg:pt-14 ${
                            reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
                        }`}
                    >
                        {/* Image Side */}
                        <div className="flex w-full lg:w-1/2">
                            <div
                                className={`overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl transition-transform duration-300 dark:border-gray-700 dark:bg-gray-800 lg:w-[120%] lg:max-w-none ${
                                    reversed ? 'lg:translate-x-[20%]' : 'lg:-translate-x-[15%]'
                                }`}
                            >
                                {project.imageSrc ? (
                                    <img
                                        src={project.imageSrc}
                                        alt={project.imageAlt}
                                        loading="lazy"
                                        decoding="async"
                                        fetchPriority="low"
                                        width={1280}
                                        height={800}
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="aspect-[16/10] h-auto w-full object-cover"
                                    />
                                ) : (
                                    <div className="flex aspect-[16/10] w-full items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(80,140,155,0.32),_transparent_58%),linear-gradient(135deg,_#0f172a,_#111827_60%,_#1e293b)]">
                                        <div className="space-y-3 text-center">
                                            <div className="mx-auto h-12 w-12 rounded-2xl border border-white/15 bg-white/5" />
                                            <p className="text-sm font-medium uppercase tracking-[0.24em] text-white/75">
                                                Project Preview
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="flex w-full flex-col gap-6 lg:w-1/2">
                            {/* Year Badge */}
                            <span className="w-fit rounded-full border border-gray-300 px-4 py-1.5 text-sm font-semibold text-gray-600 dark:border-gray-600 dark:text-gray-300">
                                {project.year}
                            </span>

                            {/* Title */}
                            <h3 className="text-4xl font-bold tracking-tight text-[#201E43] md:text-5xl dark:text-white">
                                {project.name}
                            </h3>

                            {/* Description */}
                            <p className="max-w-lg text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                                {project.description}
                            </p>

                            {/* Action Buttons */}
                            {(project.liveUrl || project.githubUrl) && (
                                <div className="flex flex-wrap items-center gap-3 pt-2">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2.5 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm transition-all duration-200 hover:bg-gray-50 hover:shadow-md active:scale-95 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                                        >
                                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                            </svg>
                                            Live demo
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2.5 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm transition-all duration-200 hover:bg-gray-50 hover:shadow-md active:scale-95 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                                        >
                                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                            </svg>
                                            GitHub
                                        </a>
                                    )}
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Projects = () => {
    const projects: Project[] = [
        {
            id: 1,
            name: 'Fazaa',
            year: 2025,
            description: 'A contact and information sharing system, consisting of 2 apps and a dashboard for admins, built mainly to help business owners and customers to find and share contact info and services through shortened URLs and location sharing.',
            techStack: ['Django', 'Python', 'JavaScript', 'PostgreSQL', 'Redis'],
            githubUrl: 'https://github.com/rabeee361/Fazaa',
            imageSrc: Fazaa,
            imageAlt: 'Fazaa project preview',
        },
        {
            id: 2,
            name: 'Alnoor Hajj Campaign',
            year: 2024,
            description: 'Mobile app with a responsive dashboard to manage users/employees and manage the data shown in the app, with a custom and responsive registration form to sign up new pilgrims, and a custom landing page, all built on behalf of Al-Noor pilgrim campaign located in Al-kaddih, KSA.',
            techStack: ['Django', 'Python', 'JavaScript', 'PostgreSQL'],
            githubUrl: 'https://github.com/rabee361/Alnoor',
            liveUrl: 'https://alnoor-hajj.com',
            imageSrc: Alnoor,
            imageAlt: 'Alnoor Hajj Campaign project preview',
        },
        // {
        //     id: 3,
        //     name: 'Automation Tools & Scripts',
        //     year: 2025,
        //     description: 'A Collection of personal and commercial Automation tools and Workflows built with n8n with integration with services like Whatsapp, Youtube, Google Services and many more.',
        //     techStack: ['Go', 'n8n', 'Python', 'JavaScript'],
        // },
        {
            id: 4,
            name: 'Pulse',
            year: 2025,
            description: 'A Networking CLI tool built with Go, that provides a set of tools for network analysis and security testing, from port scanning, SSL Certificate checking, DNS lookup and more.',
            techStack: ['Go'],
            githubUrl: 'https://github.com/rabee361/pulse',
            imageSrc: chartsImage,
            imageAlt: 'Pulse project preview',
        },
    ]

    return (
        <div className="relative w-full overflow-hidden font-sans dark:bg-[#0d1027]">
            {/* Section Header */}
            <div className="px-6 pt-20 pb-8 text-center">
                <h2 className="text-4xl font-bold tracking-tight text-[#201E43] md:text-6xl dark:text-white">
                    My <span className="text-[#508C9B] dark:text-blue-400">Projects</span>
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg font-light leading-relaxed text-gray-600 md:text-xl dark:text-gray-300">
                    Some of the projects I've built, ranging from web apps to automation tools
                </p>
            </div>

            {/* Full-screen Project Sections */}
            {projects.map((project, index) => (
                <ProjectSection
                    key={project.id}
                    project={project}
                    reversed={index % 2 !== 0}
                />
            ))}
        </div>
    )
}

export default Projects