import AgeCard from "../components/AgeCard"
import BackBtn from "../components/BackBtn"
import Header from "../components/Header"
import RaceCard from "../components/RaceCard"
import SexCard from "../components/SexCard"
import PercentCard from "../components/PercentCard"
import { useState } from "react"

const Analysis = () => {
  const [showAllRaces, setShowAllRaces] = useState(false);
  const [showAllAges, setShowAllAges] = useState(false);
  const [showAllSex, setShowAllSex] = useState(false);

  // Track selected key for each card type
  const [selectedRace, setSelectedRace] = useState(null);
  const [selectedAge, setSelectedAge] = useState(null);
  const [selectedSex, setSelectedSex] = useState(null);

  // Get all data from localStorage
  const apiData = JSON.parse(localStorage.getItem('skinstricApiResponse'));
  const allRaces = apiData && apiData.race
    ? Object.entries(apiData.race)
    : [];
  // Use the same rearrangement as AgeCard for allAges
  let allAges = apiData && apiData.age
    ? Object.entries(apiData.age)
    : [];
  if (allAges.length > 5) {
    const [item] = allAges.splice(5, 1);
    allAges.unshift(item);
  }
  if (allAges.length > 0) {
    const [lastItem] = allAges.splice(-1, 1);
    allAges.unshift(lastItem);
  }
  if (allAges.length > 5) {
    const [item] = allAges.splice(5, 1);
    allAges.splice(2, 0, item);
  }
  const allSex = apiData && apiData.gender
    ? Object.entries(apiData.gender)
    : [];

  // Determine which data to show in column 3
  let percentTitle = "";
  let percentData = [];
  let cardTitleRace = "RACE";
  let cardTitleAge = "AGE";
  let cardTitleSex = "SEX";
  let selectedKey = null;

  if (showAllRaces) {
    percentTitle = "RACE";
    percentData = allRaces;
    cardTitleRace = selectedRace || "RACE";
    selectedKey = selectedRace;
  }
  if (showAllAges) {
    percentTitle = "AGE";
    percentData = allAges;
    cardTitleAge = selectedAge || "AGE";
    selectedKey = selectedAge;
  }
  if (showAllSex) {
    percentTitle = "SEX";
    percentData = allSex;
    cardTitleSex = selectedSex || "SEX";
    selectedKey = selectedSex;
  }

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
          <div className="w-[208px] h-full flex flex-col items-center justify-start ml-4 gap-2 border-t-1 border-black-200">
            <div
              onClick={() => {
                setShowAllRaces(true);
                setShowAllAges(false);
                setShowAllSex(false);
              }}
              className="w-full cursor-pointer"
            >
              <RaceCard title={cardTitleRace} />
            </div>
            <div
              onClick={() => {
                setShowAllAges(true);
                setShowAllRaces(false);
                setShowAllSex(false);
              }}
              className="w-full cursor-pointer"
            >
              <AgeCard title={cardTitleAge} />
            </div>
            <div
              onClick={() => {
                setShowAllSex(true);
                setShowAllRaces(false);
                setShowAllAges(false);
              }}
              className="w-full cursor-pointer"
            >
              <SexCard title={cardTitleSex} />
            </div>
          </div>
          {/* Column 2 */}
          <div className="w-[1168px] h-full bg-[#F3F3F4] flex items-center justify-center border-t-1 border-black-200">
            <span className="text-green-800">Column 2</span>
          </div>
          {/* Column 3 */}
          <div className="w-[430px] h-full mr-4 bg-[#F3F3F4] flex items-center justify-center border-t-1 border-black-200 relative">
            {/* "A.I. Confidence" label in the top right */}
            <div className="absolute top-2 right-4 text-[9px] font-semibold text-black font-roobertTrial uppercase tracking-tight">
              A.I. Confidence
            </div>
            {/* PercentCard title in the top left */}
            {percentData.length > 0 && (
              <div className="absolute top-2 left-2 text-[9px] font-semibold text-black font-roobertTrial uppercase">
                {percentTitle}
              </div>
            )}
            {percentData.length > 0 ? (
              <div className={`w-full flex flex-col items-center font-roobertTrial justify-center tracking-normal leading-[1px] ${showAllAges ? "-mt-[36%]" : showAllRaces ? "-mt-[65%] -ml-[4px]" : showAllSex ?"-mt-[135%] uppercase" : ""}`}>
                <PercentCard
                  title={null}
                  data={percentData}
                  selectedKey={selectedKey}
                  onSelect={key => {
                    if (showAllRaces) setSelectedRace(key);
                    if (showAllAges) setSelectedAge(key);
                    if (showAllSex) setSelectedSex(key);
                  }}
                />
              </div>
            ) : (
              <span className="text-yellow-800">Column 3</span>
            )}
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