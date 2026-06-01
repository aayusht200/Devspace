import useLocalStorage from '../../hooks/useLocalStorage';
import './github.css';
import { gitData } from '../../GitHubData/gitData';
import Card from '../Card/Card.jsx';
import { padNum } from '../../helperFunctions/functions';
import { monthNames } from '../../data/data.js';

const Github = ({ className }) => {
    const [data] = useLocalStorage('github', gitData);
    return (
        <Card
            className={`github-data ${className} text-center gap-0.5 w-full h-fit grid text-xxs/snug md:text-xs/snug lg:text-sm/8 bg-github-bg text-github-text border-github-border`}
            header="Github"
            accent="text-github-accent"
        >
            <div className="profile-info grid grid-cols-3 items-center pl-2 pr-2 h-fit">
                <div className="profile-picture-container">
                    <a href={data.url} className="link" target="_blank" rel="noopener noreferrer">
                        <img
                            src={data.avatarUrl}
                            alt="github-profile-picture"
                            className="profile-picture w-4 md:w-6 lg:w-8 rounded-3xl aspect-auto "
                        />
                    </a>
                </div>
                <div className="user-info ">
                    <a href={data.url} className="link " target="_blank" rel="noopener noreferrer">
                        {data.name}
                    </a>
                </div>
                <div className="user-link justify-self-end">
                    <a href={data.url} className="link" target="_blank" rel="noopener noreferrer">
                        <img
                            className="w-4 aspect-square md:w-6 lg:w-8"
                            src="https://img.icons8.com/ios-glyphs/30/github.png"
                            alt="github"
                        />
                    </a>
                </div>
            </div>
            <RenderMap weeks={data.contributionCalendar.weeks} />
        </Card>
    );
};

function RenderMap({ weeks }) {
    return (
        <div className="heat-map flex justify-evenly bg-github-map-bg p-1 rounded-xs">
            {weeks.map((week, index) => (
                <RenderWeek key={`week-${index}`} week={week.contributionDays} />
            ))}
        </div>
    );
}

function RenderWeek({ week }) {
    const paddedWeek = [...week];
    while (paddedWeek.length < 7) {
        const tomorrow = new Date(paddedWeek[paddedWeek.length - 1].date);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const dummyData = {
            contributionCount: 0,
            date: `${tomorrow.getFullYear()}-${padNum(tomorrow.getMonth() + 1)}-${padNum(tomorrow.getDate())}`,
            contributionLevel: 'NONE',
        };
        paddedWeek.push(dummyData);
    }
    return (
        <div className="week grid gap-0.5">
            {paddedWeek.map((day) => (
                <RenderDay key={day.date} day={day} />
            ))}
        </div>
    );
}

function RenderDay({ day }) {
    const date = new Date(day.date);
    return (
        <div
            className={`map-block ${day.contributionLevel} h-0.5 md:h-1  lg:h-1.5 aspect-square border-0 rounded group relative`}
        >
            <div className="hidden group-hover:flex flex-col absolute bottom-full left-1/2 -translate-x-1/2 mb-1 whitespace-nowrap text-wrap rounded px-0.5 py-px text-label-xxxs  md:text-xxs lg:text-sm leading-none bg-bgColor-hover z-10">
                <span>
                    {day.contributionCount} contributions on {monthNames[date.getMonth()]} {date.getDate()}
                </span>
            </div>
        </div>
    );
}

export default Github;
