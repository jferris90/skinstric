

const InfoBox = () => {
  return (
    <div className="flex flex-col items-center -mt-[97px]">
      <label htmlFor="userInput" className="text-[8px] text-[#1A1B1C] uppercase tracking-wide">
        click to type
      </label>
      <input
        id="userInput"
        type="text"
        className="px-3 py-2 w-68 h-10 text-[31px] focus:outline-none decoration-1 underline underline-offset-[5px] under text-center"
        placeholder="Introduce Yourself"
      />
    </div>
  )
}

export default InfoBox