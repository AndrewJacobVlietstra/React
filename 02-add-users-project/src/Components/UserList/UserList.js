import React from "react";
import "./UserList.css";
import Card from "../Card/Card";

function UserList({users, onDeleteUser}) {

  Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
  };

  
  const mappedUsers = users.map(user => {
    return (
      <li key={user.userID} className="userListItem" onClick={deleteUserHandler}>
        {user.userName} ({user.userAge} year{user.userAge > 1 ? "s" : ""} old)
      </li>
    );
  });
  
  function deleteUserHandler(event) {
    event.target.remove();
    // let firstName = event.target.innerHTML.split(' ')[0];
    // for ( let i = 0; i < users.length; i++) {
    //   if (users[i].userName === firstName) {
    //     let indexOfName = users.findIndex(user => user.userName === firstName);
    //     let filteredUsers = users.filter((user) => {
    //       return user !== users.splice(indexOfName, 1);
    //     });
    //     onDeleteUser(filteredUsers);
    //   };
    // };
    // console.log(users);
    // console.log(firstName);

    console.log(users);
  };

  return (
    <Card>
      <h4 onClick={deleteUserHandler} style={{padding: '20px 30px',}}>Click a User to <span style={{color: 'red'}}>Delete</span></h4>
      <ul style={{position: 'relative', top: '-2.5rem'}} className={`userList ${users.length === 0 ? "hidden" : ""}`}>
        {mappedUsers}
      </ul>
    </Card>
  );
}

export default UserList;
