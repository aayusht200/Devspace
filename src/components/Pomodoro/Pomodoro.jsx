import { useEffect, useState } from 'react';
import { padNum } from '../../helperFunctions/functions.js';
import { pomodoroMode } from '../../data/data.js';
import Button from '../Button/Button.jsx';
import Card from '../Card/Card.jsx';
import useLocalStorage from '../../hooks/useLocalStorage.js';
import './Pomodoro.css';

const Pomodoro = ({ className }) => {
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
        <Card
            className={`pomodoro-timer ${className} text-center  bg-pomodoro-bg text-pomodoro-text border-pomodoro-border text-xxs/snug md:text-xs/snug lg:text-sm/snug items-center`}
            header="Pomodoro Timer"
            accent="text-pomodoro-accent"
        >
            <div className="header-pomodoro grid grid-cols-3 items-center">
                <Button
                    className="pomodoro w-fit h-fit  bg-pomodoro-accent justify-self-center pl-2 pr-2 rounded"
                    onClick={() => setMode('pomodoro')}
                >
                    Pomodoro
                </Button>
                <Button
                    className="pomodoro w-fit h-fit  justify-self-center bg-pomodoro-accent  pl-2 pr-2 rounded"
                    onClick={() => setMode('short')}
                >
                    Short
                </Button>
                <Button
                    className="pomodoro w-fit h-fit  justify-self-center bg-pomodoro-accent  pl-2 pr-2 rounded"
                    onClick={() => setMode('long')}
                >
                    Long
                </Button>
            </div>
            <div className="display-timer flex justify-evenly pb-1">
                <p className="w-fit h-fit self-center bg-pomodoro-accent text-black font-bold  pl-1 pr-1 rounded">
                    {padNum(Math.floor(timer.totalSeconds / 60))}:{padNum(Math.floor(timer.totalSeconds % 60))}
                </p>
                <Button
                    className="pomodoro  bg-pomodoro-accent  pl-1 pr-1 rounded cursor-pointer "
                    onClick={toggleRunning}
                >
                    {timer.isRunning ? 'Stop' : 'Start'}
                </Button>
            </div>
        </Card>
    );
};

export default Pomodoro;
