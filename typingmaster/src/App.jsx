import TypingMaster from "./components/TypingMaster";
import Tab from "./components/Tab";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setdata] = useState();
  const [loading, setloading] = useState(false)
  useEffect(() => {
    const getText = async () => {
      setloading(true)
      const res = await fetch(
        "https://baconipsum.com/api/?type=all-meat&paras=5&format=json"
      );
      const data = await res.json();
      setloading(false)
      setdata(data);
    };
    getText();
  }, []);

  return (
    <>
      {/* <Tab/> */}

      <div className="bg-gray-700 h-screen flex justify-center items-center flex-col">

      {loading && <h1 className="text-6xl text-white " >Loading...</h1> }
      {data && <TypingMaster data={data[0]} />}
      </div>
    </>
  );
}

export default App;
