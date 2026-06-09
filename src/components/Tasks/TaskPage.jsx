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
                  className="task-page border-tasks-border bg-tasks-bg text-tasks-text text-xxs md:text-sm lg:text-base"
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
                        <div className="sidebar">
                              <Button
                                    onClick={createNewTask}
                                    className=""
                                    hover="text-tasks-accent"
                              >
                                    Add New!
                              </Button>
                        </div>
                  }
                  hover="text-tasks-accent"
            >
                  <TableComponent
                        data={filteredData}
                        columns={taskColumns}
                        className={'border-tasks-border border'}
                        renderActions={(task, id) => (
                              <div className="action">
                                    <Button
                                          onClick={() => {
                                                navigate(`/tasks/${id}/edit`);
                                          }}
                                          hover="text-tasks-accent"
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
            <div className={`${className} page-header flex flex-col gap-1`}>
                  <h1 className="font-bold">Tasks</h1>
                  <div className="data-control grid gap-1 md:flex md:justify-end">
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
