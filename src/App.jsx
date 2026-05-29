import Clock from './components/Clock/Clock';
import Pomodoro from './components/Pomodoro/Pomodoro';
import ReadingList from './components/ReadingList/ReadingList';
import ProjectTracker from './components/ProjectTracker/ProjectTracker';
import Tasks from './components/Tasks/Tasks';
import Github from './components/Github/Github';
import Spotify from './components/Spotify/Spotify';
import './App.css';

function App() {
    // localStorage.clear();
    return (
        <div className="grid gap-1 p-1 grid-cols-3 grid-rows-8 w-screen h-screen">
            {/* col-1 */}
            <Clock className="col-start-1 row-span-2" />
            <ReadingList className="col-start-1 row-span-3" />
            <Github className="col-start-1 row-span-2" />
            <Spotify className="col-start-1 row-span-1 col-span-2" />
            {/* col-2 */}
            <Pomodoro className="col-start-2 row-start-1 row-span-1" />
            <ProjectTracker className="col-start-2 row-start-2 row-span-6" />
            {/* col-3 */}
            <Tasks className="col-start-3 row-start-1 row-span-8" />
        </div>
    );
}

export default App;
