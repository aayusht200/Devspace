import useLocalStorage from '../../hooks/useLocalStorage';
import './github.css';
import { gitData } from '../../GitHubData/gitData';
import Card from '../Card/Card.jsx';
import { padNum } from '../../helperFunctions/functions';

const Github = ({ className }) => {
    const [data] = useLocalStorage('github', gitData);
    return (
        <Card className={`github-data ${className}`} header="Github">
            <div className="profile-info">
                <div className="profile-picture-container">
                    <img src={data.avatarUrl} alt="github-profile-picture" className="profile-picture" />
                </div>
                <div className="user-info">
                    <p className="user-name">{data.name}</p>
                    <p className="user-id">{data.login}</p>
                </div>
                <div className="user-link">
                    <a href={data.url} className="link" target="_blank" rel="noopener noreferrer">
                        <img
                            width="30"
                            height="30"
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
        <div className="heat-map">
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
        <div className="week">
            {paddedWeek.map((day) => (
                <RenderDay key={day.date} day={day} />
            ))}
        </div>
    );
}

function RenderDay({ day }) {
    return (
        <div className={`map-block ${day.contributionLevel}`}>
            <div className="hover-text">
                <p className="contribution-count">Contribution:{day.contributionCount}</p>
                <p className="date">Date:{day.date}</p>
            </div>
        </div>
    );
}

export default Github;
