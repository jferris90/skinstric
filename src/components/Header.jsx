const Header = ({ text }) => {
  return (
    <nav className="bg-white position-relative w-full">
      <div className="flex justify-between items-center h-[64px]">
        <div className="flex items-center space-x-4 scale-50 absolute left-[-15px] top-[6px]">
          <a className="text-[13px] text-black font-roobertTrial font-bold" href="/"><span className="text-[11px]">S</span>KIN<span className="text-[11px]">S</span>TRIC</a>
          <p className="text-gray-500 text-[13px] font-semibold"><span className="text-[16px]">[</span> {text} <span className="text-[16px]">]</span></p>
        </div>
        <div className="absolute right-[0px] top-[-2px] ">
          <button className="uppercase bg-black text-white text-[12px] font-roobertTrial font-semibold px-4 py-3 hover:bg-gray-800 scale-40 mt-[-2px] mr-[-17px]">
            Enter Code
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header