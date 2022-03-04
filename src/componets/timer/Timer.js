import React from 'react';

import {
  TimerWrapper,
  OuterCircle,
  InnerCircle,
  ControlBtn,
} from './TimerStyles';

import ProgressBar from './progress-bar/ProgressBar';

const Timer = () => {
  const color = 'orange';
  return (
    <TimerWrapper>
      <OuterCircle>
        <InnerCircle>
          <h1>17:59</h1>
          <ControlBtn themeColor={color}>
            <h3>Start</h3>
          </ControlBtn>
          <ProgressBar />
        </InnerCircle>
      </OuterCircle>
    </TimerWrapper>
  );
};

export default Timer;
