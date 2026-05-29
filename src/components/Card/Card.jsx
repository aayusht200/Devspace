import Button from '../Button/Button';
import './Card.css';
const Card = ({ children, className = '', header = '' }) => {
    if (children == null) return null;
    return (
        <div className={`card ${className} border-1 p-2 grid grid-rows-6 border-gray-300 border-r-2`}>
            <div className="card-body row-span-5 w-full h-full border-b border-gray-400">
                <h1 className="card-header">{header}</h1>
                {children}
            </div>
            <div className="card-footer flex justify-end mr-4 items-center">
                <Button className="card-button">⤍</Button>
            </div>
        </div>
    );
};

export default Card;
