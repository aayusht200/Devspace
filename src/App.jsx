import Clock from './components/Clock';
import Pomodoro from './components/Pomodoro';
import { ReadingList } from './components/ReadingList';
import StatusBar from './components/StatusBar/StatusBar';
import './App.css';

function App() {
    return (
        <div>
            <Clock />
            <Pomodoro />
            <ReadingList />
        </div>
    );
}

export default App;
