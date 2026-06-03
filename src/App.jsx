import './App.css';
import Dashboard from './components/DashboardPage/Dashboard';
import { Routes, Route } from 'react-router-dom';
import TaskPage from './components/Tasks/TaskPage';
import DataProvider from './context/DataProvider';
import EditTaskPage from './components/Tasks/EditTaskPage';
function App() {
      localStorage.clear();
      return (
            <DataProvider>
                  <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/tasks" element={<TaskPage />} />
                        <Route
                              path="/tasks/:id/edit"
                              element={<EditTaskPage />}
                        />
                  </Routes>
            </DataProvider>
      );
}

export default App;
