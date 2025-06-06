import Header from '../components/Header'
import BackBtn from '../components/BackBtn';
import DiamondImage from '../components/DiamondImage';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';

const Results = () => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
  
  const diamonds = [
    { label: 'Cosmetic', position: 'left' },
    { label: 'Demo', position: 'top', interactive: true },
    { label: 'Skin', position: 'right' },
    { label: 'Weather', position: 'bottom' },
  ];

  const handleTopMouseEntered = () => setIsHovered(true);
  const handleTopMouseLeave = () => setIsHovered(false);
  const handleTopClick = () => navigate('/analysis');

  return (
    <>
      <Header text="INTRO" />
      <main className="h-[85vh] bg-white">
        <div className="fixed w-[100%] h-[68%] scale-82 ">
          {/* Rectangle 2780 as a background for the diamond */}
          <img
            src="/Rectangle 2780.png"
            className={`absolute left-1/2 top-[54%] w-140 h-140 -translate-x-1/2 -translate-y-1/2 transition-transform duration-400 ease-linear opacity-0 ${isHovered ? "scale-140 opacity-100" : "opacity-0"}`}
          />
          {/* Bottom */}
          <div className="absolute left-1/2 top-[64%] -translate-x-1/2">
            <DiamondImage label="Weather" />
          </div>
          {/* Left */}
          <div className="absolute top-[54%] right-[53.2%] -translate-y-1/2">
            <DiamondImage label="Cosmetic" />
          </div>
          {/* Top */}
          <div className="absolute left-1/2 bottom-[56%] -translate-x-1/2">
            <DiamondImage
              label="Demo"
              interactive
              className={`${isHovered ? 'scale-[1.04] bg-blue-500 drop-shadow-white' : ''}`}
              onMouseEnter={handleTopMouseEntered}
              onMouseLeave={handleTopMouseLeave}
              onClick={handleTopClick}
            />
          </div>
          {/* Right */}
          <div className="absolute top-[54%] left-[53.2%] -translate-y-1/2">
            <DiamondImage label="Skin" />
          </div>
        </div>
      </main>
      <footer className="relative">
        <div className="absolute bottom-0 left-10 flex items-center">
          <BackBtn />
        </div>
      </footer>
    </>
  );
};

export default Results;