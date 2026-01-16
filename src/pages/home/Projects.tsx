
interface Project {
    id: number
    name: string
    description: string
    techStack: string[]
    image: string
    gradient: string
    githubUrl?: string
    liveUrl?: string
}

const Projects = () => {

    const projects: Project[] = [
        {
            id: 1,
            name: 'Fazaa',
            description: 'A contact and information sharing system, consisting of 2 apps and a dashboard for admins, built mainly to help business owners and customers to find and share contact info and services through shortened URLs and location sharing.',
            techStack: ['Django', 'Python', 'JavaScript', 'PostgreSQL', 'Redis'],
            image: '🔗',
            gradient: 'from-blue-500 to-cyan-500',
            githubUrl: 'https://github.com',
            liveUrl: 'https://example.com'
        },
        {
            id: 2,
            name: 'Alnoor Hajj Campaign',
            description: 'Mobile app with a responsive dashboard to manage users/employees and manage the data shown in the app, with a custom and responsive registration form to sign up new pilgrims, and a custom landing page, all built on behalf of Al-Noor pilgrim campaign located in Al-kaddih, KSA.',
            techStack: ['Django', 'Python', 'JavaScript', 'PostgreSQL'],
            image: '🕌',
            gradient: 'from-teal-500 to-emerald-500',
            githubUrl: 'https://github.com',
            liveUrl: 'https://example.com'
        },
        {
            id: 3,
            name: 'Automation Tools & Scripts',
            description: 'A Collection of personal and commercial Automation tools and Workflows built with n8n with integration with services like Whatsapp, Youtube, Google Services and many more.',
            techStack: ['Go', 'n8n', 'Python', 'JavaScript'],
            image: '⚙️',
            gradient: 'from-purple-500 to-blue-500',
            githubUrl: 'https://github.com',
            liveUrl: 'https://example.com'
        },
        {
            id: 4,
            name: 'Fazaa',
            description: 'A contact and information sharing system, consisting of 2 apps and a dashboard for admins, built mainly to help business owners and customers to find and share contact info and services through shortened URLs and location sharing.',
            techStack: ['Django', 'Python', 'JavaScript', 'PostgreSQL', 'Redis'],
            image: '🔗',
            gradient: 'from-blue-500 to-cyan-500',
            githubUrl: 'https://github.com',
            liveUrl: 'https://example.com'
        },
        {
            id: 5,
            name: 'Alnoor Hajj Campaign',
            description: 'Mobile app with a responsive dashboard to manage users/employees and manage the data shown in the app, with a custom and responsive registration form to sign up new pilgrims, and a custom landing page, all built on behalf of Al-Noor pilgrim campaign located in Al-kaddih, KSA.',
            techStack: ['Django', 'Python', 'JavaScript', 'PostgreSQL'],
            image: '🕌',
            gradient: 'from-teal-500 to-emerald-500',
            githubUrl: 'https://github.com',
            liveUrl: 'https://example.com'
        },
        {
            id: 6,
            name: 'Automation Tools & Scripts',
            description: 'A Collection of personal and commercial Automation tools and Workflows built with n8n with integration with services like Whatsapp, Youtube, Google Services and many more.',
            techStack: ['Go', 'n8n', 'Python', 'JavaScript'],
            image: '⚙️',
            gradient: 'from-purple-500 to-blue-500',
            githubUrl: 'https://github.com',
            liveUrl: 'https://example.com'
        }
    ]

    return (
        <div className="relative w-full py-20 overflow-hidden font-outfit">
            {/* Inject Font */}
            <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
          .font-outfit { font-family: 'Outfit', sans-serif; }
        `}
            </style>

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
                        <div 
                            key={project.id}
                            className="group relative p-6 bg-white/50 dark:bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full overflow-hidden"
                        >
                            {/* Gradient Accent Bar */}
                            <div
                                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} opacity-70 group-hover:opacity-100 transition-opacity duration-300`}
                            />

                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-[#201E43] dark:text-white mb-3">{project.name}</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-4 font-light">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                                {project.techStack.map((tech) => (
                                    <span 
                                        key={tech}
                                        className="px-3 py-1 bg-gray-50/50 dark:bg-gray-700/30 text-[#508C9B] dark:text-blue-400 text-xs font-medium rounded-full border border-gray-100 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 mt-auto">
                                <a 
                                    href={project.githubUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-white text-black rounded-xl font-bold transition-all duration-200 text-sm shadow-md hover:shadow-lg active:scale-95"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                    </svg>
                                    GitHub
                                </a>
                                <a 
                                    href={project.liveUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 text-[#201E43] dark:text-white rounded-xl font-bold transition-all duration-200 text-sm border border-gray-200 dark:border-gray-600 shadow-sm hover:shadow-md active:scale-95"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                    Live
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Projects