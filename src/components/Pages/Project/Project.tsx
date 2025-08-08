import Image from 'next/image';
import image1 from '@/assets/project/image1.avif';
import image2 from '@/assets/project/image2.avif';
import image3 from '@/assets/project/image3.avif';
import image4 from '@/assets/project/image4.avif';

export default function Project() {
  const rooms = [
    {
      title: "Where Tradition Meets Mastery",
      description: "Blending tradition with modern elegance",
      image: image1, // Replace with your image path
    },
    {
      title: "Modern Elegance in Every Room",
      description: "Timeless style and innovation",
      image: image2, // Replace with your image path
    },
    {
      title: "Luxurious Coastal Living",
      description: "Bringing the beauty of the shore into your home",
      image: image3, // Replace with your image path
    },
    {
      title: "Serene Urban Retreat",
      description: "Where modern comfort meets peaceful sophistication",
      image: image4, // Replace with your image path
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8EDE3] flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-[#8D493A] mb-8 text-center mt-20">
        Where Vision <br /> Meets Design
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rooms.map((room, index) => (
          <div key={index} className=" rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full h-64">
              <Image
                src={room.image}
                alt={room.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-[#8D493A]">{room.title}</h2>
              <p className="text-sm text-[#8D493A]">{room.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}