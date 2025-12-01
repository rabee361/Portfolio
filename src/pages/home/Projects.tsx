import { useState } from 'react'

interface Project {
    id: number
    name: string
    description: string
    techStack: string[]
    image: string
    gradient: string
}

const Projects = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null)

    const projects: Project[] = [
        {
            id: 1,
            name: 'Fazaa',
            description: 'A contact and information sharing system, consisting of 2 apps and a dashboard for admins, built mainly to help business owners and customers to find and share contact info and services through shortened URLs and location sharing.',
            techStack: ['Django', 'Python', 'JavaScript', 'PostgreSQL', 'Redis'],
            image: '🔗',
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            id: 2,
            name: 'Alnoor Hajj Campaign',
            description: 'Mobile app with a responsive dashboard to manage users/employees and manage the data shown in the app, with a custom and responsive registration form to sign up new pilgrims, and a custom landing page, all built on behalf of Al-Noor pilgrim campaign located in Al-kaddih, KSA.',
            techStack: ['Django', 'Python', 'JavaScript', 'PostgreSQL'],
            image: '🕌',
            gradient: 'from-teal-500 to-emerald-500'
        },
        {
            id: 3,
            name: 'Automation Tools & Scripts',
            description: 'A Collection of personal and commercial Automation tools and Workflows built with n8n with integration with services like Whatsapp, Youtube, Google Services and many more.',
            techStack: ['Go', 'n8n', 'Python', 'JavaScript'],
            image: '⚙️',
            gradient: 'from-purple-500 to-blue-500'
        }
    ]

    return (
        <section className="py-20 dark:bg-gray-900 bg-[#EEEEEE] ease-in-out duration-500">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 dark:text-white text-gray-800">
                    My Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="relative group"
                            onMouseEnter={() => setHoveredCard(project.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div
                                className={`
                                    relative overflow-hidden rounded-2xl
                                    bg-gradient-to-br ${project.gradient}
                                    shadow-lg hover:shadow-2xl
                                    transition-all duration-500 ease-in-out
                                    ${hoveredCard === project.id ? 'scale-105' : 'scale-100'}
                                    ${hoveredCard === project.id ? 'h-auto min-h-[400px]' : 'h-[280px]'}
                                `}
                            >
                                {/* Card Header - Always Visible */}
                                <div className="relative z-10 p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="text-6xl opacity-90">
                                            {project.image}
                                        </div>
                                        <div className={`
                                            transition-transform duration-500
                                            ${hoveredCard === project.id ? 'rotate-180' : 'rotate-0'}
                                        `}>
                                            <svg
                                                className="w-6 h-6 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        {project.name}
                                    </h3>
                                </div>

                                {/* Expanded Content - Visible on Hover */}
                                <div
                                    className={`
                                        relative z-10 px-6 pb-6
                                        transition-all duration-500 ease-in-out
                                        ${hoveredCard === project.id
                                            ? 'opacity-100 max-h-[1000px]'
                                            : 'opacity-0 max-h-0 overflow-hidden'
                                        }
                                    `}
                                >
                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4">
                                        <p className="text-white text-sm leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-semibold text-sm uppercase tracking-wide">
                                            Tech Stack
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative Background Pattern */}
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects