import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { auth, provider, emailPasswordProvider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveUser,
  setUserLogOutState,
  selectUserName,
  selectUserEmail,
} from "../redux/userSlice";
import "./LoginPage.css";

function RegisterFunc() {
  return (
    <Container>
      <form className="form">
        <Inputs>
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Kullanıcı Adı" />
          <input type="password" placeholder="Şifre" />
        </Inputs>
      </form>
    </Container>
  );
}

function LoginPage() {
  const dispatch = useDispatch();

  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);

  // const handleEmail=()=>{
  //   auth.createUserWithEmailAndPassword()
  // }

  const handleSignInGoogle = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).then((result) => {
      dispatch(
        setActiveUser({
          userName: result.user.displayName,
          userEmail: result.user.email,
        })
      );
    });
  };

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => dispatch(setUserLogOutState()))
      .catch((err) => alert(err.message));
  };

  return (
    <Container>
      <form className="form">
        {!userEmail && (
          <GoogleButton onClick={handleSignInGoogle}>
            <img className="google__icon" src="logos/logo-google.svg" alt="" />
            <p>oogle</p>
          </GoogleButton>
        )}
      </form>
    </Container>
  );
}

export default LoginPage;

/*------------------------------------------------------------------------------------------------------------------*/

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #000000;
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 150px;
  width: 500px;
`;

const GoogleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 200px;
  background: #d00000;
  border: 0px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background: #d00000ee;
  }
`;
