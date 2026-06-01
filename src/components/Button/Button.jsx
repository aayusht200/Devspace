import './Button.css';
const Button = ({ children, onClick, className = '', id = '' }) => {
    return (
        <button className={`btn ${className} cursor-pointer hover:scale-120`} id={id} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
