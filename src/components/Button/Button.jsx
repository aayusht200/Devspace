import './Button.css';
const Button = ({ children, onClick, className = '', id = '' }) => {
    return (
        <button className={`btn ${className}`} id={id} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
