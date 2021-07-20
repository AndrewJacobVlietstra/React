import React from "react";
import InputForm from "./Components/InputForm/InputForm";
import UserList from "./Components/UserList/UserList";

function App() {

  const saveNewUser = (newUser) => {
    console.log(newUser);
  };

  return (
    <>
      <InputForm onAddNewUser={saveNewUser}/>
      <UserList />
    </>
  );
}

export default App;
