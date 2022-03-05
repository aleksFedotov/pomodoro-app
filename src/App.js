import GlobalStyles from './styles/GlobalStyles';
import { useSelector, useDispatch } from 'react-redux';

import { pomodoroActions } from './store/pomodoro';

import { ReactComponent as Logo } from './assets/logo.svg';
import { ReactComponent as SettingsIcon } from './assets/icon-settings.svg';

import { AnimatePresence } from 'framer-motion';

import PomodoroWrapper from './componets/pomodoro-wrapper/PomodoroWrapper';
import PomodoroHeader from './componets/pomodoro-header/PomodoroHeader';
import Timer from './componets/timer/Timer';
import Modal from './componets/modal/Modal';

function App() {
  const dispatch = useDispatch();
  const pomodoro = useSelector((state) => state.pomodoro);

  const { isModalOpened } = pomodoro;

  const modalHandler = () => {
    dispatch(pomodoroActions.toggleModal());
  };

  return (
    <>
      <GlobalStyles />
      <PomodoroWrapper>
        <Logo className="logo" />
        <PomodoroHeader />
        <Timer />
        <SettingsIcon className="settings" onClick={modalHandler} />
      </PomodoroWrapper>
      <AnimatePresence>{isModalOpened && <Modal />}</AnimatePresence>
    </>
  );
}

export default App;
