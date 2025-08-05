import { useEffect, useState } from 'react';
import Head from 'next/head';
import sild1 from '@/assets/logo/sild1.avif';
import sild2 from '@/assets/logo/sild2.avif';
import sild3 from '@/assets/logo/sild3.avif';

export default function SildImage() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('down');

  const images = [sild1.src, sild2.src, sild3.src];
  const transitionDuration = 900; // Duration in ms

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      setScrollDirection(direction);
      setLastScrollY(scrollY);

      const threshold = 100; // Smaller threshold for smoother transitions
      const newIndex = Math.floor(scrollY / threshold) % images.length;
      if (newIndex !== activeImageIndex) {
        setActiveImageIndex(newIndex < 0 ? images.length - 1 : newIndex);
      }
    };

    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll);
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [lastScrollY, images.length, activeImageIndex]);

  return (
    <div className="h-full w-screen flex flex-col items-center justify-center relative" style={{ height: '100vh', overflow: 'hidden' }}>
     
      {/* Full-screen Background Image Container */}
      <div className="absolute inset-0 overflow-hidden bg-black h-screen">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 h-full bg-cover bg-center transition-all duration-1900 ease-in-out ${
              index === activeImageIndex
                ? 'opacity-100 transform translate-y-0'
                : scrollDirection === 'down'
                ? 'opacity-0 transform translate-y-full'
                : 'opacity-0 transform -translate-y-full'
            }`}
            style={{ backgroundImage: `url(${image})`, transitionDuration: `${transitionDuration}ms` }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Serene Urban Retreat</h1>
        <p className="text-lg md:text-xl mb-4">Where modern comfort meets peaceful sophistication.</p>
        <button className="bg-[#F8EDE3] text-[#B85842] px-6 py-2 rounded hover:bg-opacity-30">
          View Project
        </button>
      </div>
    </div>
  );
}