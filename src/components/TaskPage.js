import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import ChartHeadlineItem from "./ChartHeadlineItem";
import { closeTaskPage } from "../redux/taskSlice";

function TaskPage({ task_id, name, type, dailyValues, lastDay }) {
  const dispatch = useDispatch();

  var width = 0;

  if (dailyValues) {
    if (dailyValues.length > 20) width = (dailyValues.length / 30) * 100;
    else if (dailyValues.length > 20) width = (dailyValues.length / 25) * 100;
    else if (dailyValues.length > 15) width = (dailyValues.length / 20) * 100;
    else if (dailyValues.length > 10) width = (dailyValues.length / 15) * 100;
    else width = (dailyValues.length / 5) * 100;
  }

  return (
    <Container>
      <Content>
        <Headline>
          <Title>{name} için Bu Ayın Değerleri</Title>
          <Button onClick={() => dispatch(closeTaskPage())}>Kapat</Button>
        </Headline>
        {dailyValues && (
          <Chart>
            <ChartHeadline width={width} asd={console.log(width)}>
              {dailyValues.map((dailyValue, index) => (
                <ChartHeadlineItem
                  key={index}
                  height={(dailyValue / Math.max(...dailyValues)) * 95}
                  dailyValue={dailyValue}
                  width={width}
                />
              ))}
            </ChartHeadline>
            <ChartBottomline width={width}>
              {dailyValues.map((dailyValue, index) => (
                <ChartBottomlineItem key={index} width={width}>
                  <Day>Gün {index + 1}</Day>
                </ChartBottomlineItem>
              ))}
            </ChartBottomline>
          </Chart>
        )}
      </Content>
    </Container>
  );
}

export default TaskPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Headline = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: end;
  // background-color: #fff;
`;

const Title = styled.div`
  font-size: 2.5rem;
  color: #f8f9fa;
  text-shadow: 0 0px 20px #f8f9fa;
`;

const Button = styled.div`
  position: absolute;
  top: 40px;
  right: 0px;
  width: 10rem;
  height: 5%;
  margin-right: 10%;
  font-size: 1.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2%;
  background-color: #ff8800ff;
  box-shadow: 0 0 10px 0 #ff8800ff;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 15px 0 #ff8800ff;
    transform: scale(1.05);
    color: white;
  }
`;

const Chart = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ChartHeadline = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: end;
  width: ${(props) => props.width}%;
  height: 80%;
`;

// const ChartHeadlineItem = styled.div`
// `;

// border-top: ${(props) => props.borderTop}px outset rgba(241, 250, 238, 0.6);
//   border-right: ${(props) => props.borderRight}px outset
//     rgba(220, 235, 220, 0.4);

const ChartBottomline = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: ${(props) => props.width}%;
  height: 20%;
  border-top: 5px solid black;
`;

const ChartBottomlineItem = styled.div`
  width: 2.3%;
  height: 50%;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const Day = styled.div`
  font-size: 0.6rem;
  transform: rotate(-80deg);
  color: #faf9f9ff;
`;

// background-color: rgba(220, 37, 0, 0.8); rgba(235, 87, 0, 0.5)
