import Head from 'next/head';
import Image from 'next/image';
import about1 from '@/assets/about/hTZXDyZnJxuZxbdwIztBbCgMYQ.avif';

export default function About() {
    return (
        <>
           
            <div className="min-h-screen bg-[#F8EDE3] flex flex-col items-center justify-center text-center">
               
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
            </div>
        </>
    );
}