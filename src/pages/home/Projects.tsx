import { useState, useEffect } from 'react'
import img2 from '../../assets/images/img2.webp'


const Projects = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    // Add your project images here
    const projectImages = [
        img2,
        img2,
        img2,
        // Add more project images as needed
    ]

    // Auto-slide functionality
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => 
                prev === projectImages.length - 1 ? 0 : prev + 1
            )
        }, 3000) // Change slide every 3 seconds

        return () => clearInterval(timer)
    }, [])

    // Manual navigation
    const nextSlide = () => {
        setCurrentSlide((prev) => 
            prev === projectImages.length - 1 ? 0 : prev + 1
        )
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => 
            prev === 0 ? projectImages.length - 1 : prev - 1
        )
    }

    return (
        <section className="py-20 dark:bg-gray-900 bg-[#EEEEEE] ease-in-out duration-500">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 dark:text-white text-gray-800">
                    My Projects
                </h2>
                <div className="relative max-w-6xl mx-auto">
                    {/* Slideshow container */}
                    <div className="relative h-[600px] w-full rounded-xl overflow-hidden shadow-2xl">
                        {projectImages.map((image, index) => (
                            <div
                                key={index}
                                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                                }`}
                            >
                                <img
                                    src={image}
                                    alt={`Project ${index + 1}`}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Navigation buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-900/50 dark:bg-gray-200/50 text-white dark:text-gray-900 p-4 rounded-full hover:bg-gray-900/70 dark:hover:bg-gray-200/70 transition-all duration-300"
                    >
                        &#10094;
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-900/50 dark:bg-gray-200/50 text-white dark:text-gray-900 p-4 rounded-full hover:bg-gray-900/70 dark:hover:bg-gray-200/70 transition-all duration-300"
                    >
                        &#10095;
                    </button>

                    {/* Dots/circles */}
                    <div className="absolute -bottom-12 w-full flex justify-center gap-3">
                        {projectImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-4 w-4 rounded-full transition-all duration-300 ${
                                    index === currentSlide
                                        ? 'bg-gray-900 dark:bg-gray-200 scale-110'
                                        : 'bg-gray-400 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-500'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects