import { useNavigate } from 'react-router-dom';
import { tasksData } from '../../data/data.js';
import { toCapitalize } from '../../helperFunctions/functions.js';
import useLocalStorage from '../../hooks/useLocalStorage.js';
import CardWidget from '../Card/CardWidget.jsx';
import './Tasks.css';
const TasksWidget = ({ className }) => {
	const [data, setData] = useLocalStorage('tasks', tasksData);
	const navigate = useNavigate();
	const activeTasks = Object.entries(data).filter(([id, task]) => {
		return task.status === 'active';
	});
	function handleCheck(id) {
		setData((prev) => ({
			...prev,

			[id]: {
				...prev[id],
				status: 'done',
			},
		}));
	}
	return (
		<CardWidget
			className={`task-list ${className} text-xxs/snug bg-tasks-bg border-tasks-border text-tasks-text flex items-start text-center md:text-xs/snug lg:text-sm/snug`}
			header="Tasks"
			accent="text-tasks-accent"
			onOpen={() => navigate('/tasks')}
		>
			<p className="task-header font-semibold">Active Tasks</p>
			{activeTasks.map(([id, task]) => {
				return (
					<Task
						task={task}
						key={id}
						onChange={handleCheck}
						id={id}
					/>
				);
			})}
		</CardWidget>
	);
};
function Task({ task, onChange, id }) {
	return (
		<div className="active-task border-tasks-border flex items-center gap-2 rounded-2xl border-2 p-2 text-left shadow">
			<div className="input-container">
				<input
					type="checkbox"
					name="task"
					id={id}
					onChange={() => {
						onChange(id);
					}}
					className="bg-tasks-accent aspect-square w-4 cursor-pointer appearance-none rounded border"
				/>
			</div>
			<div className="task-body border-tasks-border grid w-full grid-cols-3 border-l-2 pl-2">
				<div className="task-title col-span-2 font-semibold">
					{task.title}
				</div>
				<div className="task-category font-semibold">
					Category : {toCapitalize(task.category)}
				</div>
				<div className="task-description col-span-3 pl-2">
					{task.description}
				</div>
			</div>
		</div>
	);
}
export default TasksWidget;
