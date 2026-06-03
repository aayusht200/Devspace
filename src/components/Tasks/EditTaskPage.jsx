import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DataContext } from '../../context/DataContext';
import Pages from '../Pages/Pages';
import { taskFields } from './taskFields';
import Input from '../Input/Input';
const EditTaskPage = () => {
      const { id } = useParams();
      const { data, setData } = useContext(DataContext);
      const navigate = useNavigate();
      const task = data.tasks[id];
      function upDateData(context) {
            console.log(id, context);
      }
      return (
            <Pages
                  className="task-page border-tasks-border bg-tasks-bg text-tasks-text"
                  header="Edit Task"
                  accent="text-tasks-text"
                  onClick={() => navigate('/tasks')}
            >
                  {!task ? (
                        <p className="font-bold">Task Not Found!</p>
                  ) : (
                        <RenderTaskForm data={task} onChange={upDateData} />
                  )}
            </Pages>
      );
};

const RenderTaskForm = ({ data, onChange }) => {
      return (
            <form>
                  {Object.entries(data).map(([id, value]) => {
                        return (
                              <Input
                                    key={id}
                                    context={taskFields[id]}
                                    value={value}
                                    onChange={() => onChange(id)}
                                    className={`bg-tasks-accent text-tasks-text border-tasks-border`}
                              />
                        );
                  })}
            </form>
      );
};
export default EditTaskPage;
