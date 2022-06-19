//LOADİNG ANİMASYON
const DonenceKutusu = styled.div`
  width: 20rem;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
`;
const Loader = styled.div`
  position: relative;
  width: 6.4rem;
  height: 6.4rem;
  border: 4px solid rgba(74, 74, 74);
  overflow: hidden;
  border-radius: 50%;
  box-shadow: -5px -5px 5px rgba(255, 255, 255, 0.1),
    10px 10px 10px rgba(0, 0, 0, 0.4),
    inset -5px -5px 5px rgba(255, 255, 255, 0.2),
    inset 10px 10px 10px rgba(0, 0, 0, 0.4);
  &:before {
    content: "";
    position: absolute;
    top: 0.8rem;
    left: 0.8rem;
    right: 0.8rem;
    bottom: 0.8rem;
    background: rgba(74, 74, 74);
    border-radius: 50%;
    border: 2px solid rgba(74, 74, 74);
    box-shadow: inset -2px -2px 5px rgba(255, 255, 255, 0.2),
      inset 3px 3px 5px rgba(0, 0, 0, 0.5);
    z-index: 10;
  }
`;
const animate = keyframes`
0%{
  transform:rotate(0deg);
}
100%{
  transform:rotate(360deg);
}
`;
const Span = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(
    rgba(0, 31, 84),
    rgba(3, 64, 120),
    rgba(255, 133, 0)
  );
  filter: blur(10px);
  animation: ${animate} 0.5s linear infinite;
`;

/*------------------------------------------------------------------------------------------------*/

const doubleJump = keyframes`
  0% {
    transform: translate(0px, 0px);
  }
  10%{
    transform: translate(0px, 5px);
  }
  40% {
    transform: translate(0px, 0px);
  }
  55%{
    transform: translate(0px, 5px);
  }
  100%{
    transform: translate(0px, 0px);
  }
`;

/*------------------------------------------------------------------------------------------------*/
