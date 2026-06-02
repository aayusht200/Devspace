import { toCapitalize } from '../../helperFunctions/functions.js';
import CardWidget from '../Card/CardWidget.jsx';
import StatusBar from '../StatusBar/StatusBar.jsx';
import './projectTracker.css';
const ProjectTracker = ({ className }) => {
	const { data, setData } = useContext(DataContext);
	const projectData = data.project;
	return (
		<CardWidget
			className={`project-tracker ${className} text-xxs/snug bg-projects-bg border-projects-border text-projects-text flex items-start text-center md:text-xs/snug lg:text-sm/snug`}
			accent="text-projects-accent"
			header="Projects"
		>
			{Object.entries(data)
				.slice(0, 3)
				.map(([id, currData]) => (
					<ProjectInfo project={currData} key={id} />
				))}
		</CardWidget>
	);
};

function ProjectInfo({ project }) {
	const openTasks = project.tasks.filter((task) => {
		return task.taskStatus === 'open';
	});
	return (
		<div className="project-info border-reading-border grid rounded-2xl border-2 p-2 shadow">
			<div className="project-header flex items-center justify-center">
				<div className="project-title">{project.title}</div>
				<div className="project-status flex-1 text-right">
					{toCapitalize(project.status)}
				</div>
			</div>
			<span className="m-0 inline-block h-fit p-0">
				Completed : {project.tasks.length - openTasks.length} /{' '}
				{project.tasks.length}
			</span>
			<StatusBar
				className="h-4 rounded-lg font-light text-black"
				current={project.tasks.length - openTasks.length}
				total={project.tasks.length}
			/>
			<OpenTasks taskData={openTasks} />
		</div>
	);
}

function OpenTasks({ taskData }) {
	if (!taskData.length) return null;
	return (
		<div className="open-tasks grid overflow-auto text-left text-wrap">
			<p className="task-header underline underline-offset-3">
				Active Tasks
			</p>
			{Object.entries(taskData)
				.slice(0, 3)
				.map(([id, task]) => {
					return <TaskInfo task={task} key={task.id} />;
				})}
		</div>
	);
}
function TaskInfo({ task }) {
	return (
		<div className="task-info pl-1">
			<div className="task-header flex justify-between">
				<div className="task-title">
					{toCapitalize(task.title)}
				</div>
				<div className="task-startdate pl-1">
					{task.startDate}
				</div>
			</div>
			<div className="task-description pl-1">
				- {task.taskDescription}
			</div>
		</div>
	);
}

export default ProjectTracker;
