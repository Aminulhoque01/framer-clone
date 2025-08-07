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


export default function About() {
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
                </div>
            </div>
        </div>
    );
}