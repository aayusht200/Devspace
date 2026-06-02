import { useEffect, useState } from 'react';
import { padNum } from '../../helperFunctions/functions.js';
import { pomodoroMode } from '../../data/data.js';
import Button from '../Button/Button.jsx';
import CardWidget from '../Card/CardWidget.jsx';
import useLocalStorage from '../../hooks/useLocalStorage.js';
import './Pomodoro.css';

const PomodoroWidget = ({ className }) => {
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
        <CardWidget
            className={`pomodoro-timer ${className} text-center  bg-pomodoro-bg text-pomodoro-text border-pomodoro-border text-xxs/snug md:text-xs/snug lg:text-sm/snug items-center`}
            header="Pomodoro Timer"
            accent="text-pomodoro-accent"
        >
            <div className="header-pomodoro grid grid-cols-3 items-center pb-1">
                <Button
                    className="pomodoro w-fit h-fit border-2 border-pomodoro-border text-pomodoro-accent hover:text-pomodoro-text hover:bg-pomodoro-accent justify-self-center pl-2 pr-2 rounded-xl hover:scale-105 duration-150 ease-in-out"
                    onClick={() => setMode('pomodoro')}
                >
                    Pomodoro
                </Button>
                <Button
                    className="pomodoro w-fit h-fit border-2 border-pomodoro-border text-pomodoro-accent hover:text-pomodoro-text hover:bg-pomodoro-accent justify-self-center pl-2 pr-2 rounded-xl hover:scale-105 duration-150 ease-in-out"
                    onClick={() => setMode('short')}
                >
                    Short
                </Button>
                <Button
                    className="pomodoro w-fit h-fit border-2 border-pomodoro-border text-pomodoro-accent hover:text-pomodoro-text hover:bg-pomodoro-accent justify-self-center pl-2 pr-2 rounded-xl hover:scale-105 duration-150 ease-in-out"
                    onClick={() => setMode('long')}
                >
                    Long
                </Button>
            </div>
            <div className="display-timer flex justify-evenly pb-1">
                <p className="w-fit h-fit self-center bg-pomodoro-accent text-white font-bold border-2 border-pomodoro-border pl-2 pr-2 rounded-xl  hover:text-pomodoro-accent hover:bg-transparent duration-150 ease-in-out">
                    {padNum(Math.floor(timer.totalSeconds / 60))}:{padNum(Math.floor(timer.totalSeconds % 60))}
                </p>
                <Button
                    onClick={toggleRunning}
                    className={`pomodoro w-fit h-fit border-2 ${timer.isRunning ? 'border-pomodoro-border text-pomodoro-accent hover:text-pomodoro-text hover:bg-pomodoro-accent hover:line-through' : 'border-pomodoro-border text-pomodoro-accent hover:text-pomodoro-text hover:bg-green-400'} justify-self-center pl-2 pr-2 rounded-xl hover:scale-105 duration-150 ease-in-out `}
                >
                    {timer.isRunning ? 'Stop' : 'Start'}
                </Button>
            </div>
        </CardWidget>
    );
};

export default PomodoroWidget;
