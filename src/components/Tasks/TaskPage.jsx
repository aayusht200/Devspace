import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import Pages from '../Pages/Pages';
import Button from '../Button/Button';
const TaskPage = () => {
	const { data, setData } = useContext(DataContext);
	console.log(data.tasks);
	return (
		<Pages
			className="task-page border-tasks-border bg-tasks-bg text-tasks-text"
			header="Tasks"
			accent="text-tasks-text"
			sideBarContent={<SideBar />}
		>he</Pages>
	);
};

const SideBar = () => {
	return (
		<div>
			<Button className={`card-button`}>Test</Button>
		</div>
	);
};

export default TaskPage;
