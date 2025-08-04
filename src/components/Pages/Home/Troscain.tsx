import Head from 'next/head';
import Image from 'next/image';
import bannerImg from '@/assets/about/drowing.avif'; // Import the image

export default function Troscain() {
    return (
        <div className="min-h-screen bg-[#F8EDE3] flex items-center justify-center p-6">
            <Head>
                <title>Troscain - Interior Design</title>
            </Head>
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 mt-20">
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
                        src={bannerImg}
                        alt="Interior Design"
                        width={857} // Adjust based on image size
                        height={659} // Adjust based on image size
                        className="rounded-lg shadow-lg hover: animate-zoom"
                    />
                </div>
            </div>
        </div>
    );
}


