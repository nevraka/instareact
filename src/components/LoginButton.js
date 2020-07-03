import React from "react";
import GoogleLogin from "react-google-login";
import App from "./App";

const LoginButton = ({ setProfile }) => {
  const onSuccess = (response) => {
    console.log(response);
    setProfile(response.profileObj);
  };

  const onFailure = (response) => {
    console.log(response);
    setProfile({});
  };

  return (
    <div className="google-login">
      <GoogleLogin
        clientId="650261985434-uoj1m8n4sgmnkdsejd9sa1tmusqsu9t1.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={false}
      />
    </div>
  );
};

export default LoginButton;
