import { tasksData } from '../../data/data.js';
import { toCapitalize } from '../../helperFunctions/functions.js';
import useLocalStorage from '../../hooks/useLocalStorage.js';
import CardWidget from '../Card/CardWidget.jsx';
import './Tasks.css';
const TasksWidget = ({ className }) => {
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
        <CardWidget
            className={`task-list ${className} text-xxs/snug md:text-xs/snug lg:text-sm/snug bg-tasks-bg border-tasks-border text-tasks-text text-center flex items-start`}
            header="Tasks"
            accent="text-tasks-accent"
        >
            <p className="task-header font-semibold">Active Tasks</p>
            {activeTasks.map(([id, task]) => {
                return <Task task={task} key={id} onChange={handleCheck} id={id} />;
            })}
        </CardWidget>
    );
};
function Task({ task, onChange, id }) {
    return (
        <div className="active-task border-2 border-tasks-border gap-2 rounded-2xl shadow p-2 flex items-center text-left">
            <div className="input-container">
                <input
                    type="checkbox"
                    name="task"
                    id={id}
                    onChange={() => {
                        onChange(id);
                    }}
                    className="appearance-none w-4 aspect-square  border rounded bg-tasks-accent cursor-pointer"
                />
            </div>
            <div className="task-body grid grid-cols-3 w-full border-l-2  border-tasks-border pl-2">
                <div className="task-title col-span-2  font-semibold ">{task.title}</div>
                <div className="task-category font-semibold ">Category : {toCapitalize(task.category)}</div>
                <div className="task-description pl-2 col-span-3">{task.description}</div>
            </div>
        </div>
    );
}
export default TasksWidget;
