import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  isModalOpened: false,
  color: 'orange',
  font: 'Kumbh Sans',
  timerType: 'pomodoro',
  timerSettingsSelected: {
    pomodoro: 1500,
    short: 300,
    long: 900,
  },

  appliedSettings: {
    color: 'orange',
    font: 'Kumbh Sans',
    timerSettings: {
      pomodoro: 1500,
      short: 300,
      long: 900,
    },
  },
};

const pomodoroSlice = createSlice({
  name: 'pomodoro',
  initialState,
  reducers: {
    toggleModal(state) {
      state.isModalOpened = !state.isModalOpened;
    },
    updateTimersSettings(state, action) {
      state.timerSettingsSelected[action.payload.timerType] =
        action.payload.time;
    },
    updateColorOrFont(state, action) {
      state[action.payload.setting] = action.payload.value;
    },
    applySettings(state) {
      state.appliedSettings = {
        color: state.color,
        font: state.font,
        timerSettings: {
          pomodoro: state.timerSettingsSelected.pomodoro,
          short: state.timerSettingsSelected.short,
          long: state.timerSettingsSelected.long,
        },
      };
    },
    updateTimerType(state, action) {
      state.timerType = action.payload;
    },
  },
});

export const pomodoroActions = pomodoroSlice.actions;

const store = configureStore({
  reducer: { pomodoro: pomodoroSlice.reducer },
});

export default store;
