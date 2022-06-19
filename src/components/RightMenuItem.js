import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { closeTaskPage, openTaskPage } from "../redux/taskSlice";
import { toggleRightMenu } from "../redux/menuSlice";

function RightMenuItem({ task }) {
  const dispatch = useDispatch();

  const pickPage = (id) => {
    // dispatch(closeTaskPage());
    // setTimeout(() => {
    dispatch(closeTaskPage());
    dispatch(openTaskPage(id));
    dispatch(toggleRightMenu());
    // });
  };
  return (
    <Container onClick={() => pickPage(task.id)}>{task.task_name}</Container>
  );
}

export default RightMenuItem;

const Container = styled.div`
  width: 100%;
  height: 100px;
  border-bottom: 2px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  cursor: pointer;
  text-shadow: 0 0 1px #000;
`;
