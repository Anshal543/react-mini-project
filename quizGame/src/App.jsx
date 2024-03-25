import "./App.css";
import { useContext, useState } from "react";
import { UserContext } from "./components/UserContext";
import { useNavigate } from "react-router-dom";

function App() {
  const navigation = useNavigate();
  const { currentQuestionIndex, setCurrentQuestionIndex, score, setScore,quizQuestions } =
    useContext(UserContext);

  const [selectedOption, setSelectedOption] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [questions, setQuizQuestions] = useState(quizQuestions);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleAnswer = () => {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedOption.toLowerCase() === correctAnswer.toLowerCase()) {
      setScore(score + 1);
    }
    nextQuestion();
  };

  const nextQuestion = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption("");
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="container bg-white p-[20px] rounded-2xl">
      <h1 className="text-black font-bold text-4xl text-center mb-3">
        Quiz Game
      </h1>
      <button
        onClick={() => navigation("/admin")}
        className="text-black ml-[80%] bg-green-400 rounded p-2"
      >
        Add Question
      </button>
      {showResult ? (
        <div className="text-center">
          <h2 className="text-black">
            Your Score: {score} out of {questions.length}
          </h2>
          <button
            className="btn bg-green-600 text-white text-2xl py-2 px-4 rounded-md cursor-pointer mt-3"
            onClick={resetQuiz}
          >
            Play Again
          </button>
        </div>
      ) : (
        <>
          <h5 id="questionNo" className="ml-3 font-semibold">
            Question {currentQuestionIndex + 1}
          </h5>
          <h2
            id="question"
            className="text-black font-bold text-2xl mb-[35px] pl-[10px]"
          >
            {questions[currentQuestionIndex].question}
          </h2>
          <div className="options">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <div key={index} className="mb-2 bg-blue-700 py-4 text-white">
                <input
                  type="radio"
                  id={option}
                  name="options"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleOptionSelect(option)}
                />
                <label htmlFor={option} className="ml-2">
                  {option}
                </label>
              </div>
            ))}
          </div>
          <div
            id="Submit"
            className="bg-green-600 text-white py-2 px-4 rounded-md cursor-pointer inline-block hover:bg-green-500"
            onClick={handleAnswer}
          >
            Submit
          </div>
        </>
      )}
    </div>
  );
}

export default App;
