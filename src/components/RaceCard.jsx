import React from 'react'

const RaceCard = ({ title }) => {
   // Get API response from localStorage
  const apiData = JSON.parse(localStorage.getItem('skinstricApiResponse'));
  // Find the highest value race
  let topRace = '';
  let topValue = 0;

  if (apiData && apiData.race) {
    for (const [race, value] of Object.entries(apiData.race)) {
      if (value > topValue) {
        topRace = race;
        topValue = value;
      }
    }
  }

  const displayRace = title && title !== "RACE" ? title : topRace;

  return (
    <div className="bg-[#F3F3F4] w-full h-20 p-2 flex flex-col items-start justify-between">
      {displayRace ? (
        <span className="text-[9px] font-bold text-black uppercase">{displayRace}</span>
      ) : (
        <span className="text-gray-500">No race data available</span>
      )}
      <span className="text-[10px] uppercase font-semibold">RACE</span>
    </div>
  )
}

export default RaceCard