import React, { useState } from 'react'
import './InputForm.css';
import Card from '../Card/Card';

function InputForm( {onAddUser} ) {

    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');

    const userNameOnChangeHandler = (event) => {
        setUserName(event.target.value);
    };

    const userAgeOnChangeHandler = (event) => {
        setUserAge(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault(); // prevent screen refresh

        // Package up data into object
        const newUser = {
            userName: userName,
            userAge: userAge,
        };

        // Guard Clauses
        if(userName.trim().length === 0 || +userAge.trim().length === 0) return;
        if (newUser.userAge < 1) return;
        // if (users.find(user => user.userName === newUser.userName)) return;

        // Else add the user
        onAddUser(userName, userAge);

        // Clear fields, have to also pass current value back into input fields
        setUserName('');
        setUserAge('');
    }


    return (
        <>
            <Card>
                <form className='formClass' onSubmit={formSubmitHandler}>
                    <label htmlFor='userName'>Username</label>
                    <input id='userName' className='formInput' value={userName} type='text' placeholder='Your username...' onChange={userNameOnChangeHandler}></input>
                    <label htmlFor='userAge'>Age (Years)</label>
                    <input id='userAge' className='formInput' value={userAge} type='number' placeholder='Your age...' onChange={userAgeOnChangeHandler}></input>
                    <button className='formButton' type='submit'>Add User</button>
                </form>
            </Card>

            <Card>
                
            </Card>
        </>
    )
}

export default InputForm
