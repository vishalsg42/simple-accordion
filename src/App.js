import React, { useRef, useState } from "react";
import Accordian from "./components/Accordian";
import ButtonExcercise from "./components/ButtonExcercise";
import SearchWidget from "./components/SearchWidget";
import DropDownWidget from "./components/DropDown";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is React",
    content: "A JavaScript library for building user interfaces",
  },
  {
    title: "Why is React?",
    content: "React makes it painless to create interactive UIs.",
  },
  {
    title: "How do you use React?",
    content: "You use react by using creating components",
  },
];

const dropdownOptions = [
  {
    label: "The color of Red",
    value: "red",
  },
  {
    label: "Shade of Blue",
    value: "blue",
  },
  {
    label: "The of Green",
    value: "green",
  },
];

const App = () => {
  const [selectedColor, setSelectedColor] = useState(dropdownOptions[0]);
  const [toggleDropdown, setToggleDropdown] = useState(true);
  return (
    <div className="ui container">
      <br />
      {/* <Accordian items={items} /> */}
      {/* <ButtonExcercise /> */}
      {/* <SearchWidget /> */}
      {/* {toggleDropdown ? (
        <DropDownWidget
          selectedOption={selectedColor}
          onSelectOption={setSelectedColor}
          options={dropdownOptions}
        />
      ) : (
        ""
      )} */}
      {/* <DropDownWidget
        selectedOption={selectedColor}
        onSelectOption={setSelectedColor}
        options={dropdownOptions}
      /> */}
      <Translate />
    </div>
  );
};

export default App;
