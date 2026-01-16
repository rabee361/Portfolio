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
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    const services: ServiceItem[] = [
        {
            id: "automation",
            title: "Automation Solutions",
            description: "Streamline your workflows with intelligent automation. I build custom scripts and systems that handle repetitive tasks, from data processing to automated reporting and integration pipelines.",
            icon: <FaRobot className="text-3xl" />,
            color: "from-blue-500 to-cyan-500",
            cta: "Automate My Workflow",
            animation: (
                <div className="relative w-full h-full flex items-center justify-center">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="text-[10rem] text-blue-500/10"
                    >
                        <FaGear />
                    </motion.div>
                    <motion.div
                        animate={{ 
                            scale: [1, 1.4, 1],
                            opacity: [0.4, 1, 0.4],
                            y: [0, -10, 0]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute text-7xl text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                    >
                        <FaRobot />
                    </motion.div>

                </div>
            )
        },
        {
            id: "backend",
            title: "Backend Services",
            description: "Robust, scalable, and secure server-side architectures. Expert in building high-performance APIs, database management, and cloud-native services using Python, Django, and Go.",
            icon: <FaServer className="text-3xl" />,
            color: "from-indigo-500 to-purple-600",
            cta: "Build My Backend",
            animation: (
                <div className="relative w-full h-full flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <motion.div
                                key={i}
                                animate={{ 
                                    scale: [1, 1.1, 1],
                                    backgroundColor: ["rgba(99, 102, 241, 0.1)", "rgba(99, 102, 241, 0.3)", "rgba(99, 102, 241, 0.1)"]
                                }}
                                transition={{ 
                                    duration: 2, 
                                    repeat: Infinity, 
                                    delay: i * 0.4 
                                }}
                                className="w-20 h-20 rounded-2xl border-2 border-indigo-500/20 flex items-center justify-center text-indigo-400 shadow-inner"
                            >
                                <FaDatabase className="text-4xl" />
                            </motion.div>
                        ))}
                    </div>
                    <motion.div 
                        animate={{ 
                            opacity: [0, 1, 0],
                            y: [20, -20, -60] 
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute text-purple-400"
                    >
                        <FaBolt className="text-2xl" />
                    </motion.div>
                </div>
            )
        },
        {
            id: "websites",
            title: "Web Applications",
            description: "End-to-end web development with a focus on modern user experiences. Creating responsive, fast-loading, and interactive websites that reflect your brand identity and meet business goals.",
            icon: <FaGlobe className="text-3xl" />,
            color: "from-emerald-500 to-teal-600",
            cta: "Get a Website",
            animation: (
                <div className="relative w-full h-full flex items-center justify-center">
                    <motion.div 
                        className="w-64 h-44 border-4 border-emerald-500/30 rounded-2xl overflow-hidden bg-emerald-500/10 p-6 flex flex-col gap-4 shadow-2xl backdrop-blur-sm"
                        whileHover={{ scale: 1.1, rotate: [-1, 1, -1] }}
                    >
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                            <div className="w-3 h-3 rounded-full bg-green-400" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <motion.div 
                                animate={{ width: ["20%", "80%", "20%"] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="h-3 bg-emerald-400/40 rounded-full"
                            />
                            <motion.div 
                                animate={{ width: ["10%", "60%", "10%"] }}
                                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                                className="h-3 bg-emerald-400/20 rounded-full"
                            />
                            <div className="flex items-center gap-3">
                                <FaCode className="text-3xl text-emerald-400" />
                                <div className="h-3 w-full bg-emerald-400/20 rounded-full" />
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
                className="font-outfit w-full max-w-5xl px-6 flex flex-col items-center justify-center gap-16 relative z-10"
            >
                {/* Section Header */}
                <motion.div 
                    variants={{
                        hidden: { y: 20, opacity: 0 },
                        visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
                    }}
                    className="text-center space-y-4"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-[#201E43] dark:text-white tracking-tight">
                        My <span className="text-[#508C9B] dark:text-blue-400">Services</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
                        Tailored digital solutions designed to elevate your business and simplify your technology stack
                    </p>
                </motion.div>

                {/* Vertical Service Cards */}
                <div className="flex flex-col gap-12 w-full">
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
                hidden: { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
                visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="group relative flex flex-col md:flex-row items-center gap-8 p-8 md:p-12 bg-white/40 dark:bg-gray-800/30 backdrop-blur-md rounded-3xl border border-white/20 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500"
        >
            {/* Side Accent Line */}
            <div className={`absolute top-0 bottom-0 left-0 w-1.5 bg-gradient-to-b ${service.color} rounded-l-3xl group-hover:w-2 transition-all duration-300`} />

            {/* Animation Section */}
            <div className="w-full md:w-2/5 h-64 md:h-80 flex items-center justify-center order-2 md:order-none">
                {service.animation}
            </div>

            {/* Content Section */}
            <div className="flex-1 space-y-6 text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                    <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg shrink-0`}>
                        {service.icon}
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-2xl md:text-4xl font-bold text-[#201E43] dark:text-white pt-1">
                            {service.title}
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                            {service.description}
                        </p>
                    </div>
                </div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 mx-auto md:mx-0 px-6 py-3 rounded-full bg-gradient-to-r ${service.color} text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300`}
                >
                    {service.cta}
                    <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </motion.button>
            </div>
        </motion.div>
    );
}

export default Services;