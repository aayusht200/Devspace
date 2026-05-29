import useLocalStorage from '../hooks/useLocalStorage';
import { gitData } from '../GitHubData/gitData';
import Card from './Card/Card';

const Github = () => {
    const [data] = useLocalStorage('github', gitData);

    return (
        <Card className="github-data" header="Github">
            <RenderMap weeks={data.contributionCalendar.weeks} />
        </Card>
    );
};

function RenderMap({ weeks }) {
    return (
        <div className="heat-map">
            {weeks.map((week, index) => (
                <RenderWeek key={`week-${index}`} week={week.contributionDays} />
            ))}
        </div>
    );
}

function RenderWeek({ week }) {
    return (
        <div className="week">
            {week.map((day) => (
                <RenderDay key={day.date} day={day} />
            ))}
        </div>
    );
}

function RenderDay({ day }) {
    return (
        <div className={`map-block ${day.contributionLevel}`}>
            <span className="hover-text">{day.contributionCount}</span>
        </div>
    );
}

export default Github;
