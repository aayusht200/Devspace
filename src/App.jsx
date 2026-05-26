import Clock from './components/Clock';
import Pomodoro from './components/Pomodoro';
import './App.css';

function App() {
    return (
        <div>
            <h1>
                <Clock />
            </h1>
            <Pomodoro />
        </div>
    );
}

export default App;
