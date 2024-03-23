import { createContext,useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: Date.now(), text: "anshal", isCompleted: false },
  ]);
  return (
    <UserContext.Provider value={{ todos, setTodos }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
