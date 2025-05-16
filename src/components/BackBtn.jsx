import React from 'react'
import { Link } from 'react-router-dom'

const BackBtn = () => {
  return (
    <Link to="/">
            <button className="uppercase flex items-center gap-3 font-semibold text-[8px] cursor-pointer">
                <img
                src="/buttin-icon-shrunk (1).png"
                alt="Back Icon"
                className="w-8 h-8 hover:scale-110 transition-all duration-300 ease-in-out"
                />
                <span>back</span>
            </button>
          </Link>
  )
}

export default BackBtn