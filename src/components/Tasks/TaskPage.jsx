import { useContext, useState } from 'react';
import { DataContext } from '../../context/DataContext';
import Pages from '../Pages/Pages';
import Button from '../Button/Button';
import TableComponent from '../Table/TableComponent';
import { useNavigate } from 'react-router-dom';
import { taskColumns } from './taskColumns';
import { randomId } from '../../helperFunctions/functions';
import { emptyTask } from './taskFields';
import Input from '../Input/Input';
import { searchContext, statusContext, categoryContext } from './taskFields';
const TaskPage = () => {
      const navigate = useNavigate();
      const { data, setData } = useContext(DataContext);
      const [searchQuery, setQuery] = useState('');
      const [filterStatus, setFilterStatus] = useState('all');
      const [filterCategory, setFilterCategory] = useState('all');
      const filteredData = Object.fromEntries(
            Object.entries(data.tasks).filter(([id, task]) => {
                  const search = searchQuery.toLowerCase();
                  const matchesStatus =
                        filterStatus === 'all' || task.status === filterStatus;
                  const matchedCategory =
                        filterCategory === 'all' ||
                        task.category === filterCategory;
                  const matchedQuery =
                        search === '' ||
                        task.title.toLowerCase().includes(search) ||
                        task.description.toLowerCase().includes(search);
                  return matchesStatus && matchedCategory && matchedQuery;
            }),
      );
      function handleFilter(e, token) {
            switch (token) {
                  case 'category': {
                        setFilterCategory(e.target.value);
                        break;
                  }
                  case 'status': {
                        setFilterStatus(e.target.value);
                        break;
                  }
                  case 'search': {
                        setQuery(e.target.value);
                        break;
                  }
            }
      }
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
                  header={
                        <HeaderContent
                              onChange={(e, token) => {
                                    handleFilter(e, token);
                              }}
                              searchQuery={searchQuery}
                        />
                  }
                  accent="text-tasks-text"
                  onClick={() => navigate('/')}
                  sideBarContent={
                        <Button onClick={createNewTask}>Add New!</Button>
                  }
            >
                  <TableComponent
                        data={filteredData}
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
function HeaderContent({ onChange, className = '', searchQuery }) {
      return (
            <div className={`${className} page-header`}>
                  <h1 className="">Tasks</h1>
                  <div className="data-control">
                        <Input
                              context={searchContext}
                              onChange={(e) => {
                                    onChange(e, 'search');
                              }}
                              value={searchQuery}
                        />
                        <Input
                              context={statusContext}
                              onChange={(e) => {
                                    onChange(e, 'status');
                              }}
                        />
                        <Input
                              context={categoryContext}
                              onChange={(e) => {
                                    onChange(e, 'category');
                              }}
                        />
                  </div>
            </div>
      );
}
export default TaskPage;
