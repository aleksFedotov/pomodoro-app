import React from 'react';

import { Title, SelectorBox } from './TimeSelectorStyles';

const TimeSelector = ({ timer }) => {
  return (
    <SelectorBox data-timer={timer}>
      <Title>{timer}</Title>
      <label htmlFor="pomodoro">pomodoro</label>
      <input
        type="number"
        name="pomodoro"
        id="pomodoro"
        min="5"
        max="90"
        defaultValue={25}
      />
    </SelectorBox>
  );
};

export default TimeSelector;
