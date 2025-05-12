import React, { useState } from 'react'
import Header from '../components/Header'

const Intro = () => {
    const [testHovered, setTestHovered] = useState(false);
    const [discoverHovered, setDiscoverHovered] = useState(false);

  return (
    <div>
      <Header />
      <main className="flex justify-center items-center h-[85vh] w-full bg-white relative overflow-x-hidden">
        {/* Left Rectangle */}
        <div
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 transition-all duration-500 ${
            testHovered ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <img
            className="w-1/2 h-auto"
            src="/Rectangle 2779.png"
            alt="Left Rectangle"
          />
          <button className="absolute uppercase top-1/2 left-1/2 transform -translate-x-30 -translate-y-1/2 flex items-center text-[10px] cursor-pointer"
          onMouseEnter={() => setDiscoverHovered(true)}
          onMouseLeave={() => setDiscoverHovered(false)}>
            <img
              src="/buttin-icon-shrunk (1).png"
              alt="Discover A.I. Icon"
              className="w-5 h-5 mr-2 hover:scale-120 transition-all duration-300 ease-in-out"
            />
            <span className="text-[8px]">Discover A.I.</span>
          </button>
        </div>

        {/* Center Content */}
        <section
          className={`text-center transition-all duration-1000 ease-in-out ${
            testHovered ? 'transform -translate-x-3/5 opacity-100 text-start' : 'opacity-100'
          } ${discoverHovered ? 'transform translate-x-3/5 opacity-100 text-end' : 'opacity-100'}`}
        >
          <h1
            className="text-6xl"
            data-aos="fade-in"
            data-aos-delay="300"
            data-aos-duration="3000"
          >
            Sophisticated <br /> skincare
          </h1>
        </section>

        {/* Right Rectangle */}
        <div className={`absolute -right-37 top-1/2 transform -translate-y-1/2 transition-all duration-500 ${discoverHovered ? 'opacity-0' : 'opacity-100'}`}>
          <img
            className="w-1/2 h-auto"
            src="/Rectangle 2778.png"
            alt="Right Rectangle"
          />
          <button
            className="absolute uppercase top-1/2 left-20 transform -translate-x-1/2 -translate-y-1/2 flex items-center text-[10px] cursor-pointer"
            onMouseEnter={() => setTestHovered(true)}
            onMouseLeave={() => setTestHovered(false)}
          >
            <span className="text-[8px]">Take Test</span>
            <img
              src="/buttin-icon-shrunk.png"
              alt="Take Test Icon"
              className="w-5 h-5 ml-2 hover:scale-120 transition-all duration-300 ease-in-out"
            />
          </button>
        </div>

        {/* Footer Text */}
        <div className="absolute bottom-4 left-4 text-[#1A1B1C] text-[8px] uppercase font-semibold">
          skinstric developed an a.i. that creates <br /> a highly-personalized routine tailored to <br /> what your skin needs.
        </div>
      </main>
    </div>
  )
}

export default Intro