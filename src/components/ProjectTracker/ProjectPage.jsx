import { useContext, useState } from 'react';
import { DataContext } from '../../context/DataContext';
import Pages from '../Pages/Pages';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import TableComponent from '../Table/TableComponent';
import { projectColumns } from './projectColumns';
import Input from '../Input/Input';
import { emptyProject, searchContext, statusContext } from './projectFields';
import { randomId } from '../../helperFunctions/functions';
const ProjectPage = () => {
      const navigate = useNavigate();
      const { data, setData } = useContext(DataContext);
      const columns = projectColumns(navigate);
      const [searchQuery, setQuery] = useState('');
      const [filterStatus, setFilterStatus] = useState('all');
      const filteredData = Object.fromEntries(
            Object.entries(data.project).filter(([id, project]) => {
                  const search = searchQuery.toLowerCase();
                  const matchesStatus =
                        filterStatus === 'all' ||
                        project.status === filterStatus;

                  const matchedQuery =
                        search === '' ||
                        project.title.toLowerCase().includes(search) ||
                        project.description.toLowerCase().includes(search) ||
                        project.startDate.toLowerCase().includes(search) ||
                        project.endDate.toLowerCase().includes(search);
                  return matchesStatus && matchedQuery;
            }),
      );

      function handleFilter(e, token) {
            switch (token) {
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
      function createNewProject() {
            const newId = randomId();
            setData((prev) => ({
                  ...prev,
                  project: {
                        ...prev.project,
                        [newId]: { ...emptyProject },
                  },
            }));
            navigate(`/project/${newId}/edit`);
      }

      return (
            <Pages
                  className="projects-page text-xxs bg-projects-bg text-projects-text md:text-sm lg:text-base"
                  accent="text-projects-text"
                  onClick={() => navigate('/')}
                  sideBarContent={
                        <div className="sidebar">
                              <Button
                                    onClick={createNewProject}
                                    className=""
                                    hover="text-projects-accent"
                              >
                                    Add New!
                              </Button>
                        </div>
                  }
                  header={
                        <HeaderContent
                              onChange={(e, token) => {
                                    handleFilter(e, token);
                              }}
                              searchQuery={searchQuery}
                        />
                  }
                  hover="text-projects-accent"
            >
                  {
                        <TableComponent
                              data={filteredData}
                              columns={columns}
                              renderActions={(project, id) => (
                                    <div className="action">
                                          <Button
                                                onClick={() => {
                                                      navigate(
                                                            `/project/${id}/edit`,
                                                      );
                                                }}
                                                hover="text-projects-accent"
                                          >
                                                Edit
                                          </Button>
                                    </div>
                              )}
                        />
                  }
            </Pages>
      );
};
function HeaderContent({ onChange, className = '', searchQuery }) {
      return (
            <div className={`${className} page-header flex flex-col gap-1`}>
                  <h1 className="font-bold">Projects</h1>
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
export default ProjectPage;
