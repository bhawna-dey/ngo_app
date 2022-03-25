import React, {useState} from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import {useNavigate} from "react-router-dom"
import axios from 'axios'

import '../Signup.css';


function Signup() {

  const navigate = useNavigate();

  const clientId = "974608915235-h7p952nn9f000mjmgkud83qv7nm9681c.apps.googleusercontent.com";

  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);

  const onLoginSuccess= (res) =>{
    console.log('Login Success:', res.profileObj);
    axios({
      method:"POST",
      url: "http://localhost:5000/api/auth/login",
      data:{tokenId : res.tokenId}
    }).then(res =>{
      console.log("google login success",res);
    });
    setShowloginButton(false);
    setShowlogoutButton(true);
  }

  const onLoginFailure=(res)=>{
    console.log('Login Failed', res);
  }

  const onSignoutSuccess=()=>{
    alert("You have been logged out successfully");
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
  }

  return (
    <div className='g-signin'>
      { showloginButton ?
      <GoogleLogin
        clientId={clientId}
        buttonText="Sign In"
        onSuccess={onLoginSuccess}
        onFailure={onLoginFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
        onClick={()=>navigate("/userprofile")}
      />
      : null}

      { showlogoutButton ?
      <GoogleLogout
        clientId={clientId}
        buttonText="Sign Out"
        onLogoutSuccess={onSignoutSuccess}
      >

      </GoogleLogout>
      : null }
    </div>
  );
}

export default Signup;
