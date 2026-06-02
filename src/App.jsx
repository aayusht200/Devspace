import './App.css';
import Dashboard from './components/DashboardPage/Dashboard';
import { Routes, Route } from 'react-router-dom';
import TaskPage from './components/Tasks/TaskPage';

function App() {
	// localStorage.clear();
	return (
		<Routes>
			<Route path="/" element={<Dashboard />} />
			<Route path="/tasks" element={<TaskPage />} />
			{/* <Route path="/" element={ } /> */}
			{/* <Route path="/" element={<Dashboard />} /> */}
			{/* <Route path="/" element={<Dashboard />} /> */}
			{/* <Route path="/" element={<Dashboard />} /> */}
		</Routes>
	);
}

export default App;
