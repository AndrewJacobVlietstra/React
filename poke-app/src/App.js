import { useState } from "react";
import "./App.css";
import List from "./Components/List";
import UserSearch from "./Components/UserSearch";

function App() {

  const [userSearch, setUserSearch] = useState('');

  return (
    <>
      <UserSearch userSearch={userSearch} setUserSearch={setUserSearch} />
      <List />
    </>
  );
}

export default App;
