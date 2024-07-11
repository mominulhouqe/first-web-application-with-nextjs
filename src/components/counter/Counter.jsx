
 "use client"

import { useState } from "react";

const Counters = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h2 className=" my-2 text-lg">
        Counter = <span className="text-blue-500 text-2xl">( {counter} )</span>
      </h2>
      <div className="my-2 border-b"></div>
      <button
        className="border p-2 bg-gray-600 text-white mx-2 rounded-md"
        onClick={() => setCounter(counter + 1)}
      >
        Increse
      </button>
      <button
        className="border p-2 bg-red-600 text-white mx-2  rounded-md"
        onClick={() => setCounter(counter - 1)}
      >
        {" "}
        Decrese
      </button>
    </div>
  );
};

export default Counters;
