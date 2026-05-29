import { tasksData } from '../../data/data';
import useLocalStorage from '../../hooks/useLocalStorage';
import Card from '../Card/Card.jsx';
import './Tasks.css';
const Tasks = ({ className }) => {
    const [data, setData] = useLocalStorage('tasks', tasksData);
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
        <Card className={`task-list ${className}`} header="Tasks">
            <p className="task-header">Active Tasks</p>
            {activeTasks.map(([id, task]) => {
                return <Task task={task} key={id} onChange={handleCheck} id={id} />;
            })}
        </Card>
    );
};
function Task({ task, onChange, id }) {
    return (
        <div className="active-task">
            <input
                type="checkbox"
                name="task"
                id={id}
                onChange={() => {
                    onChange(id);
                }}
            />
            <div className="task-title">{task.title}</div>
            <div className="task-category">{task.category}</div>
            <div className="task-description">{task.description}</div>
        </div>
    );
}
export default Tasks;
