import BackBtn from "../components/BackBtn"
import Header from "../components/Header"

const Analysis = () => {
  return (
    <div className="w-full h-screen overflow-clip">
      <Header text="INTRO"/>
      {/* Hero Title Section */}
      <div className="w-full flex flex-col items-start ml-5 -mt-4">
        <p className="text-gray-800 text-[9px] font-roobertTrial font-semibold uppercase">a.i. analysis</p>
        <h1 className="text-[40px] leading-11 tracking-tight font-roobertTrial text-gray-900  uppercase">demographics</h1>
        <p className="text-gray-800 text-[8px] font-roobertTrial uppercase">predicted race & age</p>
      </div>
      <section className="w-full h-[57vh] flex justify-center items-center mt-12 overflow-x-clip">
        <div className="w-full h-full flex gap-2 ">
          {/* Column 1 */}
          <div className="w-[208px] h-full bg-[#F3F3F4] flex items-center justify-center ml-4 gap-2 border-t-1 border-black-200">
            <span className="text-blue-800">Column 1</span>
          </div>
          {/* Column 2 */}
          <div className="w-[1168px] h-full bg-[#F3F3F4] flex items-center justify-center border-t-1 border-black-200">
            <span className="text-green-800">Column 2</span>
          </div>
          {/* Column 3 */}
          <div className="w-[430px] h-full mr-4 bg-[#F3F3F4] flex items-center justify-center border-t-1 border-black-200">
            <span className="text-yellow-800">Column 3</span>
          </div>
        </div>
      </section>

      <footer className="relative">
        <div className="absolute -bottom-12.25 left-4.5 flex items-center">
          <BackBtn />
        </div>
      </footer>
    </div>
  )
}

export default Analysis