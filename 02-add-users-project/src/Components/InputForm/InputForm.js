import React, { useState } from 'react'
import './InputForm.css';
import '../UserList/UserList.css';

function InputForm() {

    const [users, setUsers] = useState([
        // {userName: 'Andrew', userAge: 25},
        // {userName: 'Evan', userAge: 22},
    ]);

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

        // Guard Clause, if new user matches an existing user or age is less than or equal to 0, return
        if (users.find(user => user.userName === newUser.userName)) return;
        if (newUser.userAge <= 0) return;

        // Else add the user
        setUsers([
            ...users,
            newUser,
        ]);

        // Clear fields
        setUserName('');
        setUserAge('');
    }


    const mappedUsers = users.map((user) => {
        return <li key={user.userName} className='userListItem'>{user.userName} ({user.userAge} years old)</li>;
    });

    return (
        <>
            <div>
                <form className='formClass'>
                    <label>Username</label>
                    <input className='formInput' type='text' placeholder='Your username...' onChange={userNameOnChangeHandler}></input>
                    <label>Age (Years)</label>
                    <input className='formInput' type='number' placeholder='Your age...' onChange={userAgeOnChangeHandler}></input>
                    <button className='formButton' type='submit' onClick={formSubmitHandler}>Add User</button>
                </form>
            </div>

            <ul className={`userList ${users.length === 0 ? 'hidden' : ''}`}>
                {mappedUsers}
            </ul>
        </>
    )
}

export default InputForm
