import './App.css';
import ClockWidget from './components/Clock/ClockWidget';
import GithubWidget from './components/Github/GithubWidget';
import PomodoroWidget from './components/Pomodoro/PomodoroWidget';
import ProjectTrackerWidget from './components/ProjectTracker/ProjectTrackerWidget';
import ReadingListWidget from './components/ReadingList/ReadingListWidget';
import SpotifyWidget from './components/Spotify/SpotifyWidget';
import TasksWidget from './components/Tasks/TasksWidget';

function App() {
    localStorage.clear();
    return (
        <div className="grid grid-cols-3 grid-rows-8 gap-1 p-1 w-screen h-screen bg-dashboard-bg border-dashboard-bg text-dashboard-bg">
            {/* col-1 */}
            <ClockWidget className="col-start-1 row-span-1" />
            <ReadingListWidget className="col-start-1 row-span-4" />
            <GithubWidget className="col-start-1 row-span-2" />
            <SpotifyWidget className="col-start-1 row-span-1 col-span-2" />
            {/* col-2 */}
            <PomodoroWidget className="col-start-2 row-start-1 row-span-1" />
            <ProjectTrackerWidget className="col-start-2 row-start-2 row-span-6" />
            {/* col-3 */}
            <TasksWidget className="col-start-3 row-start-1 row-span-8" />
        </div>
    );
}

export default App;
