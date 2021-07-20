import React from "react";
import "./UserList.css";
import Card from "../Card/Card";

function UserList({users}) {

  const mappedUsers = users.map(user => {
    return (
      <li key={user.userID} className="userListItem">
        {user.userName} ({user.userAge} year{user.userAge > 1 ? "s" : ""} old)
      </li>
    );
  });

  return (
    <Card>
      <ul className={`userList ${users.length === 0 ? "hidden" : ""}`}>
        {mappedUsers}
      </ul>
    </Card>
  );
}

export default UserList;
