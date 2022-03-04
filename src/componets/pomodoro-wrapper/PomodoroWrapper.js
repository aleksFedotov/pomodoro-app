import React from 'react';

import { PomodoroWrap } from './PomodoroWrapperStyles';

const PomodoroWrapper = ({ children }) => {
  const font = 'Kumbh Sans';
  return <PomodoroWrap font={font}>{children}</PomodoroWrap>;
};

export default PomodoroWrapper;
