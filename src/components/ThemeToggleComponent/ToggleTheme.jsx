import Button from '../Button/Button';
import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
const ToggleTheme = ({ className }) => {
      const { theme, toggleTheme } = useContext(DataContext);

      return (
            <Button onClick={toggleTheme} className={`${className}`}>
                  {theme === 'dark' ? '🌙' : '☀️'}
            </Button>
      );
};

export default ToggleTheme;
