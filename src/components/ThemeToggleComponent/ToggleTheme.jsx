import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
const ToggleTheme = ({ className }) => {
      const { theme, toggleTheme } = useContext(DataContext);

      return (
            <button
                  onClick={toggleTheme}
                  className={`${className} absolute right-1 z-10 cursor-pointer p-5 hover:scale-125`}
            >
                  {theme === 'dark' ? '🌙' : '☀️'}
            </button>
      );
};

export default ToggleTheme;
