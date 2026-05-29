import Clock from './components/Clock/Clock';
import Pomodoro from './components/Pomodoro/Pomodoro';
import ReadingList from './components/ReadingList/ReadingList';
import ProjectTracker from './components/ProjectTracker/ProjectTracker';
import Tasks from './components/Tasks/Tasks';
import Github from './components/Github/Github';
import './App.css';

function App() {
    localStorage.clear();
    return (
        <div>
            <Clock />
            <Pomodoro />
            <ReadingList />
            <ProjectTracker />
            <Tasks />
            <Github />
        </div>
    );
}

export default App;
