import React from 'react';

import { ProgressSvg, SvgCircle } from './ProgressBarStyles';

const ProgressBar = () => {
  const color = 'orange';
  return (
    <ProgressSvg>
      <SvgCircle
        themeColor={color}
        fill="transparent"
        strokeWidth={12}
        strokeDasharray={100}
        strokeDashoffset={100}
        r={161}
        cx={182}
        cy={182}
        stroke-linecap="round"
      />
    </ProgressSvg>
  );
};

export default ProgressBar;
