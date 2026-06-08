import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DataContext } from '../../context/DataContext';
import Pages from '../Pages/Pages';
import { taskFields } from './taskFields';
import Button from '../Button/Button';
import Input from '../Input/Input';
const EditTaskPage = () => {
      const { id } = useParams();
      const { data, setData } = useContext(DataContext);
      const navigate = useNavigate();
      const [task, setTask] = useState(data.tasks[id]);
      function upDateData(context, value) {
            setTask((prev) => ({
                  ...prev,
                  [context]: value,
            }));
      }
      function submitData() {
            setData((prev) => ({
                  ...prev,
                  tasks: {
                        ...prev.tasks,
                        [id]: {
                              ...task,
                        },
                  },
            }));
            navigate('/tasks');
      }
      function handleDelete() {
            const newTasks = Object.entries(data.tasks).filter(
                  ([currid, data]) => {
                        return currid !== id;
                  },
            );
            setData((prev) => ({
                  ...prev,
                  tasks: {
                        ...Object.fromEntries(newTasks),
                  },
            }));
            navigate('/tasks');
      }
      function handleBack() {
            if (task.title.trim().length > 0) {
                  submitData();
            } else {
                  handleDelete();
            }
      }

      return (
            <Pages
                  className="task-page border-tasks-border bg-tasks-bg text-tasks-text text-sm md:text-lg lg:text-xl"
                  header="Edit Task"
                  accent="text-tasks-text"
                  onClick={handleBack}
                  hover="text-tasks-accent"
            >
                  {!task ? (
                        <p className="font-bold">Task Not Found!</p>
                  ) : (
                        <RenderTaskForm
                              className="grid auto-rows-auto gap-10"
                              data={task}
                              onChange={upDateData}
                              onSubmit={(e) => {
                                    e.preventDefault();
                                    submitData();
                              }}
                              onClick={(e) => {
                                    e.preventDefault();
                                    handleDelete();
                              }}
                        />
                  )}
            </Pages>
      );
};

const RenderTaskForm = ({ data, onChange, className, onSubmit, onClick }) => {
      return (
            <form className={`${className}`} onSubmit={onSubmit}>
                  {Object.entries(data).map(([id, value]) => {
                        return (
                              <Input
                                    key={id}
                                    context={taskFields[id]}
                                    value={value}
                                    onChange={(e) => {
                                          onChange(id, e.target.value);
                                    }}
                                    className={`bg-tasks-accent text-tasks-text border-tasks-border h-fit w-fit`}
                              />
                        );
                  })}
                  <div className="form-control flex w-fit gap-5">
                        <Button
                              className=""
                              onClick={onClick}
                              hover="text-tasks-accent"
                        >
                              Delete
                        </Button>
                        <button
                              type="submit "
                              className="btn hover:text-tasks-accent"
                        >
                              Save
                        </button>
                  </div>
            </form>
      );
};
export default EditTaskPage;
