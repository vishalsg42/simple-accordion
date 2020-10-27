import React, { useState } from "react";
import ConvertLanguage from "./Convert";
import DropDownWidget from "./DropDown";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Dutch",
    value: "nl",
  },
];

const Translate = () => {
  const [selectedLanguage, onSelectedLanguage] = useState(options[0]);
  const [text, setText] = useState("");


  return (
    <div>
      <div className="ui form">
        <div className="ui fluid field">
          <label>Enter text</label>
          <input
            type="text"
            className="ui "
            placeholder="Enter text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <DropDownWidget
        selectedOption={selectedLanguage}
        onSelectOption={onSelectedLanguage}
        options={options}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <ConvertLanguage text={text} language={selectedLanguage} />
    </div>
  );
};

export default Translate;
