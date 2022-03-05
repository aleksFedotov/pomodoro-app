import React from 'react';

import { useDispatch } from 'react-redux';
import { pomodoroActions } from '../../store/pomodoro';

import { SettingsHeader, SettingsContentWrapper } from './SettingsStyles';
import { ReactComponent as Close } from '../../assets/icon-close.svg';
import TimeSettings from './time-settings/TimeSettings';

const Settings = () => {
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(pomodoroActions.toggleModal());
  };

  const ssumbitHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <>
      <SettingsHeader>
        <h2>Settings</h2>
        <Close className="closeBtn" onClick={closeHandler} />
      </SettingsHeader>
      <SettingsContentWrapper>
        <TimeSettings />
        <button onClick={ssumbitHandler}>Apply</button>
      </SettingsContentWrapper>
    </>
  );
};

export default Settings;
