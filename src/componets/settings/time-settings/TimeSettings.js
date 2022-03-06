import React from 'react';

import { TimeSelectWrapper } from './TimeSettingsStyles';
import { Heading } from '../SettingsStyles';
import TimeSelector from './time-selector/TimeSelector';

const TimeSettings = () => {
  return (
    <>
      <Heading>time (minutes)</Heading>
      <TimeSelectWrapper>
        <TimeSelector
          timer={'pomodoro'}
          defaultTime={'25'}
          min={'5'}
          max={'90'}
        />
        <TimeSelector
          timer={'short break'}
          defaultTime={'5'}
          min={'1'}
          max={'14'}
        />
        <TimeSelector
          timer={'long break'}
          defaultTime={'15'}
          min={'15'}
          max={'30'}
        />
      </TimeSelectWrapper>
    </>
  );
};

export default TimeSettings;
