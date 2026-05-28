import { ProjectData } from '../data/data';
import { useEffect, useState } from 'react';

const ProjectTracker = () => {
    const [data, setData] = useState(() => {
        const savedProjects = localStorage.getItem('projects');
        if (savedProjects) {
            return JSON.parse(savedProjects);
        }
        localStorage.setItem('projects', JSON.stringify(ProjectData));
        return ProjectData;
    });

    useEffect(() => {
        localStorage.setItem('projects', JSON.stringify(data));
    }, [data]);
    return <>test</>;
};

export default ProjectTracker;
