import { useEffect, useState } from 'react';
import image1 from "@/assets/logo/image1.avif";
import image2 from "@/assets/logo/image2.avif";
import image3 from "@/assets/logo/image3.avif";
import image4 from "@/assets/logo/image4.avif";
import image5 from "@/assets/logo/image5.avif";
import image6 from "@/assets/logo/image6.avif";
import Image from 'next/image';

// Debounce utility to limit state updates
const debounce = (func: () => void, wait: number) => {
    let timeout: NodeJS.Timeout | undefined;
    return () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(), wait);
    };
};

const ImageSection = () => {
    const [isGrid, setIsGrid] = useState(false);

    useEffect(() => {
        const handleScroll = debounce(() => {
            const section = document.querySelector('.image-section');
            if (!section) return;

            const rect = section.getBoundingClientRect();
            const sectionHeight = rect.height;
            const sectionTop = rect.top + window.scrollY;
            const triggerPoint = sectionTop + sectionHeight / 3;

            setIsGrid(window.scrollY > triggerPoint);
        }, 100); // 100ms debounce

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="image-section bg-[#F8EDE3] pt-6 min-h-screen">
            <div className="text-center pt-8">
                <div
                    className={`container mx-auto px-4 py-8 transition-none mt-20 ${isGrid
                            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'
                            : 'relative h-[400px] sm:h-[500px] md:h-[600px]'
                        }`}
                >
                    {!isGrid && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-full max-w-3xl">
                                <Image
                                    src={image1.src}
                                    alt="Design 1"
                                    width={300}
                                    height={400}
                                    className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] h-auto rounded-lg shadow-md absolute top-0 left-1/2 transform -translate-x-1/2 transition-transform duration-500 ease-out"
                                    style={{ transform: isGrid ? 'translate(-50%, 100vh)' : 'translate(-50%, 0)' }}
                                />
                                <Image
                                    src={image2.src}
                                    width={300}
                                    height={400}
                                    alt="Design 2"
                                    className="w-full max-w-[180px] sm:max-w-[220px] md:max-w-[260px] h-auto rounded-lg shadow-md absolute top-16 sm:top-20 left-1/3 sm:left-1/4 transform -translate-x-1/2 transition-transform duration-500 ease-out"
                                    style={{ transform: isGrid ? 'translate(-50%, 100vh)' : 'translate(-50%, 0)' }}
                                />
                                <Image
                                    src={image3.src}
                                    width={300}
                                    height={400}
                                    alt="Design 3"
                                    className="w-full max-w-[180px] sm:max-w-[220px] md:max-w-[260px] h-auto rounded-lg shadow-md absolute top-24 sm:top-32 right-1/3 sm:right-1/4 transform translate-x-1/2 transition-transform duration-500 ease-out"
                                    style={{ transform: isGrid ? 'translate(50%, 100vh)' : 'translate(50%, 0)' }}
                                />
                                <Image
                                    src={image4.src}
                                    width={300}
                                    height={400}
                                    alt="Design 4"
                                    className="w-full max-w-[180px] sm:max-w-[220px] md:max-w-[260px] h-auto rounded-lg shadow-md absolute bottom-16 sm:bottom-20 left-1/3 transform -translate-x-1/2 transition-transform duration-500 ease-out"
                                    style={{ transform: isGrid ? 'translate(-50%, 100vh)' : 'translate(-50%, 0)' }}
                                />
                                <Image
                                    src={image5.src}
                                    width={300}
                                    height={400}
                                    alt="Design 5"
                                    className="w-full max-w-[180px] sm:max-w-[220px] md:max-w-[260px] h-auto rounded-lg shadow-md absolute bottom-8 sm:bottom-10 right-1/3 transform translate-x-1/2 transition-transform duration-500 ease-out"
                                    style={{ transform: isGrid ? 'translate(50%, 100vh)' : 'translate(50%, 0)' }}
                                />
                                <Image
                                    src={image6.src}
                                    width={300}
                                    height={400}
                                    alt="Design 6"
                                    className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] h-auto rounded-lg shadow-md absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-transform duration-500 ease-out"
                                    style={{ transform: isGrid ? 'translate(-50%, 100vh)' : 'translate(-50%, 0)' }}
                                />
                            </div>
                        </div>
                    )}
                    {isGrid && (
                        <>
                            <Image
                                src={image1.src}
                                width={300}
                                height={400}
                                alt="Design 1"
                                className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] h-auto rounded-lg shadow-md mx-auto transition-transform duration-700 ease-in-out transform hover:scale-105"
                                style={{ transform: isGrid ? 'translateY(0)' : 'translateY(50px)', opacity: isGrid ? 1 : 0 }}
                            />
                            <Image
                                src={image2.src}
                                width={300}
                                height={400}
                                alt="Design 2"
                                className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] h-auto rounded-lg shadow-md mx-auto transition-transform duration-700 ease-in-out transform hover:scale-105"
                                style={{ transform: isGrid ? 'translateY(0)' : 'translateY(50px)', opacity: isGrid ? 1 : 0 }}
                            />
                            <Image
                                src={image3.src}
                                width={300}
                                height={400}
                                alt="Design 3"
                                className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] h-auto rounded-lg shadow-md mx-auto transition-transform duration-700 ease-in-out transform hover:scale-105"
                                style={{ transform: isGrid ? 'translateY(0)' : 'translateY(50px)', opacity: isGrid ? 1 : 0 }}
                            />
                            <div
                                className="text-center mt-6 sm:mt-8 md:mt-10 text-[#B85842] text-lg sm:text-xl md:text-2xl font-semibold transition-opacity duration-700 ease-in-out col-span-full px-4"
                                style={{ opacity: isGrid ? 1 : 0 }}
                            >
                                Transforming spaces with style, <br /> through Troscán&apos;s exquisite <br /> design expertise.
                            </div>
                            <Image
                                src={image4.src}
                                width={300}
                                height={400}
                                alt="Design 4"
                                className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] h-auto rounded-lg shadow-md mx-auto transition-transform duration-700 ease-in-out transform hover:scale-105"
                                style={{ transform: isGrid ? 'translateY(0)' : 'translateY(50px)', opacity: isGrid ? 1 : 0 }}
                            />
                            <Image
                                src={image5.src}
                                width={300}
                                height={400}
                                alt="Design 5"
                                className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] h-auto rounded-lg shadow-md mx-auto transition-transform duration-700 ease-in-out transform hover:scale-105"
                                style={{ transform: isGrid ? 'translateY(0)' : 'translateY(50px)', opacity: isGrid ? 1 : 0 }}
                            />
                            <Image
                                src={image6.src}
                                width={300}
                                height={400}
                                alt="Design 6"
                                className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] h-auto rounded-lg shadow-md mx-auto transition-transform duration-700 ease-in-out transform hover:scale-105"
                                style={{ transform: isGrid ? 'translateY(0)' : 'translateY(50px)', opacity: isGrid ? 1 : 0 }}
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ImageSection;