import ClockWidget from '../Clock/ClockWidget';
import GithubWidget from '../Github/GithubWidget';
import PomodoroWidget from '../Pomodoro/PomodoroWidget';
import ProjectTrackerWidget from '../ProjectTracker/ProjectTrackerWidget';
import ReadingListWidget from '../ReadingList/ReadingListWidget';
import SpotifyWidget from '../Spotify/SpotifyWidget';
import TasksWidget from '../Tasks/TasksWidget';

const Dashboard = () => {
	return (
		<div className="bg-dashboard-bg border-dashboard-bg text-dashboard-bg grid h-screen w-screen grid-cols-3 grid-rows-8 gap-1 p-1">
			{/* col-1 */}
			<ClockWidget className="col-start-1 row-span-1" />
			<ReadingListWidget className="col-start-1 row-span-4" />
			<GithubWidget className="col-start-1 row-span-2" />
			<SpotifyWidget className="col-span-2 col-start-1 row-span-1" />
			{/* col-2 */}
			<PomodoroWidget className="col-start-2 row-span-1 row-start-1" />
			<ProjectTrackerWidget className="col-start-2 row-span-6 row-start-2" />
			{/* col-3 */}
			<TasksWidget className="col-start-3 row-span-8 row-start-1" />
		</div>
	);
};

export default Dashboard;
