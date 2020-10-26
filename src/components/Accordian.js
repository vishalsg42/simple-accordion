import React, { useState } from 'react';

const Accordian = ({ items }) => {

  let [activeIndex, setActiveIndex] = useState(null);
  const onTitleClick = (index) => {
    setActiveIndex(index);
  }


  const renderedItem = items.map((item, index) => {
    const isActive = index === activeIndex ? 'active': '';
    return (
      <React.Fragment key={index}>
        <div className={`title ${isActive}`} onClick={(e) => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${isActive}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    )
  })
  return (
    <div>
      <div className="ui styled fluid accordion">
        {renderedItem}
      </div>
      <h1>{activeIndex}</h1>
    </div>
  )

}

export default Accordian;
