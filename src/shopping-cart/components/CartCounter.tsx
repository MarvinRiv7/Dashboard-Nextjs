'use client'

import React, { useState } from "react";


interface Props {
    value?: number,
}

export const CartCounter = ({value = 0}: Props) => {

    const [counter, setcounter] = useState(value)

    const increment = () => {
      setcounter(counter + 1)
    }
  
    const decrement = () => {
      setcounter(counter - 1)
    }
  
    const reset = () => {
      setcounter(value)
    }

  return (
    <>
      <span className="text-9xl">{counter}</span>

      <div className="flex">
        <button
          onClick={increment}
          className="flex items-center justify-center p-2 rounded-xl bg-black text-red-700 hover:bg-white transition-all w-[100px] mr-2"
        >
          +1
        </button>
        <button
          onClick={reset}
          className="flex items-center justify-center p-2 rounded-xl bg-black text-blue-600 hover:bg-white transition-all w-[100px] mr-2"
        >
          Rset
        </button>
        <button
          onClick={decrement}
          className="flex items-center justify-center p-2 rounded-xl bg-black text-yellow-400 hover:bg-white transition-all w-[100px] mr-2"
        >
          -1
        </button>
      </div>
    </>
  );
};
