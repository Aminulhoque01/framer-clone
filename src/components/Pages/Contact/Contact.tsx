import Image from 'next/image';
import contact from '@/assets/contact/contact.avif';

export default function Contact() {
  return (
    <div className="items-center justify-center min-h-screen bg-[#F8EDE3] text-[#8D493A] p-4">
      <div>
        <h1 className="text-5xl text-[#8D493A] font-bold text-center mb-8 mt-20 pt-10">
          Let&apos;s Bring Your <br /> Vision to Life
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl">
          {/* Left Section - Image */}
          <div className="w-full md:w-1/2 p-4">
            <div className="bg-[#F7E9DC] rounded-lg overflow-hidden">
              <Image
                src={contact.src}
                alt="Chair Design"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="w-full md:w-1/2 p-4">
            <div className="bg-[#F7E9DC] p-6 rounded-lg h-[600px] border border-[#8D493A]">
              <form className="space-y-7 pt-10">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full p-2 border border-amber-300 rounded"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full p-2 border border-amber-300 rounded"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 border border-amber-300 rounded"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full p-2 border border-amber-300 rounded"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    className="w-full p-2 border border-amber-300 rounded h-24"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#8D493A] text-white p-2 rounded hover:bg-amber-700"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}