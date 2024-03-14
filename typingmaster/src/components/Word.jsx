import React, { memo } from "react";

function Word({ word, active, correct }) {
  if (correct) {
    return <span className="bg-green-800">{word}{" "}</span>;
  }
  if (correct === false) {
    return <span className="bg-red-800">{word}{" "}</span>;
  }
  if (active) {
    return <b className="font-extrabold">{word}</b>;
  }
  return <span> {word}</span>;
}

export default memo(Word);
