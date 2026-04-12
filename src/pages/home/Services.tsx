import type { CSSProperties, ReactNode } from "react";
import { 
    FaRobot, 
    FaServer, 
    FaGlobe, 
    FaArrowRight, 
    FaCode,
} from '../../components/Icons';
import { useInView } from '../../hooks/useInView';

interface ServiceItem {
    id: string;
    title: string;
    description: string;
    icon: ReactNode;
    animation: ReactNode;
    color: string;
    cta: string;
}

function Services() {
    const [ref, isInView] = useInView<HTMLDivElement>({
        freezeOnceVisible: true,
        rootMargin: '-100px',
    });

    const services: ServiceItem[] = [
        {
            id: "automation",
            title: "Automation Solutions",
            description: "Streamline your workflows with intelligent automation. I build custom scripts and systems that handle repetitive tasks.",
            icon: <FaRobot className="text-2xl" />,
            color: "from-blue-500 to-cyan-500",
            cta: "Automate My Workflow",
            animation: (
                <div className="relative w-full h-full flex items-center justify-center scale-90 md:scale-75 lg:scale-95">

                </div>
            )
        },
        {
            id: "backend",
            title: "Backend Services",
            description: "Robust, scalable server-side architectures. Expert in high-performance APIs and cloud-native services.",
            icon: <FaServer className="text-2xl" />,
            color: "from-indigo-500 to-purple-600",
            cta: "Build My Backend",
            animation: (
                <div className="relative w-full h-full flex items-center justify-center scale-90 md:scale-75 lg:scale-90">

                </div>
            )
        },
        {
            id: "websites",
            title: "Web Applications",
            description: "End-to-end web development focused on modern UX. Creating responsive, fast-loading, and interactive sites.",
            icon: <FaGlobe className="text-2xl" />,
            color: "from-emerald-500 to-teal-600",
            cta: "Get a Website",
            animation: (
                <div className="relative w-full h-full flex items-center justify-center scale-90 md:scale-75 lg:scale-90">
                    <div className="w-48 h-32 rounded-xl border-[3px] border-emerald-500/30 bg-emerald-500/5 p-4 shadow-xl backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                        <div className="flex gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-red-400" />
                            <div className="w-2 h-2 rounded-full bg-yellow-400" />
                            <div className="w-2 h-2 rounded-full bg-green-400" />
                        </div>
                        <div className="flex flex-col gap-2 mt-1">
                            <div className="service-line h-2 rounded-full bg-emerald-400/30" />
                            <div className="service-line service-line-delayed h-2 rounded-full bg-emerald-400/10" />
                            <div className="flex items-center gap-2 mt-1">
                                <FaCode className="text-xl text-emerald-400" />
                                <div className="h-2 w-full bg-emerald-400/10 rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <section
            ref={ref}
            id="services"
            className="relative w-full min-h-screen flex flex-col items-center overflow-hidden py-24 dark:bg-[#0d1027]"
        >
            <div
                className={`reveal-section relative z-10 flex w-full max-w-7xl flex-col items-center justify-center gap-16 px-6 font-sans ${isInView ? 'is-visible' : ''}`}
            >
                {/* Section Header */}
                <div className="reveal-item text-center space-y-4" style={{ transitionDelay: '120ms' }}>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#201E43] dark:text-white tracking-tight">
                        My <span className="text-[#508C9B] dark:text-blue-400">Services</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
                        Tailored digital solutions designed to elevate your business and simplify your technology stack
                    </p>
                </div>

                {/* Horizontal Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

interface ServiceCardProps {
    service: ServiceItem;
    index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
    return (
        <div
            className="reveal-item group relative flex flex-col items-center overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/40 p-6 shadow-lg backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-gray-700/50 dark:bg-gray-800/30 md:p-8"
            style={{ transitionDelay: `${220 + index * 100}ms` } as CSSProperties}
        >
            {/* Animation Section */}
            <div className="w-full h-48 flex items-center justify-center mb-6">
                {service.animation}
            </div>

            {/* Content Section */}
            <div className="flex-1 flex flex-col items-center text-center space-y-5">
                <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl font-bold text-[#201E43] dark:text-white">
                        {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-light line-clamp-3">
                        {service.description}
                    </p>
                </div>

                <button
                    className={`mt-auto flex items-center gap-2 rounded-full bg-gradient-to-r px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-[1.03] hover:shadow-lg active:scale-95 ${service.color}`}
                >
                    {service.cta}
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
}

export default Services;
