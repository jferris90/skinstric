import React from 'react'
const AgeCard = ({ title }) => {
  // Retrieve age data from localStorage and convert to array
  const apiData = JSON.parse(localStorage.getItem('skinstricApiResponse'));
  const ageArray = apiData && apiData.age
    ? Object.entries(apiData.age)
    : [];

    if (ageArray.length > 5) {
    const [item] = ageArray.splice(5, 1);
    ageArray.unshift(item);
  }
  if (ageArray.length > 0) {
    const [lastItem] = ageArray.splice(-1, 1);
    ageArray.unshift(lastItem);
  }
  if (ageArray.length > 5) {
    const [item] = ageArray.splice(5, 1);
    ageArray.splice(2, 0, item);
  }
    console.log(ageArray);

  let topAge = '';
  let topValue = 0;
  for (const [age, value] of ageArray) {
    if (value > topValue) {
      topAge = age;
      topValue = value;
    }
  }

  // If a title prop is provided (selected), use it, otherwise use topAge
  const displayAge = title && title !== "AGE" ? title : topAge;
  return (
    <div className="bg-[#F3F3F4] w-full h-20 border-t-1 border-black-200 max-w-xs flex p-2 flex-col items-start justify-between">
      {displayAge ? (
        <span className="text-[9px] font-semibold text-black">{displayAge}</span>
      ) : (
        <span className="text-gray-500">No age data available</span>
      )}
      <span className="text-[10px] uppercase font-semibold">AGE</span>
    </div>
  )
}

export default AgeCard