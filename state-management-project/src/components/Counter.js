import classes from './Counter.module.css';
import { useState, useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCounter, decrementCounter, toggleReduxCounter } from '../redux/reducers/counterSlice';
import { counterContext } from '../context/counterContext';

const Counter = () => {
  
  // Local Counter state
  const [localCounter, setLocalCounter] = useState(0);
  
  // Redux counter state
  // useSelector causes this component to be subscribed to the redux store
  const { counterValue, showReduxCounter } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(toggleReduxCounter());
  };

  // Context counter state
  const { contextState, contextDispatch } = useContext(counterContext);

  const loopLocalCounterValueHandler = () => {
    let timeDelay = 100;
    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        setLocalCounter(state => state + 1);
      }, timeDelay);
      timeDelay += 5;
    }
  };

  useEffect(() => {
    contextDispatch({type: 'increment', payload: 10})
  }, []);
  

  return (
    <main className={classes.counter}>
      {showReduxCounter ? 
      <>
        <h1>Redux Counter</h1>
        <div className={classes.counterInfoContainer}>
          <button className={classes.counterButton} onClick={ () => dispatch(decrementCounter(1)) }>-</button>
          <h2 className={classes.counterCountValue}>{counterValue}</h2>
          <button className={classes.counterButton} onClick={ () => dispatch(incrementCounter(1)) }>+</button>
        </div>
      </>
      : null}
      <button onClick={toggleCounterHandler}>Toggle Redux Counter</button>

      <h3 className={classes.localCounterTitle}>LOCAL COUNTER</h3>
      <div className={classes.counterInfoContainer}>
        <button className={classes.counterButton} onClick={ () => setLocalCounter(currentVal => currentVal - 1) }>-</button>
        <h2 className={classes.counterCountValue}>{localCounter}</h2>
        <button className={classes.counterButton} onClick={ () => setLocalCounter(currentVal => currentVal + 1) }>+</button>
      </div>
      <button onClick={loopLocalCounterValueHandler}>Activate Loop on Local Counter</button>

      <h3 className={classes.localCounterTitle}>CONTEXT COUNTER</h3>
      <div className={classes.counterInfoContainer}>
        <button className={classes.counterButton} onClick={ () => contextDispatch({ type: 'decrement', payload: 1 }) }>-</button>
        <h2 className={classes.counterCountValue}>{contextState}</h2>
        <button className={classes.counterButton} onClick={ () => contextDispatch({ type: 'increment', payload: 1 }) }>+</button>
      </div>
      <button onClick={() => contextDispatch({type: 'reset'})}>Reset Context Counter</button>
    </main>
  );
};

export default Counter;
