import { useNavigate, useParams } from 'react-router-dom';
import TableComponent from '../Table/TableComponent';
import { useContext, useState } from 'react';
import { DataContext } from '../../context/DataContext';
import { emptyTask } from './projectFields';
import Button from '../Button/Button';
import { taskColumns } from './projectColumns';
import Pages from '../Pages/Pages';
import Input from '../Input/Input';
import { searchContext, statusContext } from './projectFields';
import { randomId } from '../../helperFunctions/functions';
const ProjectTaskPage = () => {
      const key = useParams();
      const { data, setData } = useContext(DataContext);
      const [searchQuery, setQuery] = useState('');
      const [filterStatus, setFilterStatus] = useState('all');

      const navigate = useNavigate();
      const filteredData = Object.fromEntries(
            Object.entries(data.project[key.id].tasks).filter(([id, task]) => {
                  const search = searchQuery.toLowerCase();
                  const matchesStatus =
                        filterStatus === 'all' ||
                        task.taskStatus === filterStatus;

                  const matchedQuery =
                        search === '' ||
                        task.title.toLowerCase().includes(search) ||
                        task.taskDescription.toLowerCase().includes(search);
                  return matchesStatus && matchedQuery;
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
            console.log(emptyTask.startDate);
            setData((prev) => ({
                  ...prev,
                  project: {
                        ...prev.project,
                        [key.id]: {
                              ...prev.project[key.id],
                              tasks: {
                                    ...prev.project[key.id].tasks,
                                    [newId]: { ...emptyTask },
                              },
                        },
                  },
            }));
            navigate(`/projects/${key.id}/tasks/${newId}/edit`);
      }
      return (
            <Pages
                  className="project-task-page bg-projects-bg text-projects-text text-xxs md:text-sm lg:text-base"
                  header={
                        <HeaderContent
                              onChange={(e, token) => {
                                    handleFilter(e, token);
                              }}
                              searchQuery={searchQuery}
                        />
                  }
                  accent="text-projects-text"
                  onClick={() => navigate('/projects')}
                  sideBarContent={
                        <div className="sidebar">
                              <Button
                                    onClick={createNewTask}
                                    className=""
                                    hover="text-projects-accent"
                              >
                                    Add New!
                              </Button>
                        </div>
                  }
                  hover="text-projects-accent"
            >
                  <TableComponent
                        data={filteredData}
                        columns={taskColumns}
                        className={''}
                        renderActions={(task, id) => {
                              return (
                                    <div className="action">
                                          <Button
                                                onClick={() => {
                                                      navigate(
                                                            `/projects/${key.id}/tasks/${id}/edit`,
                                                      );
                                                }}
                                                hover="text-projects-accent"
                                          >
                                                Edit
                                          </Button>
                                    </div>
                              );
                        }}
                  />
            </Pages>
      );
};
function HeaderContent({ onChange, className = '', searchQuery }) {
      return (
            <div className={`${className} page-header flex flex-col gap-1`}>
                  <h1 className="font-bold">Project Tasks</h1>
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
                  </div>
            </div>
      );
}

export default ProjectTaskPage;
