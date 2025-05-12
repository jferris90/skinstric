const Header = () => {
  return (
    <nav className="bg-white shadow-md position-relative">
      <div className="flex justify-between items-center h-[64px] px-4">
        <div className="flex items-center space-x-4 scale-50 absolute left-[-15px] top-[5px]">
          <a className="text-md text-black font-semibold" href="#">skinstric</a>
          <p className="text-gray-500 text-[13px] font-semibold"><span className="text-[16px]">[</span> INTRO <span className="text-[16px]">]</span></p>
        </div>
        <div className="absolute right-[-20px] top-[-2px]">
          <button className="uppercase bg-black text-white px-4 py-2 hover:bg-gray-800 scale-40">
            Enter Code
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header