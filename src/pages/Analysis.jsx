import AgeCard from "../components/AgeCard"
import BackBtn from "../components/BackBtn"
import Header from "../components/Header"
import RaceCard from "../components/RaceCard"
import SexCard from "../components/SexCard"
import PercentCard from "../components/PercentCard"
import { useState, useEffect } from "react"
import HomeBtn from "../components/HomeBtn"
import RadialCircle from "../components/RadialCircle"
import SelectedLabel from "../components/SelectedLabel"

const Analysis = () => {
  const [showAllRaces, setShowAllRaces] = useState(true);
  const [showAllAges, setShowAllAges] = useState(false);
  const [showAllSex, setShowAllSex] = useState(false);

  // Track selected key for each card type
  const [selectedRace, setSelectedRace] = useState(null);
  const [selectedAge, setSelectedAge] = useState(null);
  const [selectedSex, setSelectedSex] = useState(null);
  const [selectedCard, setSelectedCard] = useState("race");
  
  const [raceClicked, setRaceClicked] = useState(true);
  const [ageClicked, setAgeClicked] = useState(false);
  const [sexClicked, setSexClicked] = useState(false);

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

  if (selectedCard === "race") {
    percentTitle = "RACE";
    percentData = allRaces;
    cardTitleRace = selectedRace || "RACE";
    selectedKey = selectedRace;
  }
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

  // Set selectedRace to the race with the highest % value on mount
  useEffect(() => {
    if (allRaces.length > 0) {
      const [topRace] = [...allRaces].sort((a, b) => b[1] - a[1]);
      setSelectedRace(topRace[0]);
    }
  }, []);

  // Set selectedAge to the age with the highest % value on mount
  useEffect(() => {
    if (allAges.length > 0) {
      const [topAge] = [...allAges].sort((a, b) => b[1] - a[1]);
      setSelectedAge(topAge[0]);
    }
  }, []);

  // Set selectedSex to the highest % value on mount
  useEffect(() => {
    if (allSex.length > 0) {
      const [topSex] = [...allSex].sort((a, b) => b[1] - a[1]);
      setSelectedSex(topSex[0]);
    }
  }, []);

  // Display selected percent in radial circle, or top race percent by default
  let radialPercent = 0;
    if (selectedKey && percentData.length > 0) {
      const found = percentData.find(([key]) => key === selectedKey);
      if (found) {
        radialPercent = found[1] * 100;
      }
    } else if (allRaces.length > 0) {
      radialPercent = Math.max(...allRaces.map(([_, value]) => value)) * 100;
  }

  return (
    <div className="w-full h-screen overflow-clip">
      <Header text="INTRO"/>
      {/* Hero Title Section */}
      <div className="w-full flex flex-col items-start ml-5 -mt-4">
        <p className="text-gray-800 text-[18px] font-roobertTrial font-semibold uppercase">a.i. analysis</p>
        <h1 className="text-[60px] leading-11 tracking-tight font-roobertTrial text-gray-900  uppercase">demographics</h1>
        <p className="text-gray-800 text-[16px] font-roobertTrial uppercase">predicted race & age</p>
      </div>
      <section className="w-full h-[57vh] flex justify-center items-center mt-12 overflow-x-clip">
        <div className="w-full h-full flex gap-2 ">
          {/* Column 1 */}
          <div className="w-1/8 h-full flex flex-col items-center justify-start ml-4 gap-2 border-t-1 border-black-200">
            <div
              onClick={() => {
                setShowAllRaces(true);               
                setShowAllAges(false);
                setShowAllSex(false);
                setRaceClicked(true);
                setAgeClicked(false);
                setSexClicked(false);
                setSelectedCard("race");
              }}
              className="w-full cursor-pointer"
              id="race__card"
            >
              <RaceCard title={selectedRace ||cardTitleRace} isClicked={raceClicked} />
            </div>
            <div
              onClick={() => {
                setShowAllAges(true);
                setShowAllRaces(false);
                setShowAllSex(false);
                setRaceClicked(false);
                setAgeClicked(true);
                setSexClicked(false);
                setSelectedCard("age");
                
              }}
              className="w-full cursor-pointer"
              id="age__card"
            >
              <AgeCard title={selectedAge || cardTitleAge} isClicked={ageClicked} />
            </div>
            <div
              onClick={() => {
                setShowAllSex(true);
                setShowAllRaces(false);
                setShowAllAges(false);
                setRaceClicked(false);
                setAgeClicked(false);
                setSexClicked(true);
                setSelectedCard("sex");
                
              }}
              className="w-full cursor-pointer"
              id="sex__card"
            >
              <SexCard title={selectedSex ||cardTitleSex} isClicked={sexClicked} />
            </div>
          </div>
          {/* Column 2 */}
          <div className="w-4/6 h-full bg-[#F3F3F4] flex flex-col justify-between border-t-1 border-black-200 relative">
            <div className="ml-4 mt-2">
              <SelectedLabel
                selectedRace={selectedRace}
                selectedAge={selectedAge}
                selectedSex={selectedSex}
                selectedCard={selectedCard}
              />
            </div>
            <div className="absolute bottom-2 right-4">
              <RadialCircle percent={radialPercent} size={400} color="#000" />
            </div>
          </div>
          {/* Column 3 */}
          <div className="w-1/5 h-full mr-4 bg-[#F3F3F4] flex items-center justify-center border-t-1 border-black-200 relative">
            {/* "A.I. Confidence" label in the top right */}
            <div className="absolute top-2 right-4 text-[18px] font-semibold text-black font-roobertTrial uppercase tracking-tight">
              A.I. Confidence
            </div>
            {/* PercentCard title in the top left */}
            {percentData.length > 0 && (
              <div className="absolute top-2 left-2 text-[18px] font-semibold text-black font-roobertTrial uppercase">
                {percentTitle}
              </div>
            )}
            {percentData.length > 0 && (
              <div className={`w-full flex flex-col items-center font-roobertTrial justify-center tracking-normal leading-[1px] ${showAllAges ? "-mt-[100%]" : showAllRaces || selectedCard === "race" ? "-mt-[120%] -ml-[4px]" : showAllSex ?"-mt-[160%] uppercase" : ""}`}>
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
            )}
          </div>
        </div>
      </section>

      <footer className="relative">
        <div className="absolute -bottom-24.5 left-9 flex items-center">
          <BackBtn />
        </div>
        <div className="absolute -bottom-24.5 right-9 flex items-center">
          <HomeBtn />
        </div>
      </footer>
    </div>
  )
}

export default Analysis