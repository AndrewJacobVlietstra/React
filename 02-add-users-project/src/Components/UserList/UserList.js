import React, { useState } from 'react'
import './UserList.css';

function UserList() {
    const [users, setUsers] = useState([
        {userName: 'Andrew', userAge: 25},
        {userName: 'Evan', userAge: 22},
    ]);

    

    const mappedUsers = users.map((user) => {
        return <li key={user.userName} className='userListItem'>{user.userName} ({user.userAge} years old)</li>;
    });

    return (
        <ul className='userList'>
            {mappedUsers}
        </ul>
    )
}

export default UserList
