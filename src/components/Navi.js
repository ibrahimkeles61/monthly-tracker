import React from "react";
import styled, { css } from "styled-components";
import { toggleRightMenu } from "../redux/menuSlice";
import { useSelector, useDispatch } from "react-redux";

function Navi() {
  const isRightMenuActive = useSelector(
    (state) => state.menu.isRightMenuActive
  );

  const dispatch = useDispatch();

  return (
    <Container>
      <Content>
        <h1>HEADER</h1>
        <RightMenuButton
          onClick={() => dispatch(toggleRightMenu())}
          isRightMenuActive={isRightMenuActive}
        />
      </Content>
      <BottomLine />
    </Container>
  );
}

export default Navi;

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 120px;
  top: 0;
  z-index: 11;
`;

const Content = styled.div`
  width: 100%;
  height: 80px;
  top: 0;
  text-align: center;
  color: rgba(255, 133, 0);
  text-shadow: 0 0px 20px rgba(255, 133, 0, 0.8);

  background: linear-gradient(
    10deg,
    // rgba(37, 37, 37, 0.9),
    rgba(0, 31, 84),
    rgba(3, 64, 120),
    rgba(18, 130, 162)
  );
`;

const deactiveCss = css`
  &:before {
    content: "";
    position: absolute;
    width: 30px;
    height: 2px;
    background-color: #000;
    transition: 200ms;
    transform: translateY(-10px);
    box-shadow: 0 10px 0 #000;
  }
  &:after {
    content: "";
    position: absolute;
    width: 30px;
    height: 2px;
    background-color: #000;
    transition: 200ms;
    transform: translateY(10px);
  }
`;

const activeCss = css`
  &:before {
    content: "";
    position: absolute;
    width: 30px;
    height: 2px;
    background-color: #000;
    transition: 200ms;
    transform: translateY(0) rotate(45deg);
    box-shadow: 0 0px 0 #000;
  }
  &:after {
    content: "";
    position: absolute;
    width: 30px;
    height: 2px;
    background-color: #000;
    transition: 200ms;
    transform: translateY(0px) rotate(-45deg);
  }
`;

const RightMenuButton = styled.div`
  position: absolute;
  top: 15px;
  right: 50px;
  width: 50px;
  height: 50px;
  background-color: #f8961e;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 200ms;
  cursor: pointer;
  border-radius: 5px;
  ${(props) => (props.isRightMenuActive ? activeCss : deactiveCss)}
`;

const BottomLine = styled.div`
  width: 100%;
  height: 40px;
  bottom: 0;
  background-image: linear-gradient(180deg, rgba(3, 64, 120, 0.2), transparent);
`;
