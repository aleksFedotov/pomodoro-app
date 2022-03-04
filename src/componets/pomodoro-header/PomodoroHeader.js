import React from 'react';
import { useState } from 'react';

import {
  HeaderWrapper,
  TimerTypeBtn,
  Selector,
  BtnWrapper,
} from './PomodoroHeaderStyles';

const PomodoroHeader = () => {
  const [timerType, setTimerType] = useState('pomodoro');

  const selectTypeHandler = (e) => {
    setTimerType(e.target.dataset.type);
  };

  let position;

  if (timerType === 'pomodoro') {
    position = '0%';
  } else if (timerType === 'short break') {
    position = '50%';
  } else {
    position = '100%';
  }
  const color = 'orange';
  return (
    <HeaderWrapper>
      <BtnWrapper>
        <TimerTypeBtn
          data-type="pomodoro"
          isSelected={timerType === 'pomodoro'}
          onClick={selectTypeHandler}
        >
          pomodoro
        </TimerTypeBtn>
        <TimerTypeBtn
          data-type="short break"
          isSelected={timerType === 'short break'}
          onClick={selectTypeHandler}
        >
          short break
        </TimerTypeBtn>
        <TimerTypeBtn
          data-type="long break"
          isSelected={timerType === 'long break'}
          onClick={selectTypeHandler}
        >
          long break
        </TimerTypeBtn>
        <Selector colorTheme={color} position={position} />
      </BtnWrapper>
    </HeaderWrapper>
  );
};

export default PomodoroHeader;
