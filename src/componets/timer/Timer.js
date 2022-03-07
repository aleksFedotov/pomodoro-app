import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  TimerWrapper,
  OuterCircle,
  InnerCircle,
  ControlBtn,
  Time,
} from './TimerStyles';

import ProgressBar from './progress-bar/ProgressBar';

const Timer = () => {
  const { appliedSettings, timerType } = useSelector((state) => state.pomodoro);
  const { color, font, timerSettings } = appliedSettings;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentTime, setCurrentTime] = useState(timerSettings[timerType]);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [progress, setProgress] = useState(100);

  // time format function

  const formatTime = (time) => {
    const minutes = ~~((time % 3600) / 60);
    const secodns = ~~time % 60;
    setMinutes(minutes);
    setSeconds(secodns);
  };

  // check winow width

  const changeWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', changeWindowWidth);

    return () => {
      window.removeEventListener('resize', changeWindowWidth);
    };
  }, []);

  // settings profress bar radius and store width

  let radius = 182;
  let stroekWidth = 12;

  if (windowWidth <= 480) {
    radius = 134;
    stroekWidth = 8;
  }

  // changing time text settings basd on font family

  let fontWeight = '700';

  if (font === 'Space Mono') {
    fontWeight = '500';
  }

  useEffect(() => {
    formatTime(currentTime);
  }, [currentTime]);

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
          <Time fontWeight={fontWeight}>
            {minutes.toString().padStart(2, '0')}:
            {seconds.toString().padStart(2, '0')}
          </Time>
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
