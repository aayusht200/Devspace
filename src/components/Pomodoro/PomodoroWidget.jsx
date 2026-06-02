import { useContext, useEffect, useState } from 'react';
import { padNum } from '../../helperFunctions/functions.js';
import Button from '../Button/Button.jsx';
import CardWidget from '../Card/CardWidget.jsx';
import './Pomodoro.css';

const PomodoroWidget = ({ className }) => {
	const { data, setData } = useContext(DataContext);
	const [mode, setMode] = useState('pomodoro');
	const timer = data.pomodoro[mode];
	function handleModeChange(currMode) {
		setMode(currMode);
	}
	useEffect(() => {
		if (!timer.isRunning) return;

		const intervalId = setInterval(() => {
			setData((prev) => {
				const currentTimer = prev.pomodoro[mode];

				if (currentTimer.totalSeconds === 0) {
					return {
						...prev,
						pomodoro: {
							...prev.pomodoro,
							[mode]: {
								...currentTimer,
								isRunning: false,
							},
						},
					};
				}

				return {
					...prev,
					pomodoro: {
						...prev.pomodoro,
						[mode]: {
							...currentTimer,
							totalSeconds:
								currentTimer.totalSeconds - 1,
						},
					},
				};
			});
		}, 1000);

		return () => clearInterval(intervalId);
	}, [timer.isRunning, mode, setData]);
	function toggleRunning() {
		setData((prev) => ({
			...prev,
			pomodoro: {
				...prev.pomodoro,
				[mode]: {
					...prev.pomodoro[mode],
					isRunning: !prev.pomodoro[mode].isRunning,
				},
			},
		}));
	}
	return (
		<CardWidget
			className={`pomodoro-timer ${className} bg-pomodoro-bg text-pomodoro-text border-pomodoro-border text-xxs/snug items-center text-center md:text-xs/snug lg:text-sm/snug`}
			header="Pomodoro Timer"
			accent="text-pomodoro-accent"
		>
			<div className="header-pomodoro grid grid-cols-3 items-center pb-1">
				<Button
					className="pomodoro border-pomodoro-border text-pomodoro-accent hover:text-pomodoro-text hover:bg-pomodoro-accent h-fit w-fit justify-self-center rounded-xl border-2 pr-2 pl-2 duration-150 ease-in-out hover:scale-105"
					onClick={() => handleModeChange('pomodoro')}
				>
					Pomodoro
				</Button>
				<Button
					className="pomodoro border-pomodoro-border text-pomodoro-accent hover:text-pomodoro-text hover:bg-pomodoro-accent h-fit w-fit justify-self-center rounded-xl border-2 pr-2 pl-2 duration-150 ease-in-out hover:scale-105"
					onClick={() => handleModeChange('short')}
				>
					Short
				</Button>
				<Button
					className="pomodoro border-pomodoro-border text-pomodoro-accent hover:text-pomodoro-text hover:bg-pomodoro-accent h-fit w-fit justify-self-center rounded-xl border-2 pr-2 pl-2 duration-150 ease-in-out hover:scale-105"
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
