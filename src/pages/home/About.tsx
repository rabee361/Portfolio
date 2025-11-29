import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect, ReactNode } from "react";
import {
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBriefcase,
  FaLanguage,
  FaLaptopCode,
  FaTools
} from "react-icons/fa";

function About() {
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
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <div ref={ref} id="about" className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden">
      {/* Inject Font */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
          .font-outfit { font-family: 'Outfit', sans-serif; }
        `}
      </style>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={mainControls}
        className="font-outfit w-full max-w-6xl px-6 flex flex-col items-center gap-12"
      >

        {/* Text Content */}
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl">
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold text-[#201E43] dark:text-white tracking-tight">
              About <span className="text-[#508C9B] dark:text-blue-400">Me</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
              I'm a passionate Software Engineer dedicated to building robust back-end systems and intuitive user experiences.
            </p>
          </motion.div>

          {/* Info Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-8"
          >
            <InfoCard
              icon={<FaMapMarkerAlt />}
              label="Location"
              value="Tartus, Syria"
            />
            <InfoCard
              icon={<FaGraduationCap />}
              label="Education"
              value="BIT, Albaath University"
            />
            <InfoCard
              icon={<FaBriefcase />}
              label="Experience"
              value="2+ Years Back-End Dev"
            />
            <InfoCard
              icon={<FaLanguage />}
              label="Languages"
              value="Arabic & English"
            />
            <InfoCard
              icon={<FaTools />}
              label="Tech Stack"
              value="Python, Django, React, Redis"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

// Helper Component for Cards
interface InfoCardProps {
  icon: ReactNode;
  label: string;
  value: string;
}

function InfoCard({ icon, label, value }: InfoCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="flex flex-col items-center p-6 bg-white/50 dark:bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-100 group"
    >
      <div className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/20 text-[#508C9B] dark:text-blue-400 mb-3 text-xl group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
        {label}
      </h3>
      <p className="text-base font-medium text-[#201E43] dark:text-white text-center">
        {value}
      </p>
    </motion.div>
  );
}

export default About;