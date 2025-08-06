import type { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import bgImage from '@/assets/sideLogo/nightroom.avif';

const CardSection: NextPage = () => {
    const [isCardVisible, setIsCardVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsCardVisible(scrollPosition > 100);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <Image
                src={bgImage}
                alt="Background"
                fill
                className="absolute inset-0 object-cover z-0"
            />
            {/* Main Content */}
            <div
                className={`relative z-10 text-center bg-[#F8EDE3] p-6 backdrop-blur-sm rounded-lg shadow-lg max-w-md transition-all duration-1000 ease-out ${
                    isCardVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                }`}
            >
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Troscian</h1>
                <nav className="mb-6">
                    <ul className="flex justify-center space-x-4 text-gray-600">
                        <li><a href="#" className="hover:text-gray-800">About</a></li>
                        <li><a href="#" className="hover:text-gray-800">Projects</a></li>
                        <li><a href="#" className="hover:text-gray-800">News</a></li>
                        <li><a href="#" className="hover:text-gray-800">Contact us</a></li>
                    </ul>
                </nav>
                <p className="text-gray-700 mb-4">
                    Ready to reimagine your space? Connect with us at Troscian to bring your vision to life with our expertise in design and decoration.
                </p>
                <button className="bg-amber-700 text-white px-4 py-2 rounded hover:bg-amber-800">
                    Get in Touch
                </button>
            </div>
        </div>
    );
};

export default CardSection;