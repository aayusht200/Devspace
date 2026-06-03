import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import Pages from '../Pages/Pages';
import Button from '../Button/Button';
import TableComponent from '../Table/TableComponent';
import { useNavigate } from 'react-router-dom';
import { taskColumns } from './taskColumns';
const TaskPage = () => {
      const navigate = useNavigate();
      const { data, setData } = useContext(DataContext);
      return (
            <Pages
                  className="task-page border-tasks-border bg-tasks-bg text-tasks-text"
                  header="Tasks"
                  accent="text-tasks-text"
                  onClick={() => navigate('/')}
            >
                  <TableComponent
                        data={data.tasks}
                        columns={taskColumns}
                        renderActions={(task, id) => (
                              <div className="action grid">
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
