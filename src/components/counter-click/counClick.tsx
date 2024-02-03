import { useEffect, useState } from 'react';

export const CounterClick = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const logCount = () => {
      console.log('useEffect', count);
    };
    logCount();
  }, [count]);

  const handleClick = () => {
    console.log('cliquei');
    setCount(count + 1);
  };
  return (
    <div>
      count: {count}
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
