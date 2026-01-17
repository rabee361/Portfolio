import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect, ReactNode } from "react";
import { 
    FaRobot, 
    FaServer, 
    FaGlobe, 
    FaArrowRight, 
    FaGear, 
    FaCode,
    FaDatabase,
    FaBolt
} from "react-icons/fa6";

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
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

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
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="text-[6rem] text-blue-500/10"
                    >
                        <FaGear />
                    </motion.div>
                    <motion.div
                        animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.4, 1, 0.4],
                            y: [0, -5, 0]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute text-5xl text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.4)]"
                    >
                        <FaRobot />
                    </motion.div>
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
                    <div className="grid grid-cols-2 gap-3">
                        {[1, 2, 3, 4].map((i) => (
                            <motion.div
                                key={i}
                                animate={{ 
                                    scale: [1, 1.05, 1],
                                    backgroundColor: ["rgba(99, 102, 241, 0.1)", "rgba(99, 102, 241, 0.3)", "rgba(99, 102, 241, 0.1)"]
                                }}
                                transition={{ 
                                    duration: 2, 
                                    repeat: Infinity, 
                                    delay: i * 0.4 
                                }}
                                className="w-12 h-12 rounded-xl border-2 border-indigo-500/20 flex items-center justify-center text-indigo-400 shadow-inner"
                            >
                                <FaDatabase className="text-2xl" />
                            </motion.div>
                        ))}
                    </div>
                    <motion.div 
                        animate={{ 
                            opacity: [0, 1, 0],
                            y: [10, -10, -30] 
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute text-purple-400"
                    >
                        <FaBolt className="text-xl" />
                    </motion.div>
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
                    <motion.div 
                        className="w-48 h-32 border-[3px] border-emerald-500/30 rounded-xl overflow-hidden bg-emerald-500/5 p-4 flex flex-col gap-2 shadow-xl backdrop-blur-sm"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="flex gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-red-400" />
                            <div className="w-2 h-2 rounded-full bg-yellow-400" />
                            <div className="w-2 h-2 rounded-full bg-green-400" />
                        </div>
                        <div className="flex flex-col gap-2 mt-1">
                            <motion.div 
                                animate={{ width: ["20%", "70%", "20%"] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="h-2 bg-emerald-400/30 rounded-full"
                            />
                            <motion.div 
                                animate={{ width: ["10%", "50%", "10%"] }}
                                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                                className="h-2 bg-emerald-400/10 rounded-full"
                            />
                            <div className="flex items-center gap-2 mt-1">
                                <FaCode className="text-xl text-emerald-400" />
                                <div className="h-2 w-full bg-emerald-400/10 rounded-full" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            )
        }
    ];

    return (
        <section
            ref={ref}
            id="services"
            className="relative w-full min-h-screen flex flex-col items-center py-24 overflow-hidden"
        >
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={mainControls}
                className="font-outfit w-full max-w-7xl px-6 flex flex-col items-center justify-center gap-16 relative z-10"
            >
                {/* Section Header */}
                <motion.div 
                    variants={{
                        hidden: { y: 20, opacity: 0 },
                        visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
                    }}
                    className="text-center space-y-4"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#201E43] dark:text-white tracking-tight">
                        My <span className="text-[#508C9B] dark:text-blue-400">Services</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
                        Tailored digital solutions designed to elevate your business and simplify your technology stack
                    </p>
                </motion.div>

                {/* Horizontal Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

interface ServiceCardProps {
    service: ServiceItem;
    index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
    return (
        <motion.div
            variants={{
                hidden: { y: 30, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay: index * 0.1 } }
            }}
            className="group relative flex flex-col items-center p-6 md:p-8 bg-white/40 dark:bg-gray-800/30 backdrop-blur-md rounded-[2.5rem] border border-white/20 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
        >
            {/* Top Accent Line */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} opacity-70 group-hover:h-1.5 transition-all duration-300`} />

            {/* Animation Section */}
            <div className="w-full h-48 flex items-center justify-center mb-6">
                {service.animation}
            </div>

            {/* Content Section */}
            <div className="flex-1 flex flex-col items-center text-center space-y-5">
                <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg shrink-0 mb-2`}>
                    {service.icon}
                </div>
                
                <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl font-bold text-[#201E43] dark:text-white">
                        {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-light line-clamp-3">
                        {service.description}
                    </p>
                </div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`mt-auto flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r ${service.color} text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300`}
                >
                    {service.cta}
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                </motion.button>
            </div>
        </motion.div>
    );
}

export default Services;
