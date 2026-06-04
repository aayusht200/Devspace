import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import Pages from '../Pages/Pages';
import Button from '../Button/Button';
import TableComponent from '../Table/TableComponent';
import { useNavigate } from 'react-router-dom';
import { taskColumns } from './taskColumns';
import { randomId } from '../../helperFunctions/functions';
import { emptyTask } from './taskFields';
const TaskPage = () => {
      const navigate = useNavigate();
      const { data, setData } = useContext(DataContext);
      function createNewTask() {
            const newId = randomId();
            setData((prev) => ({
                  ...prev,
                  tasks: {
                        ...prev.tasks,
                        [newId]: { ...emptyTask },
                  },
            }));
            navigate(`/tasks/${newId}/edit`);
      }
      return (
            <Pages
                  className="task-page border-tasks-border bg-tasks-bg text-tasks-text"
                  header="Tasks"
                  accent="text-tasks-text"
                  onClick={() => navigate('/')}
                  sideBarContent={
                        <Button onClick={createNewTask}>Add New!</Button>
                  }
            >
                  <TableComponent
                        data={data.tasks}
                        columns={taskColumns}
                        className={''}
                        renderActions={(task, id) => (
                              <div className="action">
                                    <Button
                                          onClick={() => {
                                                navigate(`/tasks/${id}/edit`);
                                          }}
                                    >
                                          Edit
                                    </Button>
                              </div>
                        )}
                  />
            </Pages>
      );
};

export default TaskPage;
