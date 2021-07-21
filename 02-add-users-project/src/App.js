import React, { useState } from "react";
import InputForm from "./Components/InputForm/InputForm";
import UserList from "./Components/UserList/UserList";

function App() {

  const [users, setUsers] = useState([
    { userName: "Andrew", userAge: 25, userID: Math.random().toString()},
    { userName: "Evan", userAge: 22, userID: Math.random().toString() },
    { userName: "Miranda", userAge: 25, userID: Math.random().toString() },
    { userName: "Val", userAge: 24, userID: Math.random().toString() },
  ]);

  const addUserHandler = (uName, uAge) => {
    setUsers((prevUsers) => {
      return [...prevUsers, {userName: uName, userAge: uAge, userID: Math.random().toString()}];
    });
  };

  // Give InputForm functionality to set new array of user objects and preserve state of previous users
  // Give UserList the updated array of user objects to render to screen
  return (
    <>
      <InputForm users={users} onAddUser={addUserHandler}/>
      <UserList users={users} onDeleteUser={setUsers}/>
    </>
  );
}

export default App;
