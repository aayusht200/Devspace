import { ProjectData } from '../data/data';
import { useEffect, useState } from 'react';
import Card from './Card/Card';
import { toCapitalize } from '../helperFunctions/functions';
import StatusBar from './StatusBar/StatusBar';
import useLocalStorage from '../hooks/useLocalStorage';
const ProjectTracker = () => {
    const [data, setData] = useLocalStorage('projects', ProjectData);
    return (
        <Card className="project-tracker" header="Projects">
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
        return task.taskStatus === 'closed';
    });
    return (
        <div className="project-info">
            <div className="project-title">{project.title}</div>
            <div className="project-status">{toCapitalize(project.status)}</div>
            <StatusBar current={openTasks.length} total={project.tasks.length} />
        </div>
    );
}

export default ProjectTracker;
