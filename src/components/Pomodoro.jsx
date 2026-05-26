import { useEffect, useState } from 'react';
import { padNum } from '../helperFunctions/functions';
import { pomodoroMode } from '../data/data';

const Pomodoro = () => {
    const [timer, setTimer] = useState(pomodoroMode.pomodoro);
    function setMode(currMode) {
        setTimer({ ...pomodoroMode[currMode] });
    }
    useEffect(() => {
        if (!timer.isRunning) return;
        const intervalId = setInterval(() => {
            setTimer((prev) => {
                if (prev.totalSeconds === 0) {
                    return {
                        ...pomodoroMode[prev.mode],
                        isRunning: false,
                    };
                }
                return {
                    ...prev,
                    totalSeconds: prev.totalSeconds - 1,
                };
            });
        }, 1000);
        return () => clearInterval(intervalId);
    }, [timer.isRunning]);
    function toggleRunning() {
        setTimer((prev) => ({ ...prev, isRunning: !prev.isRunning }));
    }
    return (
        <div className="pomodoro-timer">
            <div className="header-pomodoro">
                <button className="btn" onClick={() => setMode('pomodoro')}>
                    Pomodoro
                </button>
                <button className="btn" onClick={() => setMode('short')}>
                    Short
                </button>
                <button className="btn" onClick={() => setMode('long')}>
                    Long
                </button>
            </div>
            <div className="display-timer">
                {padNum(Math.floor(timer.totalSeconds / 60))}:{padNum(Math.floor(timer.totalSeconds % 60))}
            </div>
            <div className="footer-pomodoro">
                <button className="btn" onClick={() => toggleRunning()}>
                    {timer.isRunning ? 'Stop' : 'Start'}
                </button>
            </div>
        </div>
    );
};

export default Pomodoro;
