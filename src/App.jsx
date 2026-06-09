import './App.css';
import Dashboard from './components/DashboardPage/Dashboard';
import { Routes, Route } from 'react-router-dom';
import TaskPage from './components/Tasks/TaskPage';
import DataProvider from './context/DataProvider';
import EditTaskPage from './components/Tasks/EditTaskPage';
import ProjectPage from './components/ProjectTracker/ProjectPage';
import { Children } from 'react';
import ProjectTaskPage from './components/ProjectTracker/ProjectTaskPage';
import EditProject from './components/ProjectTracker/EditProject';
import EditProjectTask from './components/ProjectTracker/EditProjectTask';
import { randomId } from './helperFunctions/functions';
function App() {
      // localStorage.clear();

      return (
            <DataProvider>
                  <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/tasks" element={<TaskPage />} />
                        <Route
                              path="/tasks/:id/edit"
                              element={<EditTaskPage />}
                        />
                        <Route path="/projects" element={<ProjectPage />} />
                        <Route
                              path="/project/:id/tasks"
                              element={<ProjectTaskPage />}
                        />
                        <Route
                              path="/project/:id/edit"
                              element={<EditProject />}
                        />
                        <Route
                              path="/projects/:projectId/tasks/:taskId/edit"
                              element={<EditProjectTask />}
                        />
                  </Routes>
            </DataProvider>
      );
}

export default App;
