import React, { useState, useEffect } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXturn, setIsXturn] = useState(true);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const checkWinner = () => {
      const winnerLogic = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let logic of winnerLogic) {
        const [a, b, c] = logic;
        if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
          return state[a];
        }
      }
      return null;
    };
    
    const checkDraw = () => {
      return state.every(square => square !== null);
    };

    const winnerResult = checkWinner();
    if (winnerResult) {
      setWinner(winnerResult);
    } else if (checkDraw()) {
      setWinner('draw');
    }
  }, [state]);

  const handleClick = (index) => {
    if (state[index] !== null || winner) return;
    const copyState = [...state];
    copyState[index] = isXturn ? "X" : "O";
    setState(copyState);
    setIsXturn(!isXturn);
  };

  const handleRestart = () => {
    setState(Array(9).fill(null));
    setIsXturn(true);
    setWinner(null);
  };

  return (
    <div className="board-container font-bold mt-[60px]">
      {winner ? (
        <h1 className="text-center">
          {winner === 'draw' ? (
            <span className="text-xl text-white bg-blue-500 px-2 rounded-md">
              It's a draw!
            </span>
          ) : (
            <>
            <div className="flex justify-center items-center">
            <span className="text-xl text-white bg-blue-500 px-2 rounded-md">
              {winner}
            </span>
             <span className="text-xl">{" "}won the game{" "}</span> 
            </div>
                
            </>
          )}
          <button
            className="bg-green-600 px-2 text-white py-1 mt-[10px] rounded-md"
            onClick={handleRestart}
          >
            Restart game
          </button>{" "}
        </h1>
      ) : (
        <>
          <h4 className="text-center mb-4 text-3xl">
            Player{" "}
            <span className="bg-red-400 px-2 rounded-md">
              {isXturn ? "X" : "O"}
            </span>{" "}
            please move
          </h4>
          <div className="board-row flex justify-center gap-1 ">
            <Square value={state[0]} onClick={() => handleClick(0)} />
            <Square value={state[1]} onClick={() => handleClick(1)} />
            <Square value={state[2]} onClick={() => handleClick(2)} />
          </div>
          <div className="board-row flex justify-center gap-1">
            <Square value={state[3]} onClick={() => handleClick(3)} />
            <Square value={state[4]} onClick={() => handleClick(4)} />
            <Square value={state[5]} onClick={() => handleClick(5)} />
          </div>
          <div className="board-row flex justify-center gap-1 ">
            <Square value={state[6]} onClick={() => handleClick(6)} />
            <Square value={state[7]} onClick={() => handleClick(7)} />
            <Square value={state[8]} onClick={() => handleClick(8)} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
