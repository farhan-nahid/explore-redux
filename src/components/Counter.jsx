import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const incrementFunc = () => {
    setCount((prev) => prev + 1);
  };

  const decrementFunc = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className='max-w-md mx-auto mt-10 space-y-5'>
      <div className='p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow'>
        <div className='text-2xl font-semibold' id='counter'>
          {count}
        </div>

        <div className='flex space-x-3'>
          <button
            className='bg-indigo-400 text-white px-3 py-2 rounded shadow'
            onClick={incrementFunc}
          >
            Increment
          </button>
          <button
            className='bg-red-400 text-white px-3 py-2 rounded shadow'
            onClick={decrementFunc}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}
