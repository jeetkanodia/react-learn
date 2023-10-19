import React, { useContext } from "react";
import UserContext from "../context/UserContext";
function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div> No user found , please Login</div>;
  else
    return (
      <div>
        <h2>Profile</h2>
        <div>Username : {user.username}</div>
        <div>Password : {user.password}</div>
      </div>
    );
}

export default Profile;
