import { useEffect, useState } from 'react';
import { padNum } from '../helperFunctions/functions';
import { pomodoroMode } from '../data/data';
import Button from './Button';

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
                <Button className="pomodoro" onClick={() => setMode('pomodoro')}>
                    Pomodoro
                </Button>
                <Button className="pomodoro" onClick={() => setMode('short')}>
                    Short
                </Button>
                <Button className="pomodoro" onClick={() => setMode('long')}>
                    Long
                </Button>
            </div>
            <div className="display-timer">
                {padNum(Math.floor(timer.totalSeconds / 60))}:{padNum(Math.floor(timer.totalSeconds % 60))}
            </div>
            <div className="footer-pomodoro">
                <Button className="pomodoro" onClick={toggleRunning}>
                    {timer.isRunning ? 'Stop' : 'Start'}
                </Button>
            </div>
        </div>
    );
};

export default Pomodoro;
