import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";

function HappyBalls() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [isTrue, setIsTrue] = useState(false);

  return (
    <Container>
      <Loader
        onMouseOver={() => setIsTrue(true)}
        onMouseLeave={() => setIsTrue(false)}
      >
        {array.map((x) => (
          <Ball i={x} isTrue={isTrue} />
        ))}
      </Loader>
    </Container>
  );
}

export default HappyBalls;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background: #001f25;
`;

const Loader = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
`;

const animate = keyframes`
from{
    transform: rotate(0deg);
    filter:hue-rotate(0deg);
}
to{
    transform: rotate(360deg);
    filter:hue-rotate(360deg);
}
`;

const Hover = css`
  transform-origin: 250px;
  box-shadow: 0 0 20px #00efff, -200px -200px 0 #00efff,
    -200px -200px 20px #00efff, 200px 200px 0 #00efff, 200px 200px 20px #00efff,
    200px -200px 0 #00efff, 200px -200px 20px #00efff, -200px 200px 0 #00efff,
    -200px 200px 20px #00efff;
`;

const NotHover = css`
  transform-origin: 20px;
  box-shadow: 0 0 20px #00efff, -30px -30px 0 #00efff, -30px -30px 20px #00efff,
    30px 30px 0 #00efff, 30px 30px 20px #00efff, 30px -30px 0 #00efff,
    30px -30px 20px #00efff, -30px 30px 0 #00efff, -30px 30px 20px #00efff;
`;

const Ball = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(calc(36deg * ${(props) => props.i}));
  transform-origin: 20px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 25px;
    height: 25px;
    background: transparent;
    border: 4px solid #00efff;
    box-sizing: border-box;
    border-radius: 50%;
    animation: ${animate} 5s linear infinite;
    animation-delay: calc(-0.25s * ${(props) => props.i});
    ${(props) => (props.isTrue ? Hover : NotHover)};
    transition: 2000ms;
  }
`;
