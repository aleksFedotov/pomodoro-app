import React from 'react';

import { Header, TimeSelectWrapper } from './TimeSettingsStyles';
import TimeSelector from './time-selector/TimeSelector';

const TimeSettings = () => {
  return (
    <>
      <Header>time (minutes)</Header>
      <TimeSelectWrapper>
        <TimeSelector timer={'pomodoro'} />
      </TimeSelectWrapper>
    </>
  );
};

export default TimeSettings;
