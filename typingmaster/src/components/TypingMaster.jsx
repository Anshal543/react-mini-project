import React from "react";
import { text } from "./text";
import { useState } from "react";
import Word from "./Word";
import Timer from "./Timer";

function TypingMaster({ data }) {
  const [text, settext] = useState(data.split(" "));
  const [input, setinput] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [correctWordsArray, setcorrectWordsArray] = useState([]);
  const [startsTime, setstartsTime] = useState(false);
  const [endsTime, setendsTime] = useState(false);

  function restartGame() {
    settext(data.split(" "));
    setinput("");
    setCurrentTextIndex(0);
    setcorrectWordsArray([]);
    setstartsTime(false);
    setendsTime(false);
  }

  function handleInput(e) {
    if (!startsTime) {
      setstartsTime(true);
    }
    const value = e.target.value;
    if (value.endsWith(" ")) {
      const word = value.trim();
      setCurrentTextIndex((prev) => prev + 1);
      setinput("");

      if (word === text[currentTextIndex]) {
        setcorrectWordsArray((prev) => [...prev, true]);
      } else {
        setcorrectWordsArray((prev) => [...prev, false]);
      }
      console.log(correctWordsArray);
    } else {
      setinput(value);
    }
  }
  // console.log(correctWordsArray);

  return (
    <div className="p-4 text-white">
      <Timer
        startsTime={startsTime}
        endsTime={setendsTime}
        correctWordsArray={correctWordsArray}
        restartGame={restartGame}
      />
      {text.map((word, index) => {
        return (
          <Word
            active={index === currentTextIndex}
            word={word}
            key={index}
            correct={correctWordsArray[index]}
          ></Word>
        );
      })}
      <input
        type="text"
        placeholder="type here..."
        value={endsTime ? "time up" : input}
        onChange={(e) => handleInput(e)}
        name=""
        id=""
        className="max-w-lg mt-20 px-16 py-4 text-black m-auto block"
        disabled={endsTime}
      />
    </div>
  );
}

export default TypingMaster;
