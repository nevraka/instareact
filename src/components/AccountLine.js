import React, { useContext } from "react";
import LoginButton from "./LoginButton";
import UserContext from "./UserContext";

const AccountLine = () => {
  const user = useContext(UserContext);

  return (
    <div>
      {user.profile.googleId || <LoginButton setProfile={user.setProfile} />}
    </div>
  );
};

export default AccountLine;
