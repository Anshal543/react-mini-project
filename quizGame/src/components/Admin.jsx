import React, { useState, useContext } from "react";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const { addQuestion } = useContext(UserContext);
  const navigation = useNavigate();

  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  // Update this function to handle changes in the number of options
  const handleOptionChange = (index, value, e) => {
    // If a new option is added, update the options state and prevent the default behavior
    if (options.length - 1 < index && e.target.value !== "") {
      setOptions(options.concat(e.target.value ? e.target.value : ""));
    } else {
      const newOptions = [...options];
      newOptions[index] = value;
      setOptions(newOptions);
    }
  };

  // Add a new function to handle adding new options
  const addOption = (e) => {
    e.preventDefault();
    setOptions(options.concat(""));
  };

  // Update the handleSubmit function to ensure the correct number of options (4)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question || options.some((option) => !option) || !correctAnswer) {
      alert("Please fill in all fields");
      return;
    }
    // Create a new question object
    const newQuestion = {
      question,
      options,
      answer: correctAnswer,
    };
    // Add the question to the context
    addQuestion(newQuestion);
    // Clear the form
    setQuestion("");
    setOptions(["", "", "", ""]);
    setCorrectAnswer("");
    navigation("/");
  };

  return (
    <div className="">
      <h2 className="text-6xl mb-4">Add Question</h2>
      <form onSubmit={handleSubmit}>
        <div className="m-2">
          <label className="mr-2">Question:</label>{" "}
          <input
            className="p-4 rounded-md w-[60%]"
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <div className="options-container">
          {/* Add a button to add new options */}
          <button className="m-4" onClick={addOption}>
            Add Option
          </button>
          {options.map((option, index) => (
            <div className="flex" key={index}>
              <input
                className="p-4 m-4 rounded-md w-[20%]"
                key={index}
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value, e)}
              />
            </div>
          ))}
        </div>
        <div>
          <label className="mr-2 bg-red-500 p-4 rounded-md">
            Correct Answer:
          </label>{" "}
          <input
            className="p-4 rounded-md w-[20%] mt-9"
            type="text"
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
          />
        </div>
        <button className="mt-4" type="submit">
          Add Question
        </button>
      </form>
    </div>
  );
};

export default Admin;