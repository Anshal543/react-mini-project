import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "./UserContext";

const Update = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { todos, setTodos } = useContext(UserContext);
  const initialText =
    todos.find((todo) => todo.id === parseInt(id))?.text || "";
  const [input, setInput] = useState(initialText);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };


  const handleUpdate = () => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === parseInt(id)) {
        return { ...todo, text: input };
      }
      return todo;
    });

    setTodos(updatedTodos);
    navigate("/");
  };

  return (
    <div className="text-center mt-6">
      <h1 className="text-4xl font-bold mb-4">Update Todo</h1>
      <input
        value={input}
        onChange={handleInputChange}
        className="border border-gray-800 px-6 py-2 mb-4 mr-2 rounded-md"
        type="text"
      />
      <button
        onClick={handleUpdate}
        className="bg-green-500 text-black p-2 rounded-md"
      >
        Update
      </button>
    </div>
  );
};

export default Update;
