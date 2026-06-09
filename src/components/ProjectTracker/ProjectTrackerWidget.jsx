import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/DataContext.js';
import { toCapitalize } from '../../helperFunctions/functions.js';
import CardWidget from '../Card/CardWidget.jsx';
import StatusBar from '../StatusBar/StatusBar.jsx';
import './projectTracker.css';
const ProjectTracker = ({ className }) => {
      const { data, setData } = useContext(DataContext);
      const navigate = useNavigate();

      return (
            <CardWidget
                  className={`project-tracker ${className} bg-projects-bg border-projects-border text-projects-text lg:text-md/snug flex items-start text-xs md:text-sm`}
                  accent="text-projects-accent"
                  header="Projects"
                  onOpen={() => {
                        navigate('/projects');
                  }}
            >
                  {Object.entries(data.project)
                        .slice(0, 3)
                        .map(([id, currData]) => (
                              <ProjectInfo project={currData} key={id} />
                        ))}
            </CardWidget>
      );
};

function ProjectInfo({ project }) {
      const openTasks = Object.entries(project.tasks).filter(([id, task]) => {
            return task.taskStatus === 'open';
      });

      return (
            <div className="project-info border-reading-border grid gap-1 rounded-2xl border-2 p-2">
                  <div className="project-header flex font-bold">
                        <div className="project-title">{project.title}</div>
                        <div className="project-status flex-1 text-right">
                              {toCapitalize(project.status)}
                        </div>
                  </div>
                  <span className="m-0 inline-block p-0">
                        Completed :{' '}
                        {Object.entries(project.tasks).length -
                              openTasks.length}{' '}
                        / {Object.entries(project.tasks).length}
                  </span>
                  <StatusBar
                        textColor="text-projects-bg"
                        fillBg="bg-projects-accent"
                        current={
                              Object.entries(project.tasks).length -
                              openTasks.length
                        }
                        total={Object.entries(project.tasks).length}
                  />
                  <OpenTasks taskData={openTasks} />
            </div>
      );
}

function OpenTasks({ taskData }) {
      if (!taskData.length) return null;
      return (
            <div className="open-tasks grid overflow-auto text-left text-wrap">
                  <p className="task-header font-semibold underline underline-offset-2">
                        Active Tasks
                  </p>
                  {Object.entries(taskData).map(([id, data]) => {
                        return <TaskInfo key={data[0]} task={data[1]} />;
                  })}
            </div>
      );
}
function TaskInfo({ task }) {
      return (
            <div className="task-info pl-1">
                  <div className="task-header flex justify-between">
                        <div className="task-title">
                              {toCapitalize(task.title)}
                        </div>
                        <div className="task-startdate pl-1">
                              {task.startDate}
                        </div>
                  </div>
                  <div className="task-description pl-1">
                        - {task.taskDescription}
                  </div>
            </div>
      );
}

export default ProjectTracker;
