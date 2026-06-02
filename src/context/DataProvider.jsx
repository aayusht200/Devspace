import { data as initialData } from '../data/data';
import useLocalStorage from '../hooks/useLocalStorage';
import { DataContext } from './DataContext';

function DataProvider({ children }) {
	const [data, setData] = useLocalStorage('devspace', initialData);
	return (
		<DataContext.Provider value={{ data, setData }}>
			{children}
		</DataContext.Provider>
	);
}

export default DataProvider;
