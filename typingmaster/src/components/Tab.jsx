import React from "react";
import { useState } from "react";

function Tab() {
  let [activeTab, setactiveTab] = useState("test");

  return (
    <div className="text-white">
      <div className="flex items-center justify-center">
        <button
          className="bg-white text-black p-2 rounded-md"
          onClick={() => setactiveTab("person")}
        >
          first tab
        </button>
        <button className="block" onClick={() => setactiveTab("test")}>
          second tab
        </button>
      </div>
    {activeTab === "person" && (
        <>
            <span>thsi is active tab 1</span>
            <h1>hey thsi is ansdhal</h1>
        </>
    )}
      {activeTab === "test" && <span>thsi is active tab 2</span>}
    </div>
  );
}

export default Tab;
