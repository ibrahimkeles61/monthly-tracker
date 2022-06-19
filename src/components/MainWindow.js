import React, { useState } from "react";
import styled from "styled-components";
import Tasks from "./Tasks";
import { useSelector, useDispatch } from "react-redux";
import { auth, provider, emailPasswordProvider } from "../firebase";
import {
  setActiveUser,
  setUserLogOutState,
  selectUserName,
  selectUserEmail,
} from "../redux/userSlice";

function MainWindow() {
  const isRightMenuActive = useSelector(
    (state) => state.menu.isRightMenuActive
  );

  return (
    <Container isRightMenuActive={isRightMenuActive}>
      <Tasks />
    </Container>
  );
}

export default MainWindow;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-image: url("images/purple_green.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 1;
  // &:after { parlaklığını biraz düşürmek için:
  //   content: "";
  //   // position: absolute;
  //   // left: 0;
  //   // top: 0;
  //   height: 100%;
  //   width: 100%;
  //   background-color: #000;
  //   opacity: 0.1;
  //   z-index: -1;
  // }
  filter: ${(props) => (props.isRightMenuActive ? "blur(5px)" : "none")};
`;
