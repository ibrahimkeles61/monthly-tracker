import React from "react";
import { useSelector } from "react-redux";
import styled, { css, keyframes } from "styled-components";

function ChartHeadlineItem({ height, dailyValue, width }) {
  const isRightMenuActive = useSelector(
    (state) => state.menu.isRightMenuActive
  );

  return (
    <Container height={height}>
      <Content width={width} isRightMenuActive={isRightMenuActive}>
        <p>{dailyValue > 0 && dailyValue}</p>
      </Content>
    </Container>
  );
}

export default ChartHeadlineItem;

const Container = styled.div`
  width: 2.3%;
  height: ${(props) => props.height}%;
  display: flex;
  align-items: end;
`;

const grow = keyframes`
0%{
  height:0%;
}
100%{
  height:100%;
}
`;

const growCss = css`
  animation: ${grow} 750ms ease-in-out;
`;
/*------------------------------------------------------------------------------*/
const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  background-color: #ff8800ff;
  border-radius: 2px;
  box-shadow: 0px 0px 10px 0px rgba(255, 136, 0, 0.6);
  color: #f8f9faff;
  text-shadow: 0px 0px 10px #f8f9faff;
  &:hover {
    box-shadow: 0px 0px 20px 0px rgba(255, 136, 0, 0.6);
    cursor: pointer;
    transform: scale(1.02);
    transition: 100ms;
    font-size: 1.6rem;
    text-shadow: 0px 0px 20px #f8f9faff;
  }
  ${({ isRightMenuActive }) => (isRightMenuActive ? "" : growCss)}
`;
