import { useEffect, useState } from 'react';
import { padNum } from '../../helperFunctions/functions.js';
import { pomodoroMode } from '../../data/data.js';
import Button from '../Button/Button.jsx';
import Card from '../Card/Card.jsx';
import useLocalStorage from '../../hooks/useLocalStorage.js';
import './Pomodoro.css';

const Pomodoro = () => {
    const [data, setData] = useLocalStorage('pomodoro', pomodoroMode);
    const [timer, setTimer] = useState(data.pomodoro);
    function setMode(currMode) {
        setTimer({ ...data[currMode] });
    }
    useEffect(() => {
        if (!timer.isRunning) return;
        const intervalId = setInterval(() => {
            setTimer((prev) => {
                if (prev.totalSeconds === 0) {
                    return {
                        ...data[prev.mode],
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
        <Card className="pomodoro-timer" header="Pomodoro Timer">
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
        </Card>
    );
};

export default Pomodoro;
