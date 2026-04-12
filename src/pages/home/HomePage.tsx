import { lazy, Suspense, type ReactNode } from 'react'
import { useInView } from '../../hooks/useInView'
import Hero from './Hero'
import Navbar from './Navbar'

const About = lazy(() => import('./About'))
const Skills = lazy(() => import('./Skills'))
const Projects = lazy(() => import('./Projects'))

function SectionFallback() {
  return <div className='min-h-[45vh]' aria-hidden='true' />
}

function DeferredSection({ id, children }: { id: string; children: ReactNode }) {
  const [ref, isInView] = useInView<HTMLDivElement>({
    freezeOnceVisible: true,
    rootMargin: '300px 0px',
    threshold: 0,
  })

  return (
    <section id={id} ref={ref} className='w-full'>
      {isInView ? (
        <Suspense fallback={<SectionFallback />}>
          {children}
        </Suspense>
      ) : (
        <SectionFallback />
      )}
    </section>
  )
}

function HomePage() {
  return (
    <div className=' dark:bg-gray-900 bg-[#EEEEEE] ease-in-out duration-500'>
        <Navbar/>
        <Hero/>
        <DeferredSection id='about'>
          <About/>
        </DeferredSection>
        <DeferredSection id='skills'>
          <Skills/>
        </DeferredSection>
        <DeferredSection id='projects'>
          <Projects/>
        </DeferredSection>
    </div>
  )
}

export default HomePage