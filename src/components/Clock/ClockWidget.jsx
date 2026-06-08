import { useEffect, useState } from 'react';
import { padNum, formatDate } from '../../helperFunctions/functions.js';
import './Clock.css';
import CardWidget from '../Card/CardWidget.jsx';

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
                  className={`currDate bg-clock-bg border-clock-border text-clock-text ${className} text-xxs/snug grid items-center text-center md:text-xs/snug lg:text-sm/snug`}
                  header="Clock"
                  accent="text-clock-accent"
            >
                  <div className="time pt-1 font-medium">
                        {currTime.hour}:{currTime.minutes}:{currTime.seconds}{' '}
                        {currTime.meridian}
                  </div>
                  <div className="date pb-1 font-medium">
                        {date.dayStr} {date.date} {date.year}
                  </div>
            </CardWidget>
      );
};

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
      return {
            hour: hour > 12 ? hour - 12 : hour,
            meridian: hour > 11 ? 'PM' : 'AM',
      };
}
export default ClockWidget;
