import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/src/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: #0d0d0d;
`;

const Main = () => {
  const [position, setPosition] = useState(0);
  const ref = useRef(null);

  //getScrollProgress
  const progress = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top top",
        onUpdate: (self) => {
          setPosition(self.progress);
        },
      },
    });
  };

  useEffect(() => {
    progress();
  }, []);

  useEffect(() => {
    console.log(position);
  }, [position]);
  return (
    <>
      <ProgressBar progress={position}></ProgressBar>
      <MainContainer ref={ref}>
        <Container> </Container>
        <Container></Container>
        <Container></Container>
        <Container> </Container>
        <Container></Container>
        <Container></Container>
        <Container> </Container>
        <Container></Container>
        <Container></Container>
        <Container> </Container>
        <Container></Container>
        <Container></Container>
      </MainContainer>
      <Container></Container>
    </>
  );
};

export default Main;
