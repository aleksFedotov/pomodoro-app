import GlobalStyles from './styles/GlobalStyles';

import { ReactComponent as Logo } from './assets/logo.svg';

import PomodoroWrapper from './componets/pomodoro-wrapper/PomodoroWrapper';
import PomodoroHeader from './componets/pomodoro-header/PomodoroHeader';
import Timer from './componets/timer/Timer';

function App() {
  return (
    <>
      <GlobalStyles />
      <PomodoroWrapper>
        <Logo />
        <PomodoroHeader />
        <Timer />
      </PomodoroWrapper>
    </>
  );
}

export default App;
