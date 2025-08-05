"use client";
import Image from 'next/image';
import { useState } from 'react';
import side1 from '@/assets/sideLogo/side1.avif';
import side2 from '@/assets/sideLogo/side2.avif';
import side3 from '@/assets/sideLogo/side3.avif';
import side4 from '@/assets/sideLogo/side4.avif';
import side5 from '@/assets/sideLogo/side5.avif';
import side6 from '@/assets/sideLogo/side6.avif';

const SideImage = () => {
    const [hoverImage, setHoverImage] = useState(side2);

    const handleMouseEnter = (index: number) => {
        const images =[side1, side2, side3, side4, side5,side6];
        setHoverImage(images[index % images.length]);
    };

    return (
        <div className="min-h-screen bg-[#F8EDE3] p-6">
            <div className="flex mt-20 mb-10 justify-center items-center">
                <h1 className="text-3xl md:text-5xl font-bold text-[#8D493A] mb-6 text-center">
                    Selecting the ideal <br /> elements to elevate <br /> your space
                </h1>
            </div>

            <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
                {/* Image Section - Centered */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="bg-gray-300 rounded-lg overflow-hidden max-w-[500px]">
                        <Image
                            src={hoverImage}
                            alt="Interior Design"
                            width={500}
                            height={500}
                            className="w-[579] h-[600px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                        />
                    </div>
                </div>

                {/* Text Section - Right */}
                <div className="w-full md:w-1/2 text-left">
                    <ul className="space-y-4 text-brown-700">
                        <li
                            className="border-b border-brown-300 pb-2 hover:bg-[#8D493A] text-[#8D493A] p-2 hover:text-white transition-colors duration-300"
                            onMouseEnter={() => handleMouseEnter(0)}
                        >
                            01. Custom Furniture Design
                        </li>
                        <li
                            className="border-b border-brown-300 pb-2 hover:bg-[#8D493A] text-[#8D493A] p-2 hover:text-white transition-colors duration-300"
                            onMouseEnter={() => handleMouseEnter(1)}
                        >
                            02. Room Decoration & Styling
                        </li>
                        <li
                            className="border-b border-brown-300 pb-2 hover:bg-[#8D493A] text-[#8D493A] p-2 hover:text-white transition-colors duration-300"
                            onMouseEnter={() => handleMouseEnter(2)}
                        >
                            03. Space Planning & Interior Layout
                        </li>
                        <li
                            className="border-b border-brown-300 pb-2 hover:bg-[#8D493A] text-[#8D493A] p-2 hover:text-white transition-colors duration-300"
                            onMouseEnter={() => handleMouseEnter(3)}
                        >
                            04. Home Renovations & Remodeling
                        </li>
                        <li
                            className="border-b border-brown-300 pb-2 hover:bg-[#8D493A] text-[#8D493A] p-2 hover:text-white transition-colors duration-300"
                            onMouseEnter={() => handleMouseEnter(4)}
                        >
                            05. Lighting Design
                        </li>
                        <li
                            className="border-b border-brown-300 pb-2 hover:bg-[#8D493A] text-[#8D493A] p-2 hover:text-white transition-colors duration-300"
                            onMouseEnter={() => handleMouseEnter(5)}
                        >
                            06. Virtual Interior Design Consultations
                        </li>
                    </ul>
                    <p className="text-sm text-[#8D493A]  mt-4">• Our Expertise</p>
                </div>
            </div>
        </div>
    );
};

export default SideImage;