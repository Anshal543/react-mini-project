import React, { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [quizQuestions, setQuizQuestions] = useState([
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      answer: "Paris",
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4",
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: [
        "Jane Austen",
        "William Shakespeare",
        "Charles Dickens",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "CO2", "O2", "NaCl"],
      answer: "H2O",
    },
    {
      question: "What is the tallest mammal?",
      options: ["Elephant", "Giraffe", "Horse", "Kangaroo"],
      answer: "Giraffe",
    },
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const addQuestion = (question) => {
    setQuizQuestions([...quizQuestions, question]);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setScore(0);
  };

  return (
    <UserContext.Provider
      value={{
        quizQuestions,
        setQuizQuestions,
        currentQuestionIndex,
        setCurrentQuestionIndex,
        userAnswers,
        setUserAnswers,
        score,
        setScore,
        addQuestion,
        resetQuiz,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
