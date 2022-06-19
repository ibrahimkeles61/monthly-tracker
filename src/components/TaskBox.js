import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { useDispatch } from "react-redux";
import {
  addOneToLastOne,
  addFiveToLastOne,
  addTenToLastOne,
  reduceOneLastOne,
  reduceFiveLastOne,
  reduceTenLastOne,
  addNewOne,
  updateDate,
} from "../redux/taskSlice";

function TaskBox({ task_id, name, type, dailyValues, lastDay }) {
  //KARTIN ÖN VE ARKA YÜZÜ ARASINDAKİ GEÇİŞ - 1
  const [hideFront, setHideFront] = useState(false);
  const [hideBack, setHideBack] = useState(true);
  const [frontToBackTrigger, setFrontToBackTrigger] = useState(false);
  const [backToFrontTrigger, setBackToFrontTrigger] = useState(false);
  // sayfa ilk yüklendiğinde backToFrontTrigger false olmalıki animasyon çalışmasın,
  // ama ondan sonra hep true'da bekleyebilir çünkü animasyonlarda bunun üzerine yazılıyor

  // const toggleTaskBox = () => {
  //   setTimeout(() => {
  //     hideFront ? setHideFront(false) : setHideFront(true);
  //     hideBack ? setHideBack(false) : setHideBack(true);
  //     setBackToFrontTrigger(true);
  //   }, 250);
  //   rotateTaskBoxFrontToBack();
  // };
  // const rotateTaskBoxFrontToBack = () => {
  //   setFrontToBackTrigger(true);
  //   setTimeout(() => {
  //     setFrontToBackTrigger(false);
  //   }, 250);
  // };

  //KARTIN ÖN VE ARKA YÜZÜ ARASINDA ANİMASYONSUZ GEÇİŞ - 2
  const [front, setFront] = useState(true);

  const flipTheCard = () => {
    if (front) setFront(false);
    else setFront(true);
  };
  /*------------------------*/

  //EKLEME ÇIKARMA BUTONLARINA SLICE'TAKİ İŞLEVLERİ ATAMA
  //VE KENDİMCE TIKLAMA ANİMASYONU OLUŞTURMA
  const dispatch = useDispatch();

  const addOne = (whichOne) => {
    triggerClickEffect(whichOne);
    dispatch(addOneToLastOne(task_id));
  };

  const addFive = (whichOne) => {
    triggerClickEffect(whichOne);
    dispatch(addFiveToLastOne(task_id));
  };

  const addTen = (whichOne) => {
    triggerClickEffect(whichOne);
    dispatch(addTenToLastOne(task_id));
  };

  const reduceOne = (whichOne) => {
    triggerClickEffect(whichOne);
    dispatch(reduceOneLastOne(task_id));
  };

  const reduceFive = (whichOne) => {
    triggerClickEffect(whichOne);
    dispatch(reduceFiveLastOne(task_id));
  };

  const reduceTen = (whichOne) => {
    triggerClickEffect(whichOne);
    dispatch(reduceTenLastOne(task_id));
  };

  //YENİ BİR GÜNE GEÇİLMİŞSE LİSTELERE DEĞERİ 0 OLAN YENİ BİR INDEX EKLEME
  const addNew = () => {
    dispatch(addNewOne(task_id));
  };

  const date = new Date();

  useEffect(() => {
    if (
      lastDay !==
      `${date.getUTCDate()}-${date.getUTCMonth()}-${date.getUTCFullYear()}`
    ) {
      addNew();
      dispatch(updateDate(task_id));
    }
  }, []);

  //O ANKİ OBJEDEKİ(ÖRNEĞİN BİSİKLET) DAILYVALUES LİSTESİNDEN
  //O GÜN İÇİN GÜNLÜK HAFTALIK AYLIK DEĞERLERİ HESAPLAMA
  var day = dailyValues[dailyValues.length - 1];
  var week = 0,
    month = 0,
    i = 0;
  dailyValues.forEach((x) => {
    i < 7 ? (week += x) : (week = x);
    i < 7 ? i++ : (i = 0);
    month += x;
  });

  const [clickControlAddOne, setClickControlAddOne] = useState(false);
  const [clickControlAddFive, setClickControlAddFive] = useState(false);
  const [clickControlAddTen, setClickControlAddTen] = useState(false);
  const [clickControlReduceOne, setClickControlReduceOne] = useState(false);
  const [clickControlReduceFive, setClickControlReduceFive] = useState(false);
  const [clickControlReduceTen, setClickControlReduceTen] = useState(false);

  const [shrinkControlOne, setShrinkControlOne] = useState(false);
  const [shrinkControlFive, setShrinkControlFive] = useState(false);
  const [shrinkControlTen, setShrinkControlTen] = useState(false);

  const triggerClickEffect = (whichOne) => {
    if (whichOne === "addOne") {
      setClickControlAddOne(true);
      setShrinkControlOne(true);
      setTimeout(() => {
        setClickControlAddOne(false);
        setShrinkControlOne(false);
      }, 100);
    }
    if (whichOne === "addFive") {
      setClickControlAddFive(true);
      setShrinkControlFive(true);
      setTimeout(() => {
        setClickControlAddFive(false);
        setShrinkControlFive(false);
      }, 100);
    }
    if (whichOne === "addTen") {
      setClickControlAddTen(true);
      setShrinkControlTen(true);
      setTimeout(() => {
        setClickControlAddTen(false);
        setShrinkControlTen(false);
      }, 100);
    }
    if (whichOne === "reduceOne") {
      setClickControlReduceOne(true);
      setShrinkControlOne(true);
      setTimeout(() => {
        setClickControlReduceOne(false);
        setShrinkControlOne(false);
      }, 100);
    }
    if (whichOne === "reduceFive") {
      setClickControlReduceFive(true);
      setShrinkControlFive(true);
      setTimeout(() => {
        setClickControlReduceFive(false);
        setShrinkControlFive(false);
      }, 100);
    }
    if (whichOne === "reduceTen") {
      setClickControlReduceTen(true);
      setShrinkControlTen(true);
      setTimeout(() => {
        setClickControlReduceTen(false);
        setShrinkControlTen(false);
      }, 100);
    }
  };

  return (
    <Container>
      <Front
        onClick={flipTheCard}
        show={front}
        frontToBackTrigger={frontToBackTrigger}
        backToFrontTrigger={backToFrontTrigger}
      >
        <Top>
          <TaskName>
            <h4>{name}</h4>
            {type && <h6>({type})</h6>}
          </TaskName>
          <D>{day > 0 ? day : <>X</>}</D>
        </Top>
        <Bottom>
          <M>{month}</M>
          <W>{week}</W>
        </Bottom>
      </Front>

      <Back
        hide={front}
        frontToBackTrigger={frontToBackTrigger}
        backToFrontTrigger={backToFrontTrigger}
      >
        <DailyNumber onClick={flipTheCard}>
          {day > 0 ? day : <>_</>}
        </DailyNumber>
        <SetButtons>
          <FirstLine>
            <ReduceOne onClick={() => reduceOne("reduceOne")}>
              <SingleStick control={clickControlReduceOne} />
            </ReduceOne>
            <One shrink={shrinkControlOne}>1</One>
            <AddOne onClick={() => addOne("addOne")}>
              <LeftStick control={clickControlAddOne} />
              <RightStick control={clickControlAddOne} />
            </AddOne>
          </FirstLine>

          <SecondLine>
            <ReduceFive onClick={() => reduceFive("reduceFive")}>
              <SingleStick control={clickControlReduceFive} />
            </ReduceFive>
            <Five shrink={shrinkControlFive}>5</Five>
            <AddFive onClick={() => addFive("addFive")}>
              <LeftStick control={clickControlAddFive} />
              <RightStick control={clickControlAddFive} />
            </AddFive>
          </SecondLine>

          <ThirdLine>
            <ReduceTen onClick={() => reduceTen("reduceTen")}>
              <SingleStick control={clickControlReduceTen} />
            </ReduceTen>
            <Ten shrink={shrinkControlTen}>10</Ten>
            <AddTen onClick={() => addTen("addTen")}>
              <LeftStick control={clickControlAddTen} />
              <RightStick control={clickControlAddTen} />
            </AddTen>
          </ThirdLine>
        </SetButtons>
      </Back>
    </Container>
  );
}

export default TaskBox;

const Container = styled.div`
  width: 20rem;
  height: 10rem;
`;

const frontToBack = keyframes`
0%{
  transform:rotateY(0deg);
}
100%{
  transform: rotateY(90deg);
}
`;

const frontToBackCss = css`
  animation: ${frontToBack} 250ms linear;
`;

const backToFront = keyframes`
0%{
  transform:rotateY(-90deg);
}
100%{
  transform: rotateY(0deg);
}
`;

const backToFrontCss = css`
  animation: ${backToFront} 250ms linear;
`;

const Front = styled.div`
  width: 20rem;
  height: 10rem;
  border-radius: 20px;
  background-color: rgba(255, 158, 0, 0.95);
  box-shadow: 0 7px 30px 5px rgba(255, 158, 0, 0.3);
  font-size: 2rem;
  font-weight: 600;
  color: rgba(0, 31, 84);
  text-align: center;
  &:hover {
    // background-color: rgba(0, 180, 216, 0.95);
    // color: #fff;
    // box-shadow: 0 7px 30px 5px rgba(0, 180, 216, 0.4);
    box-shadow: 0 7px 30px 5px rgba(255, 158, 0, 0.7);
    transform: scale(1.05);
    transition: 0.1s;
    cursor: pointer;
  }
  display: ${(props) => `${props.show ? "flex" : "none"}`};
  flex-direction: column;
  position: absolute;
  ${(props) => props.backToFrontTrigger && backToFrontCss};
  ${(props) => props.frontToBackTrigger && frontToBackCss};
`;

const Top = styled.div`
  width: 100%;
  height: 55%;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const TaskName = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const D = styled.div`
  flex-grow: 2;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bottom = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  flex-grow: 1;
`;

const M = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const W = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Back = styled.div`
  width: 20rem;
  height: 10rem;
  border-radius: 20px;
  background-color: #4895efff;
  color: #f8f9fa;
  box-shadow: 0 7px 30px 5px #4895ef44;
  position: absolute;
  display: ${(props) => `${props.hide ? "none" : "flex"}`};
  // ${(props) => props.backToFrontTrigger && backToFrontCss};
  // ${(props) => props.frontToBackTrigger && frontToBackCss};
  //bu ikisinin sırası 1'deki olaylardan dolayı önemli, ikinci birincinin üzerine yazıyo
  &:hover {
    box-shadow: 0 7px 30px 5px #4895efaa;
    transform: scale(1.05);
    transition: 0.1s;
    cursor: pointer;
  }
`;

const DailyNumber = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 6rem;
  transition: 0.1s;
  &:hover {
    cursor: pointer;
    font-size: 6.3rem;
  }
`;

const SetButtons = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  font-weight: 600;
  font-size: 1.3rem;
`;

const shrinkClickEffect = keyframes`
0%{
  font-size: 1.3rem;
}
100%{
  font-size:1.3rem;
  text-shadow: 10px 10px 20px #555,
  -10px -10px 20px #555,
  10px -10px 20px #555,
  -10px 10px 20px #555;
}
`;

const shrinkClickEffectCss = css`
  animation: ${shrinkClickEffect} 50ms ease;
`;

const FirstLine = styled.div`
  display: flex;
  width: 100%;
  height: 33%;
`;
const ReduceOne = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-grow: 1;
  &:hover {
    cursor: pointer;
  }
`;
const One = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-grow: 0.5;
  ${(props) => props.shrink && shrinkClickEffectCss}
`;
const AddOne = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-grow: 1;
  &:hover {
    cursor: pointer;
  }
`;

const SecondLine = styled.div`
  display: flex;
  width: 100%;
  height: 33%;
`;
const ReduceFive = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-grow: 1;
  &:hover {
    cursor: pointer;
  }
`;
const Five = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-grow: 0.5;
  ${(props) => props.shrink && shrinkClickEffectCss}
`;
const AddFive = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-grow: 1;
  &:hover {
    cursor: pointer;
  }
`;

const ThirdLine = styled.div`
  display: flex;
  width: 100%;
  height: 34%;
`;
const ReduceTen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-grow: 1;
  &:hover {
    cursor: pointer;
  }
`;
const Ten = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-grow: 0.5;
  ${(props) => props.shrink && shrinkClickEffectCss}
`;
const AddTen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-grow: 1;
  &:hover {
    cursor: pointer;
  }
`;

const clickEffect = keyframes`
0%{
  transform:rotate(0deg);
}
100%{
  transform:rotate(360deg);
}
`;

//STYLED COMPONENTLERDE İÇ İÇE YAZMAK GEREKTİĞİNDE CSS KULLANIMI
const clickEffectCss = css`
  animation: ${clickEffect} 0.1s ease;
`;

const SingleStick = styled.div`
  width: 1.5rem;
  border-bottom: 3.5px solid #f8f9fa;
  position: absolute;
  ${(props) => props.control && clickEffectCss};
`;

const LeftStick = styled.div`
  width: 1.7rem;
  border-bottom: 3.5px solid #f8f9fa;
  position: absolute;
  ${(props) => props.control && clickEffectCss};
`;
const RightStick = styled.div`
  width: 1.5rem;
  border-bottom: 3.5px solid #f8f9fa;
  position: absolute;
  transform: rotate(90deg);
  ${(props) => props.control && clickEffectCss};
`;
