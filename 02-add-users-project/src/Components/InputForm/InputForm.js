import React, { useState } from 'react'
import './InputForm.css';

function InputForm(props) {

    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');

    const userNameOnChangeHandler = (event) => {
        setUserName(event.target.value);
    };

    const userAgeOnChangeHandler = (event) => {
        setUserAge(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const newUser = {
            userName: userName,
            userAge: userAge,
        };
        props.onAddNewUser(newUser);
    }

    return (
        <div>
            <form className='formClass'>
                <label>Username</label>
                <input className='formInput' type='text' placeholder='Your username...' onChange={userNameOnChangeHandler}></input>
                <label>Age (Years)</label>
                <input className='formInput' type='number' placeholder='Your age...' onChange={userAgeOnChangeHandler}></input>
                <button className='formButton' type='submit' onClick={formSubmitHandler}>Add User</button>
            </form>
        </div>
    )
}

export default InputForm
