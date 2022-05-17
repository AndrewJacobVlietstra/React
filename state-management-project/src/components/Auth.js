import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Auth.module.css';
import { userActions } from '../redux/reducers/userSlice';

const Auth = () => {

  // Grab the user slice and setup dispatch function
  const userState = useSelector(state => state.user);
  const dispatch = useDispatch();

  // Setup error message ref and error state
  const errorMessageRef = useRef(null);
  const [inputError, setInputError] = useState(false);

  // Initialize input state
  const [inputState, setInputState] = useState({email: '', password: ''});


  // Dynamic inputchange handler
  const inputChangeHandler = (e) => {
    const { id, value } = e.target;

    setInputState(state => ({...state, [id]: value}));
  };

  const handleInputError = (errorMessage, errorTime) => {
    if (typeof errorMessage !== 'string' || typeof errorTime !== 'number') { 
      return console.log('Invalid Input type, message must be type string, time must be type number');
    }
    errorMessageRef.current.innerText = errorMessage;
    setInputError(state => true);

    setTimeout(() => {
      setInputError(state => false);
    }, errorTime);
  }

  const logInHandler = (e) => {
    e.preventDefault();

    if (inputState.email.length === 0 || inputState.password.length === 0) { 
      return handleInputError('Please enter email and/or password', 5000);
    }
    if (inputState.password != '123') { 
      return handleInputError('Invalid Password! Password is 123', 5000);
    }

    return dispatch(userActions.logUserIn(inputState.email));
  };

  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' value={inputState.email} onChange={inputChangeHandler} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' value={inputState.password} onChange={inputChangeHandler} />
          </div>
          <button onClick={logInHandler}>Login</button>
          <p className={inputError ? classes.showErrorText : classes.hideErrorText} ref={errorMessageRef}></p>
        </form>
      </section>
    </main>
  );
};

export default Auth;
