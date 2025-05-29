const SelectedLabel = ({ selectedRace, selectedAge, selectedSex, selectedCard }) => {
  let label = "";
  if (selectedCard === "race" && selectedRace) label = selectedRace;
  else if (selectedCard === "age" && selectedAge) label = selectedAge + " y.o.";
  else if (selectedCard === "sex" && selectedSex) label = selectedSex;
  else label = "";

  return (
    <span className="text-[22px] font-roobertTrial capitalize text-black">
      {label}
    </span>
  );
};

export default SelectedLabel;