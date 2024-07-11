"use client"
import { useState } from "react";


const Counter = () => {
    const [counter ,setCounter]=useState(0)
    console.log(counter, "hello world");
    return (
       <div className="flex items-center justify-center h-screen bg-gray-200">
        
         <div className="w-96 h-56 bg-white rounded-lg border shadow-md  p-6 space-y-6">
            <h3 className="mb-4 text-2xl font-bold">Counter App With NextJs</h3>
            <h2 className=" my-2 text-lg">Counter = <span className="text-blue-500 text-2xl">( {counter} )</span></h2>
            <div className="my-2 border-b"></div>
            <button className="border p-2 bg-gray-600 text-white mx-2 rounded-md" onClick={()=>setCounter(counter + 1)}>Increse</button>
            <button className="border p-2 bg-red-600 text-white mx-2  rounded-md" onClick={()=>setCounter(counter - 1)}> Decrese</button>
        </div>
       </div>
    );
};

export default Counter;