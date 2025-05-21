import Header from '../components/Header'
import BackBtn from '../components/BackBtn';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';

const Results = () => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
  // Array of image data for easy mapping
  const images = [
    { src: '/cosmetic-img.png', alt: 'Cosmetic', label: 'Cosmetic' },
    { src: '/demo-img.png', alt: 'Demo', label: 'Demo' },
    { src: '/skin-img.png', alt: 'Skin', label: 'Skin' },
    { src: '/weather-img.png', alt: 'Weather', label: 'Weather' },
  ];

  const handleTopMouseEntered = () => {
    setIsHovered(true);
  }

  const handleTopMouseLeave = () => {
    setIsHovered(false)
  }

  const handleTopClick = () => {
    navigate('/analysis');
  }

  // Diamond positions: top, right, bottom, left
  // 1: top, 2: right, 3: bottom, 0: left
  return (
    <>
      <Header text="INTRO" />
      <main className="h-[85vh] bg-white">
        <div className="fixed w-[100%] h-[68%] scale-84 ">
            {/* Rectangle 2780 as a background for the diamond */}
            <img
            src="/Rectangle 2782.png"
            alt="Rectangle 2780"
            className={`absolute left-1/2 top-[54%] w-70 h-70 -translate-x-1/2 -translate-y-1/2 transition-transformation duration-400 ease-linear opacity-0  ${isHovered ? "scale-140 opacity-100" : "opacity-0"}`}
            />
            {/* Bottom */}
            <div className="absolute left-1/2 top-[59%] -translate-x-1/2 transition-transform rotate-45 w-26 h-26 object-contain overflow-clip cursor-not-allowed">
                <img src={images[3].src} alt={images[3].alt} className=" -rotate-45 scale-150"/>
            </div>
          
            {/* Left */}
            <div className="absolute top-[54%] right-[52.5%] -translate-y-1/2 transition-transform rotate-45 w-26 h-26 object-contain overflow-clip cursor-not-allowed">
                <img src={images[0].src} alt={images[0].alt} className="-rotate-45 scale-150"/>
            </div>
          
            {/* Top */}
            <div className={`absolute left-1/2 bottom-[51.5%] -translate-x-1/2 transition-transform rotate-45 w-26 h-26 object-contain border-none overflow-clip transition-transformation duration-400 linear ${isHovered ? 'cursor-pointer scale-[104%] bg-blue-500 drop-shadow-white' : ''}`}
            onMouseLeave={handleTopMouseLeave}
            onMouseEnter={handleTopMouseEntered}
            onClick={handleTopClick} >
                <img src={images[1].src} alt={images[1].alt} className=
                {`-rotate-45 scale-150 ${isHovered ? "opacity-96" : ""}`}/>
            </div>
          
            {/* Right */}
            <div className="absolute top-[54%] left-[52.6%] -translate-y-1/2 transition-transform rotate-45 w-26 h-26 object-contain overflow-clip cursor-not-allowed" >
                <img src={images[2].src} alt={images[2].alt} className="-rotate-45 scale-150" />
            </div>
        </div>
      </main>
      <footer className="relative">
        <div className="absolute bottom-3 left-5 flex items-center">
          <BackBtn />
        </div>
      </footer>
    </>
  )
};

export default Results