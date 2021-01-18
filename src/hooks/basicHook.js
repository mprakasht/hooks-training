import React, { useState } from "react";


function BasicHooks() {
  const [count, setcount] = useState(0);
  const [count1, setcount1] = useState(0);
  return (
    <div className="App">
      <div>{count}</div>
      <div>{count1}</div>
      <button
        onClick={() => {
          setcount((count) => count + 1);
          setcount1((count1) => count1 + 1);
        }}
      >
        increase
      </button>
    </div>
  );
}

export default BasicHooks;
