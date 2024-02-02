import React from 'react';
import { UseAppContext } from './AppContext';
import { ActionType } from './types';

const Counter: React.FC = () => {
  const { state, dispatch } = UseAppContext();

  const handleIncrement = () => {
    dispatch({ type: ActionType.INCREMENT });
  };

  const handleDecrement = () => {
    dispatch({ type: ActionType.DECREMENT });
  };

  return (
    <div>
      <p>Contagem: {state.count}</p>
      <button onClick={handleIncrement}>Incrementar</button>
      <button onClick={handleDecrement}>Decrementar</button>
    </div>
  );
};

export default Counter;
