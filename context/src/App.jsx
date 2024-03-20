import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { UserContext } from "./contexts/UserContext";
import { useContext } from "react";

function App() {
  const { user, setUser } = useContext(UserContext);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const handleButton = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>

      <input
        onChange={(e) => setusername(e.target.value)}
        value={username}
        type="text"
        name=""
        id="1"
      />{" "}

    
      <input
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        type="password"
        name=""
        id="2"
      />
      <button onClick={handleButton}>click me</button>
{(user) ? (<h1>{user.username} logged in</h1>) : (<h1>Please log in first</h1>)}
</div>

  );
}

export default App;
