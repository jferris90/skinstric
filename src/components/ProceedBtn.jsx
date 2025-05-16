import { Link } from 'react-router-dom';

const ProceedBtn = () => {
  return (
    <Link to="/upload">
            <button className="uppercase flex items-center gap-3 font-semibold text-[8px] cursor-pointer">
                <span>Proceed</span>
                <img
                src="/buttin-icon-shrunk.png"
                alt="Proceed Icon"
                className="w-8 h-8 hover:scale-110 transition-all duration-300 ease-in-out"
                />
            </button>
          </Link>
  );
};

export default ProceedBtn