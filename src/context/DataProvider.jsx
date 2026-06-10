import { data as initialData } from '../data/data';
import useLocalStorage from '../hooks/useLocalStorage';
import { DataContext } from './DataContext';
import { useEffect } from 'react';
function DataProvider({ children }) {
      const [data, setData] = useLocalStorage('devspace', initialData);
      const [theme, setTheme] = useLocalStorage('theme', 'dark');

      const toggleTheme = () => {
            setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
      };
      useEffect(() => {
            document.documentElement.dataset.theme = theme;
      }, [theme]);
      return (
            <DataContext.Provider
                  value={{ data, setData, theme, setTheme, toggleTheme }}
            >
                  {children}
            </DataContext.Provider>
      );
}

export default DataProvider;
