import useLocalStorage from '../../hooks/useLocalStorage';
import './github.css';
import { gitData } from '../../GitHubData/gitData';
import CardWidget from '../Card/CardWidget.jsx';
import { padNum } from '../../helperFunctions/functions';
import { monthNames } from '../../data/data.js';

const GithubWidget = ({ className }) => {
      const [data] = useLocalStorage('github', gitData);
      return (
            <CardWidget
                  className={`github-data ${className} bg-github-bg text-github-text border-github-border grid gap-0.5  text-xs md:text-sm/snug lg:text-sm`}
                  header="Github"
                  accent="text-github-accent"
            >
                  <div className="profile-info grid h-fit grid-cols-3 items-center pr-2 pl-2">
                        <div className="profile-picture-container">
                              <a
                                    href={data.url}
                                    className="link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                              >
                                    <img
                                          src={data.avatarUrl}
                                          alt="github-profile-picture"
                                          className="profile-picture aspect-auto w-6 rounded-3xl md:w-8 lg:w-10"
                                    />
                              </a>
                        </div>
                        <div className="user-info">
                              <a
                                    href={data.url}
                                    className="link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                              >
                                    {data.name}
                              </a>
                        </div>
                        <div className="user-link justify-self-end">
                              <a
                                    href={data.url}
                                    className="link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                              >
                                    <img
                                          className="aspect-auto w-6 md:w-8 lg:w-10"
                                          src="https://img.icons8.com/ios-glyphs/30/github.png"
                                          alt="github"
                                    />
                              </a>
                        </div>
                  </div>
                  <RenderMap weeks={data.contributionCalendar.weeks} />
            </CardWidget>
      );
};

function RenderMap({ weeks }) {
      return (
            <div className="heat-map bg-github-map-bg flex justify-evenly rounded-xs p-1 mb-1.25 md:mb-1">
                  {weeks.map((week, index) => (
                        <RenderWeek
                              key={`week-${index}`}
                              week={week.contributionDays}
                        />
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
                  className={`map-block ${day.contributionLevel} group relative aspect-square h-1 rounded border-0 md:h-1 lg:h-1.75`}
            >
                  <div className="text-label-xxxs md:text-xxs bg-bgColor-hover absolute bottom-full left-1/2 z-10 mb-1 hidden -translate-x-1/2 flex-col rounded px-0.5 py-px leading-none text-wrap whitespace-nowrap group-hover:flex lg:text-sm">
                        <span>
                              {day.contributionCount} contributions on{' '}
                              {monthNames[date.getMonth()].slice(0, 3)}{' '}
                              {date.getDate()}
                        </span>
                  </div>
            </div>
      );
}

export default GithubWidget;
