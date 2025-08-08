import Image from 'next/image';
import news1 from '@/assets/news/news1.avif';
import news2 from '@/assets/news/news2.avif';
import news3 from '@/assets/news/news3.avif';
import news4 from '@/assets/news/news4.avif';
import news5 from '@/assets/news/news5.avif';
import news6 from '@/assets/news/news6.avif';

const News = () => {
  return (
    <div className="min-h-screen bg-[#F8EDE3] flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-[#8D493A] mb-8 mt-20 pt-20">Expert Insights and <br /> Design Inspiration</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { src: news1, alt: 'Design 1', title: 'How to Choose the Perfect Lighting', date: 'June 4, 2023' },
          { src: news2, alt: 'Design 2', title: 'The Rise of Minimalism in Modern Design', date: 'July 10, 2023' },
          { src: news3, alt: 'Design 3', title: 'The Art of Layering Textures in Creating Depth', date: 'August 1, 2023' },
          { src: news4, alt: 'Design 4', title: 'Psychology in Interior Design', date: 'January 21, 2023' },
          { src: news5, alt: 'Design 5', title: 'Timeless Furniture Pieces Every Home Needs', date: 'February 15, 2023' },
          { src: news6, alt: 'Design 6', title: 'The Art of Minimalist Interiors', date: 'February 5, 2023' },

        ].map((item, index) => (
          <div key={index} className="rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full h-64">
              <Image src={item.src} alt={item.alt} layout="fill" objectFit="cover" />
            </div>
            <div className="p-4">
              <p className="  text-sm text-[#8D493A]">{item.date}</p>
              <p className="text-[#8D493A] font-medium mt-2">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;