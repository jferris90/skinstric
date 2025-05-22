import React from 'react'

const SexCard = ({ title }) => {
   // Get API response from localStorage
  const apiData = JSON.parse(localStorage.getItem('skinstricApiResponse'));
  let topSex = '';
  let topValue = 0;

  if (apiData && apiData.gender) {
    for (const [sex, value] of Object.entries(apiData.gender)) {
      if (value > topValue) {
        topSex = sex;
        topValue = value;
      }
    }
  }

  // If a title prop is provided (selected), use it, otherwise use topSex
  const displaySex = title && title !== "SEX" ? title : topSex;

  return (
    <div className="bg-[#F3F3F4] w-full h-20 border-t-1 border-black-200 max-w-xs flex flex-col p-2 items-start justify-between">
      {displaySex ? (
        <span className="text-[9px] uppercase font-semibold text-black">{displaySex}</span>
      ) : (
        <span className="text-gray-500">No sex data available</span>
      )}
      <span className="text-[10px] font-bold">SEX</span>
    </div>
  )
}

export default SexCard