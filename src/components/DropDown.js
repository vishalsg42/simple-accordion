import React, { useState, useEffect, useRef } from "react";

const DropDown = (props) => {
  const [open, setOpen] = useState(false);
  const refForm = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (refForm.current && refForm.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
      console.log("unmount");
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const renderedOptions = props.options.map((item) => {
    if (props.selectedOption.value === item.value) {
      return null;
    } else {
      return (
        <div
          className="item"
          key={item.value}
          onClick={() => props.onSelectOption(item)}
        >
          {" "}
          {item.label}
        </div>
      );
    }
  });
  // return <select className="ui dropdown">{renderedOptions}</select>;
  return (
    <div className="ui form" ref={refForm}>
      <div className="field">
        <div className="label">Select a Color</div>
        <div
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
          onClick={(e) => setOpen(!open)}
          onBlur={() => setOpen(false)}
        >
          <i className="dropdown icon"></i>
          <div className="text">{props.selectedOption.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
