import { createContext, useState, useReducer } from "react";

export const counterContext = createContext();

const counterContextReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + action.payload;

    case 'decrement':
      return state - action.payload;

    case 'reset':
      return 0;

    default:
      return state;
  }
};


const CounterContext = ({ children }) => {
  // const [contextCounter, setContextCounter] = useState(0);
  const [contextState, contextDispatch] = useReducer(counterContextReducer, 0);

  return (
    <counterContext.Provider value={ { contextState, contextDispatch } }>
      {children}
    </counterContext.Provider>
  );
};

export default CounterContext;