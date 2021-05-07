import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const ProgressBarContainer = styled.div`
  width: 90%;
  height: 10px;
  padding: 10px;
  margin: auto;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
`;

const Progress = styled.div`
  width: 0;
  height: 100%;
  background-color: blue;
  border-radius: 10px;
  margin: 0;
`;

const ProgressBar = (props) => {
  const ref = useRef(null);

  //animation
  const animation = () => {
    const tl = gsap.timeline();
    tl.to(ref.current, { width: `${props.progress * 100}%` });
  };

  useEffect(() => {
    animation();
  }, [props.progress]);
  return (
    <>
      {" "}
      <ProgressBarContainer>
        <Progress ref={ref}></Progress>
      </ProgressBarContainer>{" "}
    </>
  );
};

export default ProgressBar;
