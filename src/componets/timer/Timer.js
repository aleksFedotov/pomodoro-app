import React, { useEffect, useState } from 'react';

import {
  TimerWrapper,
  OuterCircle,
  InnerCircle,
  ControlBtn,
} from './TimerStyles';

import ProgressBar from './progress-bar/ProgressBar';

const Timer = () => {
  const color = 'orange';
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [progress, setProgress] = useState(78);

  const changeWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', changeWindowWidth);

    return () => {
      window.removeEventListener('resize', changeWindowWidth);
    };
  }, []);

  let radius = 182;
  let stroekWidth = 12;

  if (windowWidth <= 480) {
    radius = 134;
    stroekWidth = 8;
  }

  // useEffect(() => {
  //   if (progress > 0) {
  //     let timer = setInterval(() => {
  //       setProgress((prevState) => prevState - 1);
  //       console.log(progress);
  //     }, 1000);
  //     return () => clearInterval(timer);
  //   }
  // }, [progress]);
  return (
    <TimerWrapper>
      <OuterCircle>
        <InnerCircle>
          <h1>17:59</h1>
          <ControlBtn themeColor={color}>
            <h3>Start</h3>
          </ControlBtn>
          <ProgressBar
            progress={progress}
            radius={radius}
            stroekWidth={stroekWidth}
          />
        </InnerCircle>
      </OuterCircle>
    </TimerWrapper>
  );
};

export default Timer;
