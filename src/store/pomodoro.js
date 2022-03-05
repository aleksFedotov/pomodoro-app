import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  isModalOpened: false,
  settings: {
    currentTimer: 'pomodoro',
    selectedColor: 'orange',
    selectedFont: 'Kumbh Sans',
    timerSettings: {
      pomodoro: 25,
      short: 5,
      long: 10,
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
  },
});

export const pomodoroActions = pomodoroSlice.actions;

const store = configureStore({
  reducer: { pomodoro: pomodoroSlice.reducer },
});

export default store;
