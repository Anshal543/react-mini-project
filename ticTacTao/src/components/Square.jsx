import React from "react";

const Square = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="square border border-solid px-4 py-2 border-black h-[100px] w-[100px] flex justify-center items-center"
    >
      <h5>{props.value}</h5>
    </div>
  );
};

export default Square;
