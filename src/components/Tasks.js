import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import TaskBox from "./TaskBox";
import TaskPage from "./TaskPage";

function BoxesFunc() {
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <Container>
      <Boxes>
        {tasks.map((task) => (
          <TaskBox
            key={task.id}
            name={task.task_name}
            task_id={task.id}
            type={task.type}
            dailyValues={task.dailyValues}
            lastDay={task.lastDay}
          />
        ))}
        {/* <TaskBox
          key={1}
          name={"Lolipop"}
          task_id={1}
          dailyValues={[5, 4, 8, 5, 4]}
          date={"task.lastDay"}
        /> */}
      </Boxes>
    </Container>
  );
}

function PagesFunc() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const chosenPageObj = tasks.find((task) => task.isPageOn === true);

  return (
    <Container>
      <Pages>
        {/* {tasks.map((task) => {
          if (task.id === chosenPageId) {
            <TaskPage
              key={task.id}
              name={task.task_name}
              task_id={task.id}
              type={task.type}
              dailyValues={task.dailyValues}
              date={task.lastDay}
            />;
          }
        })} */}
        <TaskPage
          name={chosenPageObj && chosenPageObj.task_name}
          task_id={chosenPageObj && chosenPageObj.id}
          type={chosenPageObj && chosenPageObj.type}
          dailyValues={chosenPageObj && chosenPageObj.dailyValues}
          lastDay={chosenPageObj && chosenPageObj.lastDay}
        />
      </Pages>
    </Container>
  );
}

function Tasks() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const chosenPageObj = tasks.find((task) => task.isPageOn === true);

  if (chosenPageObj) {
    return <PagesFunc />;
  }
  return <BoxesFunc />;
}

export default Tasks;

/*---------------------------------------------------------------------------------------------------*/
const Container = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  top: 80px;
  justify-content: center;
  position: absolute;
  display: flex;
`;

const Boxes = styled.div`
  width: 80%;
  height: 100%;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: space-evenly;
  align-items: center;
  gap: 3rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  display: flex;
`;
// display: ${(props) => `${props.show ? "flex" : "none"}`};

const Pages = styled.div`
  width: 82%;
  height: 100%;
  flex-wrap: wrap;
  margin: 0 auto;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;
// display: ${(props) => `${props.show ? "flex" : "none"}`};
