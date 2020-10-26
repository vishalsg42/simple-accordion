import React, { useState } from "react";

const ButtonExcercise = () => {
  let [count, setCount] = useState(0);

  const onButtonClick = () => {
    count += 1;
    setCount(count);
  };

  return (
    <div className="ui segment">
      <button className="ui button" onClick={() => onButtonClick()}>
        Click Me
      </button>
      <button className="ui button" onClick={() => setCount(0)}>
        Reset
      </button>
      <h1>Click Me {count}</h1>
    </div>
  );
};

export default ButtonExcercise;
