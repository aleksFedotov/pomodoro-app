import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pomodoroActions } from '../../store/pomodoro';

import {
  TimerWrapper,
  OuterCircle,
  InnerCircle,
  ControlBtn,
} from './TimerStyles';

import ProgressBar from './progress-bar/ProgressBar';
import Display from './display/Display';

const Timer = () => {
  const dispatch = useDispatch();
  const { appliedSettings, timerType, isRunning } = useSelector(
    (state) => state.pomodoro
  );
  const { color, timerSettings } = appliedSettings;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [secondsLeft, setSecondsLeft] = useState(timerSettings[timerType]);

  const [progress, setProgress] = useState(100);

  const initialTime = timerSettings[timerType];

  // check winow width

  const changeWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  const controlHandler = () => {
    if (secondsLeft === 0) {
      setSecondsLeft(timerSettings[timerType]);
    } else {
      dispatch(pomodoroActions.toggleIsRunnning());
    }
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

  useEffect(() => {
    setSecondsLeft(timerSettings[timerType]);
  }, [timerType, timerSettings]);

  useEffect(() => {
    const currentProgress = (secondsLeft / initialTime) * 100;
    setProgress(currentProgress);
  }, [secondsLeft, initialTime]);

  useEffect(() => {
    if (isRunning) {
      if (secondsLeft === 0) return;
      let timer = setInterval(() => {
        setSecondsLeft((secondsLeft) => secondsLeft - 1);
        console.log(secondsLeft);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isRunning, secondsLeft]);
  return (
    <TimerWrapper>
      <OuterCircle>
        <InnerCircle>
          <Display secondsLeft={secondsLeft} />
          <ControlBtn themeColor={color} onClick={controlHandler}>
            {secondsLeft !== 0 && <h3>{isRunning ? 'Pause' : 'Start'}</h3>}

            {secondsLeft === 0 && <h3>restart</h3>}
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
