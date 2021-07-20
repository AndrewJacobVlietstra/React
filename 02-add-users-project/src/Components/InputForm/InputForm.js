import React, { useState } from 'react'
import './InputForm.css';
import Card from '../Card/Card';
import ErrorModal from '../ErrorModal/ErrorModal';

function InputForm( {onAddUser} ) {

    const [error, setError] = useState();
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
        if(userName.trim().length === 0 || +userAge.trim().length === 0) return setError({
            title: 'Invalid Input',
            message: 'Please enter a valid name and age (non-empty values).',
        });

        if (newUser.userAge < 1) return setError({
            title: 'Invalid Age',
            message: 'Please enter a valid age (Age > 0).',
        });

        // Else add the user
        onAddUser(userName, userAge);

        // Clear fields, have to also pass current value back into input fields
        setUserName('');
        setUserAge('');
    }

    const errorHandler = () => {
        setError(null);
    };


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

            {/* Conditionally render a custom JSX modal element if an error exists */}
            {error && <ErrorModal onConfirmError={errorHandler} title={error.title} message={error.message} />}
        </>
    )
}

export default InputForm
