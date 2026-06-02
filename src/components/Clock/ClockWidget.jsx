import { useEffect, useRef, useState } from 'react';
import { padNum } from '../../helperFunctions/functions.js';
import './Clock.css';
import CardWidget from '../Card/CardWidget.jsx';
import { dayNames } from '../../data/data.js';
const ClockWidget = ({ className }) => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);
    const date = formatDate(time);
    const currTime = formatTime(time);
    return (
        <CardWidget
            className={`currDate bg-clock-bg border-clock-border text-clock-text ${className} text-center grid text-xxs/snug md:text-xs/snug lg:text-sm/snug items-center`}
            header="Clock"
            accent="text-clock-accent"
        >
            <div className="time font-medium pt-1">
                {currTime.hour}:{currTime.minutes}:{currTime.seconds} {currTime.meridian}
            </div>
            <div className="date font-medium pb-1">
                {date.day} {date.date} {date.year}
            </div>
        </CardWidget>
    );
};

function formatDate(time) {
    return { date: time.getDate(), day: dayNames[time.getDay()], year: time.getFullYear() };
}
function formatTime(time) {
    const hour = formatHours(time.getHours());
    return {
        hour: padNum(hour.hour),
        minutes: padNum(time.getMinutes()),
        seconds: padNum(time.getSeconds()),
        meridian: hour.meridian,
    };
}
function formatHours(hour) {
    if (hour === 0) return { hour: 12, meridian: 'AM' };
    return { hour: hour > 12 ? hour - 12 : hour, meridian: hour > 11 ? 'PM' : 'AM' };
}
export default ClockWidget;
