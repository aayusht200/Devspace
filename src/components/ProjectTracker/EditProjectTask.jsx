import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DataContext } from '../../context/DataContext';
import Pages from '../Pages/Pages';
import { taskFields } from './projectFields';
import Button from '../Button/Button';
import Input from '../Input/Input';

const EditProjectTask = () => {
      const params = useParams();
      const { data, setData } = useContext(DataContext);
      const navigate = useNavigate();
      const [task, setTask] = useState(
            data.project[params.projectId].tasks[params.taskId],
      );
      function upDateData(context, value) {
            setTask((prev) => ({
                  ...prev,
                  [context]: value,
            }));
      }
      function submitData() {
            setData((prev) => ({
                  ...prev,
                  project: {
                        ...prev.project,
                        [params.projectId]: {
                              ...prev.project[params.projectId],
                              tasks: {
                                    ...prev.project[params.projectId].tasks,
                                    [params.taskId]: { ...task },
                              },
                        },
                  },
            }));
            navigate(`/project/${params.projectId}/tasks`);
      }
      function handleDelete() {
            const newTasks = Object.fromEntries(
                  Object.entries(data.project[params.projectId].tasks).filter(
                        ([currid, data]) => {
                              return currid !== params.taskId;
                        },
                  ),
            );

            setData((prev) => ({
                  ...prev,
                  project: {
                        ...prev.project,
                        [params.projectId]: {
                              ...prev.project[params.projectId],
                              tasks: {
                                    ...newTasks,
                              },
                        },
                  },
            }));
            navigate(`/project/${params.projectId}/tasks`);
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
                  className="task-page bg-projects-bg border-projects-border text-projects-text text-sm md:text-lg lg:text-xl"
                  header="Edit Task"
                  accent="text-projects-text"
                  onClick={handleBack}
                  hover="text-projects-accent"
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
                                    className={`bg-projects-accent text-projects-text border-projects-border h-fit w-fit`}
                              />
                        );
                  })}
                  <div className="form-control flex w-fit gap-5">
                        <Button
                              className="bg-projects-bg text-projects-accent hover:text-projects-text hover:bg-projects-accent border-projects-border"
                              onClick={onClick}
                        >
                              Delete
                        </Button>
                        <Button
                              type="submit"
                              className="bg-projects-bg text-projects-accent hover:text-projects-text hover:bg-projects-accent border-projects-border"
                        >
                              Save
                        </Button>
                  </div>
            </form>
      );
};

export default EditProjectTask;
