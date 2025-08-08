import chair from "@/assets/sideLogo/chair.avif";
import sofa from "@/assets/sideLogo/bed.avif";
import table from "@/assets/sideLogo/bed2.avif";
import Image from "next/image";

export default function ThreeCard() {
  return (
    <div className="min-h-screen bg-[#F8EDE3] flex flex-col items-center justify-center p-6">
      <div className=" ">
        <h1 className="text-4xl font-bold text-brown-800 mb-4">
          Stay Inspired with Interior Trends
        </h1>
        <a
          href="#"
          className="inline-block bg-brown-700 text-white px-6 py-2 rounded-md hover:bg-brown-600"
        >
          View All News
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-8">
        <div className="p-2">
          <Image
            src={chair.src}

            width={300}
            height={400}
            alt="Minimalist Interiors"
            className="w-full h-64 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <p className="text-gray-600 text-sm mt-2">February 5, 2022</p>
          <h3 className="text-lg font-semibold text-brown-800 mt-2">
            The Art of Minimalist Interiors
          </h3>
          <p className="text-gray-600 mt-1">
            Less is More: Designing Spaces That Speak Simplicity
          </p>
        </div>
        <div className="p-2">
          <Image
            src={sofa.src}

            width={300}
            height={400}
            alt="Timeless Furniture"
            className="w-full h-64 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <p className="text-gray-600 text-sm mt-2">January 22, 2022</p>
          <h3 className="text-lg font-semibold text-brown-800 mt-2">
            Timeless Furniture Pieces Every Home Needs
          </h3>
          <p className="text-gray-600 mt-1">
            Building a Home That Never Goes Out of Style
          </p>
        </div>
        <div className="p-2">
          <Image
            src={table.src}

            width={300}
            height={400}
            alt="Psychology in Interior Design"
            className="w-full h-64 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <p className="text-gray-600 text-sm mt-2">January 21, 2022</p>
          <h3 className="text-lg font-semibold text-brown-800 mt-2">
            Psychology in Interior Design
          </h3>
          <p className="text-gray-600 mt-1">
            Shaping Emotions Through Thoughtful Color Choices
          </p>
        </div>
      </div>
    </div>
  );
}