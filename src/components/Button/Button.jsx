import './Button.css';
const Button = ({ children, onClick, className = '', id = '', hover = '' }) => {
      return (
            <button
                  className={`btn ${className} hover:${hover}`}
                  id={id}
                  onClick={onClick}
            >
                  {children}
            </button>
      );
};

export default Button;
