import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import RightMenuItem from "./RightMenuItem";

function RightMenu() {
  const isRightMenuActive = useSelector(
    (state) => state.menu.isRightMenuActive
  );
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <Container hide={isRightMenuActive}>
      {tasks.map((task) => (
        <RightMenuItem key={task.id} task={task} />
      ))}
    </Container>
  );
}

export default RightMenu;

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: #f4f1de;
  box-shadow: ${(props) => (props.hide ? "-5px 0 10px 0 #f4f1de" : "none")};
  width: 20%;
  height: calc(100% - 80px);
  right: ${(props) => (props.hide ? "0" : "-20%")};
  top: 80px;
  z-index: 222;
  transition: 500ms ease-in-out;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
