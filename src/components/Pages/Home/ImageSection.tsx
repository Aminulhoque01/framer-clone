import { useEffect, useState } from 'react';
import image1 from "@/assets/logo/image1.avif";
import image2 from "@/assets/logo/image2.avif";
import image3 from "@/assets/logo/image3.avif";
import image4 from "@/assets/logo/image4.avif";
import image5 from "@/assets/logo/image5.avif";
import image6 from "@/assets/logo/image6.avif";

const ImageSection = () => {
    const [isGrid, setIsGrid] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector('.image-section');
            if (!section) return;

            const rect = section.getBoundingClientRect();
            const sectionHeight = rect.height;
            const sectionTop = rect.top + window.scrollY;
            const sectionMiddle = sectionTop + sectionHeight / 2; // Middle point of the section
            const triggerPoint = sectionMiddle - window.innerHeight / 2; // Adjust to trigger when middle is in viewport center

            setIsGrid(window.scrollY > triggerPoint);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="image-section bg-[#F8EDE3] pt-10 min-h-screen">
            <div className="text-center pt-10 mt-20">
                <div
                    className={`container mx-auto px-4 py-10 transition-all duration-700 ease-in-out ${
                        isGrid ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6' : 'relative h-[600px]'
                    }`}
                >
                    {!isGrid && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-full max-w-4xl">
                                <img
                                    src={image1.src}
                                    alt="Design 1"
                                    className="w-full max-w-xs h-auto rounded-lg shadow-lg absolute top-0 left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-out"
                                    style={{ transform: isGrid ? 'translate(-50%, 100vh)' : 'translate(-50%, 0)', opacity: isGrid ? 0 : 1 }}
                                />
                                <img
                                    src={image2.src}
                                    alt="Design 2"
                                    className="w-full max-w-xs h-auto rounded-lg shadow-lg absolute top-20 left-1/4 transform -translate-x-1/2 transition-all duration-500 ease-out"
                                    style={{ transform: isGrid ? 'translate(-50%, 100vh)' : 'translate(-50%, 0)', opacity: isGrid ? 0 : 1 }}
                                />
                                <img
                                    src={image3.src}
                                    alt="Design 3"
                                    className="w-full max-w-xs h-auto rounded-lg shadow-lg absolute top-40 right-1/4 transform translate-x-1/2 transition-all duration-500 ease-out"
                                    style={{ transform: isGrid ? 'translate(50%, 100vh)' : 'translate(50%, 0)', opacity: isGrid ? 0 : 1 }}
                                />
                                <img
                                    src={image4.src}
                                    alt="Design 4"
                                    className="w-full max-w-xs h-auto rounded-lg shadow-lg absolute bottom-20 left-1/3 transform -translate-x-1/2 transition-all duration-500 ease-out"
                                    style={{ transform: isGrid ? 'translate(-50%, 100vh)' : 'translate(-50%, 0)', opacity: isGrid ? 0 : 1 }}
                                />
                                <img
                                    src={image5.src}
                                    alt="Design 5"
                                    className="w-full max-w-xs h-auto rounded-lg shadow-lg absolute bottom-10 right-1/3 transform translate-x-1/2 transition-all duration-500 ease-out"
                                    style={{ transform: isGrid ? 'translate(50%, 100vh)' : 'translate(50%, 0)', opacity: isGrid ? 0 : 1 }}
                                />
                                <img
                                    src={image6.src}
                                    alt="Design 6"
                                    className="w-full max-w-xs h-auto rounded-lg shadow-lg absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-out"
                                    style={{ transform: isGrid ? 'translate(-50%, 100vh)' : 'translate(-50%, 0)', opacity: isGrid ? 0 : 1 }}
                                />
                            </div>
                        </div>
                    )}
                    {isGrid && (
                        <>
                            <img
                                src={image1.src}
                                alt="Design 1"
                                className="w-full max-w-md h-auto rounded-lg shadow-lg transition-all duration-700 ease-in-out transform hover:scale-105"
                                style={{ opacity: isGrid ? 1 : 0, transform: isGrid ? 'translateY(0)' : 'translateY(50px)' }}
                            />
                            <img
                                src={image2.src}
                                alt="Design 2"
                                className="w-full max-w-md h-auto rounded-lg shadow-lg transition-all duration-700 ease-in-out transform hover:scale-105"
                                style={{ opacity: isGrid ? 1 : 0, transform: isGrid ? 'translateY(0)' : 'translateY(50px)' }}
                            />
                            <img
                                src={image3.src}
                                alt="Design 3"
                                className="w-full max-w-md h-auto rounded-lg shadow-lg transition-all duration-700 ease-in-out transform hover:scale-105"
                                style={{ opacity: isGrid ? 1 : 0, transform: isGrid ? 'translateY(0)' : 'translateY(50px)' }}
                            />
                            <div
                                className="text-center mt-10 text-[#B85842] text-2xl font-semibold transition-all duration-700 ease-in-out transform col-span-full"
                                style={{ opacity: isGrid ? 1 : 0, transform: isGrid ? 'translateY(0)' : 'translateY(20px)' }}
                            >
                                Transforming spaces with style, <br /> through Troscán's exquisite <br /> design expertise.
                            </div>
                            <img
                                src={image4.src}
                                alt="Design 4"
                                className="w-full max-w-md h-auto rounded-lg shadow-lg transition-all duration-700 ease-in-out transform hover:scale-105"
                                style={{ opacity: isGrid ? 1 : 0, transform: isGrid ? 'translateY(0)' : 'translateY(50px)' }}
                            />
                            <img
                                src={image5.src}
                                alt="Design 5"
                                className="w-full max-w-md h-auto rounded-lg shadow-lg transition-all duration-700 ease-in-out transform hover:scale-105"
                                style={{ opacity: isGrid ? 1 : 0, transform: isGrid ? 'translateY(0)' : 'translateY(50px)' }}
                            />
                            <img
                                src={image6.src}
                                alt="Design 6"
                                className="w-full max-w-md h-auto rounded-lg shadow-lg transition-all duration-700 ease-in-out transform hover:scale-105"
                                style={{ opacity: isGrid ? 1 : 0, transform: isGrid ? 'translateY(0)' : 'translateY(50px)' }}
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ImageSection;