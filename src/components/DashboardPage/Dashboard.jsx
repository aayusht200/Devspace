import ClockWidget from '../Clock/ClockWidget';
import GithubWidget from '../Github/GithubWidget';
import PomodoroWidget from '../Pomodoro/PomodoroWidget';
import ProjectTrackerWidget from '../ProjectTracker/ProjectTrackerWidget';
import ReadingListWidget from '../ReadingList/ReadingListWidget';
import SpotifyWidget from '../Spotify/SpotifyWidget';
import TasksWidget from '../Tasks/TasksWidget';
import ToggleTheme from '../ThemeToggleComponent/ToggleTheme';
const Dashboard = () => {
      return (
            <div className="bg-dashboard-bg border-dashboard-bg text-dashboard-bg relative flex flex-col gap-1 p-1 md:grid md:h-dvh md:w-dvw md:grid-cols-3 md:grid-rows-8">
                  <ToggleTheme />
                  {/* col-1 */}
                  <ClockWidget className="h-25 md:col-start-1 md:row-span-1 md:h-full md:w-full" />
                  <PomodoroWidget className="h-25 md:col-start-2 md:row-span-1 md:row-start-1 md:h-full md:w-full" />
                  <ReadingListWidget className="h-full md:col-start-1 md:row-span-4 md:h-full md:w-full" />
                  <GithubWidget className="h-35 md:col-start-1 md:row-span-2 md:h-full md:w-full" />
                  <SpotifyWidget className="h-30 md:col-span-2 md:col-start-1 md:row-span-1 md:h-full md:w-full" />
                  {/* col-2 */}
                  <ProjectTrackerWidget className="h-full w-full md:col-start-2 md:row-span-6 md:row-start-2" />
                  {/* col-3 */}
                  <TasksWidget className="md:col-start-3 md:row-span-8 md:row-start-1 md:h-full md:w-full" />
            </div>
      );
};

export default Dashboard;
