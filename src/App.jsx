import { useState } from 'react';
import Counter from './components/Counter';
import Statistics from './components/Statistics';
import Title from './components/Title';

const initialState = [
  {
    id: 1,
    count: 0,
  },
  {
    id: 2,
    count: 0,
  },
  {
    id: 3,
    count: 0,
  },
];

function App() {
  const [countItems, setCountItems] = useState(initialState);

  // increment function
  const handelIncrement = (id) => {
    const updatedCount = countItems.map((counter) => {
      if (counter.id === id) {
        return {
          ...counter,
          count: counter.count + 1,
        };
      } else {
        return { ...counter };
      }
    });
    setCountItems(updatedCount);
  };

  // increment function
  const handelDecrement = (id) => {
    const updatedCount = countItems.map((counter) => {
      if (counter.id === id) {
        return {
          ...counter,
          count: counter.count - 1,
        };
      } else {
        return { ...counter };
      }
    });
    setCountItems(updatedCount);
  };

  // total count
  const totalCount = countItems.reduce((total, item) => total + item.count, 0);

  return (
    <div className='w-screen h-screen p-10 bg-gray-100 text-slate-700'>
      <Title />
      <div className='max-w-md mx-auto mt-10 space-y-5'>
        {countItems.map((item) => (
          <Counter
            key={item.id}
            item={item}
            handelIncrement={handelIncrement}
            handelDecrement={handelDecrement}
          />
        ))}
        <Statistics count={totalCount} />
      </div>
    </div>
  );
}

export default App;
