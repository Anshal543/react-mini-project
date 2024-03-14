import React, { useState, useRef, useEffect } from "react";

function Timer({ startsTime, endsTime, correctWordsArray }) {
  const [currentTime, setcurrentTime] = useState(10);
  const interval = useRef(null);
  useEffect(() => {
    if (startsTime) {
      if (currentTime > 0) {
        interval.current = setInterval(() => {
          setcurrentTime((prev) => prev - 1);
        }, 1000);
      } else {
        endsTime(true);
        clearInterval(interval.current);
      }
    }
    return () => {
      clearInterval(interval.current);
    };
  }, [startsTime, currentTime]);
  function calculateWPM() {
    const correctWords = correctWordsArray.filter(
      (word) => word === true
    ).length;
    const wpm = (correctWords / 10) * 60;
    return wpm;
  }

  return (
    <div className="text-4xl font-bold mb-4 ml-[40%]">
      {currentTime == 0 ? (
        <div>WPM:{calculateWPM()}</div>
      ) : (
        <div> Timer:{currentTime}</div>
      )}
    </div>
  );
}

export default Timer;