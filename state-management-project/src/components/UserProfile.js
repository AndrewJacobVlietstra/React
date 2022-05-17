import classes from "./UserProfile.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { userActions } from "../redux/reducers/userSlice";

const UserProfile = () => {
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");

  const userNameChangeHandler = (e) => {
    setUserName((state) => e.target.value);
  };

  const userNameSubmitHandler = (e) => {
    e.preventDefault();

    if (userState.userName === userName) { return console.log('That is currently your username'); }

    dispatch(userActions.changeUserName(userName));
    return setUserName(state => "");
  };

  return (
    <main className={classes.profile}>
      <h2>My User Profile</h2>
      <span>Welcome, {userState.userName}</span>

      <div className={classes.changeUsernameContainer}>
        <form>
          <input
            id="userName"
            type="text"
            placeholder="Change username"
            value={userName}
            onChange={userNameChangeHandler}
          ></input>
          <br />
          <button style={{marginTop: '1rem'}} onClick={userNameSubmitHandler}>Submit Change</button>
        </form>
      </div>
    </main>
  );
};

export default UserProfile;
