import Counter from './components/Counter';
import Statistics from './components/Statistics';

function App() {
  return (
    <div className='w-screen h-screen p-10 bg-gray-100 text-slate-700'>
      <h1 className='max-w-md mx-auto text-center text-2xl font-bold'>
        Simple Counter Application
      </h1>
      <Counter />
      <Counter />
      <Statistics count={2} />
    </div>
  );
}

export default App;
