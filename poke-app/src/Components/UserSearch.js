import React from "react";

function UserSearch({ userSearch, setUserSearch }) {
  return (
    <>
      <input
        type="text"
        value={userSearch}
        onChange={(e) => setUserSearch(e.target.value)}
      />
    </>
  );
}

export default UserSearch;
