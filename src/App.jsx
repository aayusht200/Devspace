import Clock from './components/Clock';
import Pomodoro from './components/Pomodoro';
import { ReadingList } from './components/ReadingList';
import StatusBar from './components/StatusBar/StatusBar';
import ProjectTracker from './components/ProjectTracker';
import Tasks from './components/Tasks';
import Github from './components/Github';
import './App.css';

function App() {
    localStorage.clear();
    return (
        <div>
            {/* <Clock /> */}
            {/* <Pomodoro /> */}
            {/* <ReadingList /> */}
            {/* <ProjectTracker /> */}
            {/* <Tasks /> */}
            <Github />
        </div>
    );
}

export default App;
