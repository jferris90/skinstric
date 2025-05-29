import { Link } from 'react-router-dom';

const HomeBtn = () => {
  return (
    <Link to="/">
            <button className="uppercase flex items-center gap-3 font-semibold text-[8px] cursor-pointer">
                <span>home</span>
                <img
                src="/buttin-icon-shrunk.png"
                alt="Back Icon"
                className="w-8 h-8 hover:scale-110 transition-all duration-300 ease-in-out"
                />
            </button>
          </Link>
  )
}

export default HomeBtn