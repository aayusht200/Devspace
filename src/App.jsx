import './App.css';
import Dashboard from './components/DashboardPage/Dashboard';
import { Routes, Route } from 'react-router-dom';
import TaskPage from './components/Tasks/TaskPage';
import DataProvider from './context/DataProvider';
function App() {
	localStorage.clear();
	return (
		<DataProvider>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/tasks" element={<TaskPage />} />
			</Routes>
		</DataProvider>
	);
}

export default App;
