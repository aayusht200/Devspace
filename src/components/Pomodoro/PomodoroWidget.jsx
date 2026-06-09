import { useContext, useEffect, useState } from 'react';
import { padNum } from '../../helperFunctions/functions.js';
import Button from '../Button/Button.jsx';
import CardWidget from '../Card/CardWidget.jsx';
import './Pomodoro.css';
import { DataContext } from '../../context/DataContext.js';
const PomodoroWidget = ({ className }) => {
      const { data, setData } = useContext(DataContext);
      const timer = data.pomodoro.modes[data.pomodoro.currMode];
      function handleModeChange(value) {
            setData((prev) => ({
                  ...prev,
                  pomodoro: { ...prev.pomodoro, currMode: value },
            }));
      }
      function toggleRunning() {
            setData((prev) => ({
                  ...prev,
                  pomodoro: {
                        ...prev.pomodoro,
                        modes: {
                              ...prev.pomodoro.modes,
                              [timer.mode]: {
                                    ...prev.pomodoro.modes[timer.mode],
                                    isRunning:
                                          !prev.pomodoro.modes[timer.mode]
                                                .isRunning,
                              },
                        },
                  },
            }));
      }
      useEffect(() => {
            if (!timer.isRunning) return;
            const interval = setInterval(() => {
                  setData((prev) => ({
                        ...prev,
                        pomodoro: {
                              ...prev.pomodoro,
                              modes: {
                                    ...prev.pomodoro.modes,
                                    [timer.mode]: {
                                          ...prev.pomodoro.modes[timer.mode],
                                          totalSeconds:
                                                prev.pomodoro.modes[timer.mode]
                                                      .totalSeconds - 1,
                                    },
                              },
                        },
                  }));
            }, 1000);
            return () => clearInterval(interval);
      }, [timer.isRunning, setData]);
      return (
            <CardWidget
                  className={`pomodoro-timer ${className} bg-pomodoro-bg text-pomodoro-text border-pomodoro-border lg:text-md/snug items-center text-xs md:text-sm/snug`}
                  header="Pomodoro Timer"
                  accent="hover:text-pomodoro-accent"
            >
                  <div className="header-pomodoro grid grid-cols-3 items-center">
                        <Button
                              className="pomodoro border-pomodoro-border text-pomodoro-accent hover:text-pomodoro-text hover:bg-pomodoro-accent justify-self-center"
                              onClick={() => handleModeChange('pomodoro')}
                        >
                              Pomodoro
                        </Button>
                        <Button
                              className="pomodoro border-pomodoro-border text-pomodoro-accent hover:text-pomodoro-text hover:bg-pomodoro-accent justify-self-center"
                              onClick={() => handleModeChange('short')}
                        >
                              Short
                        </Button>
                        <Button
                              className="pomodoro border-pomodoro-border text-pomodoro-accent hover:text-pomodoro-text hover:bg-pomodoro-accent justify-self-center"
                              onClick={() => handleModeChange('long')}
                        >
                              Long
                        </Button>
                  </div>
                  <div className="display-timer flex justify-evenly pb-1">
                        <p className="bg-pomodoro-accent border-pomodoro-border hover:text-pomodoro-accent h-fit w-fit self-center rounded-xl border-2 pr-2 pl-2 font-bold text-white duration-150 ease-in-out hover:bg-transparent">
                              {padNum(Math.floor(timer.totalSeconds / 60))}:
                              {padNum(Math.floor(timer.totalSeconds % 60))}
                        </p>
                        <Button
                              onClick={toggleRunning}
                              className={`pomodoro h-fit w-fit border-2 ${timer.isRunning ? 'border-pomodoro-border text-pomodoro-accent hover:text-pomodoro-text hover:bg-pomodoro-accent hover:line-through' : 'border-pomodoro-border text-pomodoro-accent hover:text-pomodoro-text hover:bg-green-400'} justify-self-center rounded-xl pr-2 pl-2 duration-150 ease-in-out hover:scale-105`}
                        >
                              {timer.isRunning ? 'Stop' : 'Start'}
                        </Button>
                  </div>
            </CardWidget>
      );
};

export default PomodoroWidget;
