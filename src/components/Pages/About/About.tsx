"use client"

import Head from 'next/head';
import Image from 'next/image';
import about1 from '@/assets/about/hTZXDyZnJxuZxbdwIztBbCgMYQ.avif';
import about2 from '@/assets/about/about2.avif'
import about3 from '@/assets/about/about3.avif'
import about4 from '@/assets/about/about4.avif'
import about5 from '@/assets/about/about5.avif'
import about6 from '@/assets/about/about6.avif'
import about7 from '@/assets/about/about7.avif'
import about8 from '@/assets/about/about8.avif'
import side1 from '@/assets/sideLogo/side1.avif';
import side2 from '@/assets/sideLogo/side2.avif';
import side3 from '@/assets/sideLogo/side3.avif';
import side4 from '@/assets/sideLogo/side4.avif';
import side5 from '@/assets/sideLogo/side5.avif';
import side6 from '@/assets/sideLogo/side6.avif';
import { useState } from 'react';


export default function About() {

    const [hoverImage, setHoverImage] = useState(side2);

    const handleMouseEnter = (index: number) => {
        const images = [side1, side2, side3, side4, side5, side6];
        setHoverImage(images[index % images.length]);
    };

    return (
        < div className='' >

            <div className="min-h-screen bg-[#F8EDE3] flex flex-col items-center justify-center text-center">

                <div className='w-full container mx-auto px-4 py-8'>
                    <main className="flex flex-col items-center py-12 mt-20">
                        <h1 className="text-4xl md:text-6xl font-bold text-[#8D493A] mb-6 pt-12 mb-10">
                            Crafting Timeless <br /> Spaces with Style
                        </h1>
                        <div className="w-full w-full">
                            <Image
                                src={about1.src} // Replace with your image path
                                width={1700}
                                height={800}
                                alt="Timeless Space Design"
                                className=" w-full h-full rounded-lg shadow-lg "
                            />
                        </div>
                    </main>


                    <div className="w-full mx-auto  flex flex-col md:flex-row items-center justify-between gap-10 mt-20">
                        {/* Text Section */}
                        <div className="text-center md:text-left md:w-1/3 ">
                            <div className='mb-20'>
                                <p className="text-sm font-bold text-[#8D493A] mb-2">. About us</p>
                                <h1 className="text-4xl md:text-6xl font-bold text-[#8D493A] mb-15">
                                    Where Spaces <br /> Inspire, and Design <br /> Comes Alive
                                </h1>
                            </div>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <div className='mt-20'>
                                <p className="text-[#8D493A] mb-6 mt-10">
                                    At Troscain, we believe that every space has a story to tell. A premier furniture design and room decorating agency. Our expert team blends timeless craftsmanship with innovative designs, ensuring each piece and layout reflects your unique taste and lifestyle. Whether you're looking to reimagine your living room...
                                </p>
                                <button className="bg-[#B85842] text-white px-6 py-3 rounded hover:bg-[#D85842] font-bold text-lg transition-colors duration-300">
                                    More About us
                                </button>
                            </div>
                        </div>
                        {/* Image Section */}
                        <div className="w-full md:w-1/2 flex justify-end ">
                            <Image
                                src={about2.src} // Replace with your image path
                                alt="Interior Design"
                                width={757} // Adjust based on image size
                                height={459} // Adjust based on image size
                                className="rounded-lg shadow-lg hover: animate-zoom"
                            />
                        </div>
                    </div>

                    <div className=" text-gray-800 font-sans min-h-screen">
                        <div className="container mx-auto p-6">
                            <h2 className="text-center text-3xl font-bold text-amber-800 mb-8">
                                Meet the Visionaries Behind Troscán
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="bg-white rounded-lg shadow-md p-4 text-center">
                                    <Image
                                        src={about3.src}
                                        width={300}
                                        height={400}
                                        alt="Emma Collins"
                                        className="w-full h-64 object-cover rounded-md"
                                    />
                                    <h3 className="text-xl font-semibold mt-4">Emma Collins</h3>
                                    <p className="text-gray-600">Creative Director</p>
                                    <button className="mt-4 bg-amber-200 text-amber-800 px-4 py-2 rounded hover:bg-amber-300">
                                        Contact
                                    </button>
                                </div>
                                <div className="bg-white rounded-lg shadow-md p-4 text-center">
                                    <Image
                                        src={about4.src}
                                        width={300}
                                        height={400}
                                        alt="Liam Bennett"
                                        className="w-full h-64 object-cover rounded-md"
                                    />
                                    <h3 className="text-xl font-semibold mt-4">Liam Bennett</h3>
                                    <p className="text-gray-600">Lead Furniture Designer</p>
                                    <button className="mt-4 bg-amber-200 text-amber-800 px-4 py-2 rounded hover:bg-amber-300">
                                        Contact
                                    </button>
                                </div>
                                <div className="bg-white rounded-lg shadow-md p-4 text-center">
                                    <Image
                                        src={about5.src}
                                        width={300}
                                        height={400}
                                        alt="Sophia Turner"
                                        className="w-full h-64 object-cover rounded-md"
                                    />
                                    <h3 className="text-xl font-semibold mt-4">Sophia Turner</h3>
                                    <p className="text-gray-600">Textile Stylist</p>
                                    <button className="mt-4 bg-amber-200 text-amber-800 px-4 py-2 rounded hover:bg-amber-300">
                                        Contact
                                    </button>
                                </div>
                                <div className="bg-white rounded-lg shadow-md p-4 text-center">
                                    <Image
                                        src={about6.src}
                                        width={300}
                                        height={400}
                                        alt="Oliver Harris"
                                        className="w-full h-64 object-cover rounded-md"
                                    />
                                    <h3 className="text-xl font-semibold mt-4">Oliver Harris</h3>
                                    <p className="text-gray-600">Space Planner</p>
                                    <button className="mt-4 bg-amber-200 text-amber-800 px-4 py-2 rounded hover:bg-amber-300">
                                        Contact
                                    </button>
                                </div>
                                <div className="bg-white rounded-lg shadow-md p-4 text-center">
                                    <Image
                                        src={about7.src}
                                        width={300}
                                        height={400}
                                        alt="Isabella Reed"
                                        className="w-full h-64 object-cover rounded-md"
                                    />
                                    <h3 className="text-xl font-semibold mt-4">Isabella Reed</h3>
                                    <p className="text-gray-600">Lighting Specialist</p>
                                    <button className="mt-4 bg-amber-200 text-amber-800 px-4 py-2 rounded hover:bg-amber-300">
                                        Contact
                                    </button>
                                </div>
                                <div className="bg-white rounded-lg shadow-md p-4 text-center">
                                    <Image
                                        src={about8.src}
                                        width={300}
                                        height={400}
                                        alt="Ethan Wright"
                                        className="w-full h-64 object-cover rounded-md"
                                    />
                                    <h3 className="text-xl font-semibold mt-4">Ethan Wright</h3>
                                    <p className="text-gray-600">Client Experience Manager</p>
                                    <button className="mt-4 bg-amber-200 text-amber-800 px-4 py-2 rounded hover:bg-amber-300">
                                        Contact
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
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

                    <div className="  font-sans mt-20 text-[#8D493A]">
                        <div className="container mx-auto p-6">
                            <div className="text-center">
                                <p className="text-sm text-brown-600">• Why Us?</p>
                                <h1 className="text-4xl font-bold text-brown-700 mt-2">
                                    Elevate Your Space with <br /> Expertise & Elegance
                                </h1>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
                                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                    <div className="w-12 h-12 bg-brown-100 rounded-full mx-auto flex items-center justify-center mb-4">
                                        <span className="text-brown-600">✂️</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-brown-700">
                                        Tailored Designs for Every Space
                                    </h3>
                                    <p className="mt-2 text-gray-600">
                                        We believe every space is unique, and so should be its design. Our
                                        bespoke solutions are crafted to reflect your personality, needs,
                                        and lifestyle.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                    <div className="w-12 h-12 bg-brown-100 rounded-full mx-auto flex items-center justify-center mb-4">
                                        <span className="text-brown-600">🔍</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-brown-700">
                                        Attention to Every Detail
                                    </h3>
                                    <p className="mt-2 text-gray-600">
                                        From the finest furniture to the perfect accents, we meticulously
                                        focus on every detail to ensure flawless results.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                    <div className="w-12 h-12 bg-brown-100 rounded-full mx-auto flex items-center justify-center mb-4">
                                        <span className="text-brown-600">🤝</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-brown-700">
                                        Seamless Collaboration
                                    </h3>
                                    <p className="mt-2 text-gray-600">
                                        Your vision is our priority. We work closely with you at every
                                        step, combining your ideas with our expertise to create spaces
                                        you'll love.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                    <div className="w-12 h-12 bg-brown-100 rounded-full mx-auto flex items-center justify-center mb-4">
                                        <span className="text-brown-600">⏳</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-brown-700">
                                        Timeless Elegance
                                    </h3>
                                    <p className="mt-2 text-gray-600">
                                        Our designs go beyond trends to create spaces that stand the test
                                        of time, offering a perfect blend of style, comfort, and
                                        functionality.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    );
}