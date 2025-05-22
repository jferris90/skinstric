const PercentCard = ({ title, data, selectedKey, onSelect }) => {
  return (
    <div className="w-full max-w-xs flex flex-col items-center justify-between">
      <div className="w-full flex flex-col">
        {data.map(([key, value]) => (
          <div
            key={key}
            className={`w-full flex flex-row justify-between items-center text-[9px] capitalize mb-1 py-2.75 font-roobertTrial cursor-pointer
              ${selectedKey === key ? "bg-black text-white" : "text-black"}
              ${selectedKey !== key ? "hover:bg-gray-300" : ""}
            `}
            onClick={() => onSelect && onSelect(key)}
          >
            <span className="flex items-center gap-1 ml-3">
              {/* Small empty diamond shape */}
              <span className="inline-block w-1.25 h-1.25 border border-current rotate-45 mr-1"></span>
              {key}
            </span>
            <span className="mr-2">{(value * 100).toFixed(0)}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PercentCard








// import { useState } from "react";

// const PercentCard = ({ title, data }) => {
//     const [isHovered, setIsHovered] = useState(false);
//     const [isClicked, setIsClicked] = useState(false);


//   return (
//     <div className="w-full max-w-xs flex flex-col -mt-38 items-center justify-between">
//       <div className="w-full flex flex-col  gap-1">
//         {data.map(([key, value]) => (
//           <div
//             key={key}
//             className={`w-full flex flex-row justify-between items-center text-[9px] capitalize mb-1 py-1 text-black font-roobertTrial cursor-pointer ${isHovered ? " hover:bg-gray-300" : null}`}
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             <span className="flex items-center gap-1 ml-3">
//               {/* Small empty diamond shape */}
//               <span className="inline-block w-1 h-1 scale-140 border border-black rotate-45 mr-1"></span>
//               {key}
//             </span>
//             <span className="mr-2">{(value * 100).toFixed(0)}%</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default PercentCard