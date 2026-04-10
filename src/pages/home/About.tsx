import type { CSSProperties, ReactNode } from "react";
import {
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBriefcase,
  FaLanguage,
  FaTools
} from '../../components/Icons';
import { useInView } from '../../hooks/useInView';

function About() {
  const [ref, isInView] = useInView<HTMLDivElement>({
    freezeOnceVisible: true,
    rootMargin: '-100px',
  });

  return (
    <div ref={ref} className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden">

      <div
        className={`reveal-section font-sans flex w-full max-w-6xl flex-col items-center gap-12 px-6 ${isInView ? 'is-visible' : ''}`}
      >

        {/* Text Content */}
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl">
          <div className="reveal-item space-y-4" style={{ transitionDelay: '120ms' }}>
            <h2 className="text-4xl md:text-6xl font-bold text-[#201E43] dark:text-white tracking-tight">
              About <span className="text-[#508C9B] dark:text-blue-400">Me</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
              I'm a passionate Software Engineer dedicated to building robust back-end systems and intuitive user experiences.
            </p>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-8">
            <InfoCard
              icon={<FaMapMarkerAlt />}
              label="Location"
              value="Tartus, Syria"
              delayMs={200}
            />
            <InfoCard
              icon={<FaGraduationCap />}
              label="Education"
              value="IT, Homs University"
              delayMs={280}
            />
            <InfoCard
              icon={<FaBriefcase />}
              label="Experience"
              value="3+ Years Back-End Dev"
              delayMs={360}
            />
            <InfoCard
              icon={<FaLanguage />}
              label="Languages"
              value="Arabic & English"
              delayMs={440}
            />
            <InfoCard
              icon={<FaTools />}
              label="Tech Stack"
              value="Python, Django, Go, Elixir"
              delayMs={520}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Component for Cards
interface InfoCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  delayMs: number;
}

function InfoCard({ icon, label, value, delayMs }: InfoCardProps) {
  return (
    <div
      className="reveal-item group flex flex-col items-center rounded-2xl border border-gray-100 bg-white/50 p-6 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-gray-700 dark:bg-gray-800/40"
      style={{ transitionDelay: `${delayMs}ms` } as CSSProperties}
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
    </div>
  );
}

export default About;