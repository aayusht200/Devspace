import { useEffect, useRef, useState } from 'react';
import { padNum } from '../../helperFunctions/functions.js';
import './Clock.css';
import Card from '../Card/Card.jsx';
const Clock = ({ className }) => {
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
        <Card className={`currDate ${className}`} header="Clock">
            <div className="time">
                {currTime.hour}:{currTime.minutes}:{currTime.seconds} {currTime.meridian}
            </div>
            <div className="date">
                {date.day} {date.date} {date.year}
            </div>
        </Card>
    );
};

function formatDate(time) {
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
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
export default Clock;
