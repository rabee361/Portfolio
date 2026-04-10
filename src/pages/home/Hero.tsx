import { lazy, Suspense, useEffect, useState } from 'react';
import { useInView } from '../../hooks/useInView';
import { FaLinkedin, FaGithub, FaFileDownload, MdEmail } from '../../components/Icons';

const LightPillar = lazy(() => import('../../components/LightPillar'));

function Hero() {
  const [heroRef] = useInView<HTMLDivElement>({
    threshold: 0.35,
    rootMargin: '0px 0px -10%',
  });
  const [shouldRenderPillar, setShouldRenderPillar] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    let timeoutId: number | null = null;

    const mountPillar = () => {
      timeoutId = window.setTimeout(() => {
        setShouldRenderPillar(true);
      }, 250);
    };

    if (document.readyState === 'complete') {
      mountPillar();
    } else {
      window.addEventListener('load', mountPillar, { once: true });
    }

    return () => {
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
      window.removeEventListener('load', mountPillar);
    };
  }, []);

  return (
    <div
      ref={heroRef}
      id='contact'
      className='relative flex h-screen w-full flex-col items-center justify-center gap-1 overflow-hidden text-black transition-colors duration-500 ease-in-out dark:text-white sm:gap-5'
    >
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(80,140,155,0.18),_transparent_42%),linear-gradient(180deg,_rgba(255,255,255,0.82)_0%,_rgba(255,255,255,0.36)_45%,_rgba(19,75,112,0.08)_100%)] dark:bg-[radial-gradient(circle_at_top,_rgba(80,140,155,0.2),_transparent_42%),linear-gradient(180deg,_rgba(32,30,67,0.24)_0%,_rgba(19,75,112,0.16)_55%,_rgba(32,30,67,0.5)_100%)]' />
      {shouldRenderPillar ? (
        <Suspense fallback={null}>
          <LightPillar
            className='opacity-75 dark:opacity-90'
            topColor='#508C9B'
            bottomColor='#201E43'
            intensity={1}
            rotationSpeed={0.3}
            glowAmount={0.0026}
            pillarWidth={2.8}
            pillarHeight={0.42}
            noiseIntensity={0.16}
            pillarRotation={24}
            interactive={false}
            mixBlendMode='screen'
            quality='high'
          />
        </Suspense>
      ) : null}
      <div className='absolute inset-0 bg-gradient-to-b from-white/35 via-transparent to-white/45 dark:from-slate-950/10 dark:via-transparent dark:to-slate-950/55' />

        <p
          style={{ animationDelay: '120ms' }}
          className='hero-enter-left relative z-10 flex items-center justify-center text-nowrap text-3xl font-bold text-[#201E43] transition-colors duration-500 ease-in-out dark:text-white sm:text-8xl'
        >
          <span className='bg-gradient-to-r from-[#508C9B] via-[#134B70] to-[#201E43] dark:from-blue-400 dark:via-blue-500 dark:to-blue-600 text-transparent bg-clip-text ml-1 sm:ml-3 transition-all duration-500 ease-in-out'>Rabee</span>
          Hasan
        </p>
        <span
          style={{ animationDelay: '220ms' }}
          className='hero-enter-right relative z-10 text-center text-sm text-[#201E43] transition-colors duration-500 ease-in-out dark:text-white sm:text-xl'
        >
          Software Engineer @ nizam.ae | Back-end Developer | Tech Enthusiast
        </span>
        <div
          style={{ animationDelay: '320ms' }}
          className='hero-enter-up relative z-10 pt-10'
        >
          <ul className='flex gap-5 sm:gap-10 dark:text-white text-[#201E43] transition-colors duration-500 ease-in-out'>
            <li>
              <a
                href="https://github.com/rabee361"
                aria-label="Visit Rabee Hasan's GitHub profile"
                className="relative block transition-[color,transform] duration-300 hover:scale-125 hover:text-[#508C9B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#508C9B] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:hover:text-blue-400 dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-[#201E43] group"
              >
                <FaGithub className='size-5 sm:size-9' />
              </a>
            </li>
            <li>
              <a
                href="mailto:rha60540@gmail.com"
                aria-label="Send an email to Rabee Hasan"
                className="relative block transition-[color,transform] duration-300 hover:scale-125 hover:text-[#508C9B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#508C9B] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:hover:text-blue-400 dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-[#201E43] group"
              >
                <MdEmail className='size-5 sm:size-9' />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/rabee-hasan-145487269"
                aria-label="Visit Rabee Hasan's LinkedIn profile"
                className="relative block transition-[color,transform] duration-300 hover:scale-125 hover:text-[#508C9B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#508C9B] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:hover:text-blue-400 dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-[#201E43] group"
              >
                <FaLinkedin className='size-5 sm:size-9' />
              </a>
            </li>
            <li>
              <a
                href="/src/assets/files/cv.pdf"
                download="Rabee_Hasan_CV.pdf"
                aria-label="Download Rabee Hasan's CV"
                className="relative block transition-[color,transform] duration-300 hover:scale-125 hover:text-[#508C9B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#508C9B] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:hover:text-blue-400 dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-[#201E43] group"
              >
                <FaFileDownload className='size-5 sm:size-8' />
              </a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Hero