import Header from '../components/Header'
import BackBtn from '../components/BackBtn';
import InfoBox from '../components/InfoBox';

const Info = () => {
  return (
   <div className="">
      <Header text="INTRO" />
      <div className="absolute top-9 left-5 text-[7px] font-bold font-roobertTrial uppercase">
        To <span className="text-[6px]">S</span>tart Analysis
      </div>
      <main className="flex justify-center items-center h-[85vh] w-full bg-white relative">
        <div className="relative flex justify-center items-center">
          <img
            src="/Rectangle 2780.png"
            className="absolute top-1/2 left-1/2 w-58 h-auto transform -translate-x-1/2 -translate-y-[67%] scale-200 z-10 animate-spin1"
            alt="Rectangle 2780"
          />
          <img
            src="/Rectangle 2781.png"
            className="absolute top-1/2 left-1/2 w-52 h-auto transform -translate-x-1/2 -translate-y-[67%] scale-200 z-20 animate-spin2"
            alt="Rectangle 2781"
          />
          <img
            src="/Rectangle 2782.png"
            className="absolute top-1/2 left-1/2 w-46 h-auto transform -translate-x-1/2 -translate-y-[67%] scale-200 z-30 animate-spin3"
            alt="Rectangle 2782"
          />
          <div className="relative z-40 flex justify-center items-center w-full h-full">
            <InfoBox />
          </div>
        </div>
      </main>
      <footer className="relative">
        <div className="absolute -bottom-7 left-5 flex items-center">
          <BackBtn />
        </div>
      </footer>
    </div>
  )
}

export default Info