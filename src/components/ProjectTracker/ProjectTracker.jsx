import { projectData } from '../../data/data';
import { useEffect, useState } from 'react';
import Card from '../Card/Card.jsx';
import { toCapitalize } from '../../helperFunctions/functions.js';
import StatusBar from '../StatusBar/StatusBar.jsx';
import useLocalStorage from '../../hooks/useLocalStorage.js';
import './projectTracker.css';
const ProjectTracker = ({ className }) => {
    const [data, setData] = useLocalStorage('projects', projectData);
    return (
        <Card className={`project-tracker ${className}`} header="Projects">
            {Object.entries(data)
                .slice(0, 3)
                .map(([id, currData]) => (
                    <ProjectInfo project={currData} key={id} />
                ))}
        </Card>
    );
};

function ProjectInfo({ project }) {
    const openTasks = project.tasks.filter((task) => {
        return task.taskStatus === 'open';
    });
    return (
        <div className="project-info">
            <div className="project-title">{project.title}</div>
            <div className="project-status">{toCapitalize(project.status)}</div>
            <StatusBar current={project.tasks.length - openTasks.length} total={project.tasks.length} />
            <OpenTasks taskData={openTasks} />
        </div>
    );
}

function OpenTasks({ taskData }) {
    if (!taskData.length) return null;
    return (
        <div className="open-tasks">
            <p className="task-header">Active Tasks</p>
            {Object.entries(taskData)
                .slice(0, 3)
                .map(([id, task]) => {
                    return <TaskInfo task={task} key={task.id} />;
                })}
        </div>
    );
}
function TaskInfo({ task }) {
    return (
        <div className="task-info">
            <div className="task-title">{toCapitalize(task.title)}</div>
            <div className="task-startdate">{task.startDate}</div>
            <div className="task-description">{task.taskDescription}</div>
        </div>
    );
}

export default ProjectTracker;
