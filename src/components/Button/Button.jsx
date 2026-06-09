import './Button.css';
const Button = ({
      children,
      onClick,
      className = '',
      id = '',
      type = 'button',
}) => {
      return (
            <button
                  className={`btn ${className} h-fit w-fit rounded-xl border-2 pr-2 pl-2 duration-150 ease-in-out hover:scale-105`}
                  id={id}
                  onClick={onClick}
                  type={type}
            >
                  {children}
            </button>
      );
};

export default Button;
