import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DataContext } from '../../context/DataContext';
import Pages from '../Pages/Pages';
import { projectFields } from './projectFields';
import Button from '../Button/Button';
import Input from '../Input/Input';
const EditProject = () => {
      const key = useParams();
      const params = useParams();
      const navigate = useNavigate();

      const { data, setData } = useContext(DataContext);
      const [project, setProject] = useState(data.project[key.id]);

      function upDateData(context, value) {
            setProject((prev) => ({
                  ...prev,
                  [context]: value,
            }));
      }
      function submitData() {
            console.log(key.id);
            setData((prev) => ({
                  ...prev,
                  project: {
                        ...prev.project,
                        [key.id]: { ...project },
                  },
            }));
            navigate(`/projects`);
      }
      function handleDelete() {
            const newProject = Object.fromEntries(
                  Object.entries(data.project).filter(([currid, data]) => {
                        return currid !== key.id;
                  }),
            );
            setData((prev) => ({
                  ...prev,
                  project: {
                        ...newProject,
                  },
            }));
            navigate(`/projects`);
      }
      function handleBack() {
            if (project.title.trim().length > 0) {
                  submitData();
            } else {
                  handleDelete();
            }
      }
      return (
            <Pages
                  className="project-edit-page bg-projects-bg border-projects-border text-projects-text text-sm md:text-lg lg:text-xl"
                  header="Edit Project"
                  accent="text-projects-text"
                  onClick={handleBack}
                  hover="text-projects-accent"
            >
                  {!project ? (
                        <p className="font-bold">Task Not Found!</p>
                  ) : (
                        <RenderForm
                              className="grid auto-rows-auto gap-10"
                              data={project}
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
const RenderForm = ({ data, onChange, className, onSubmit, onClick }) => {
      return (
            <form className={`${className}`} onSubmit={onSubmit}>
                  {Object.entries(data).map(([id, value]) => {
                        if (id === 'tasks') return;
                        return (
                              <Input
                                    key={id}
                                    context={projectFields[id]}
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
                              type="submit btn"
                              className="bg-projects-bg text-projects-accent hover:text-projects-text hover:bg-projects-accent border-projects-border"
                        >
                              Save
                        </Button>
                  </div>
            </form>
      );
};
export default EditProject;
