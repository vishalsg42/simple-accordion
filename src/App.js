import React from "react";
import Accordian from "./components/Accordian";

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

const App = () => {
  return (
    <div className="ui container">
      <br />
      <Accordian items={items} />
    </div>
  );
};

export default App;