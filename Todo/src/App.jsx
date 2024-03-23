import { useContext, useState } from "react";
import "./App.css";
import { UserContext } from "./components/UserContext";
import { useNavigate } from "react-router-dom";

function App() {
  const [input, setInput] = useState("");
  const { todos, setTodos } = useContext(UserContext);
  const navigate = useNavigate();
  const addTask = () => {
    setTodos([...todos, { id: Date.now(), text: input, isCompleted: false }]);
    setInput("");
  };

  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  const handleDone = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const handleRemove = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  return (
    <>
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-grey-darkest">Todo List</h1>
            <div className="flex mt-4">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                placeholder="Add Todo"
              />
              <button
                onClick={addTask}
                className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:font-bold hover:bg-teal"
              >
                Add
              </button>
            </div>
          </div>
          <div>
            {todos.map((todo) => (
              <div key={todo.id} className="flex mb-4 items-center">
                <p
                  className={`w-full text-grey-darkest ${
                    todo.isCompleted ? "line-through" : ""
                  }`}
                >
                  {todo.text}
                </p>
                <button
                  onClick={() => handleUpdate(todo.id)}
                  className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:font-bold text-green border-green hover:bg-green"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDone(todo.id)}
                  className={`flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:font-bold text-green border-green hover:bg-green ${
                    todo.isCompleted ? "line-through" : ""
                  }`}
                >
                  {todo.isCompleted ? "Undo" : "Done"}
                </button>

                <button
                onClick={() => {handleRemove(todo.id)}}
                 className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:font-bold hover:bg-red">
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
