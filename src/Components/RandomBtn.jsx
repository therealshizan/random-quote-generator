import React from "react";
import { ImLoop2 } from "react-icons/im";

const RandomBtn = ({onClick, randomCount}) => {
  return (
    <div className="randomBtn">
      <button onClick={onClick}>
        random <ImLoop2/>
        {randomCount}
      </button>
    </div>
  );
};

export default RandomBtn;
