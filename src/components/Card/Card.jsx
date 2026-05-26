import Button from '../Button/Button';
import './Card.css';
const Card = ({ children, className = '', header = '' }) => {
    if (children == null) return null;
    return (
        <div className={`card ${className}`}>
            <div className="card-body">
                <h1 className="card-header">{header}</h1>
                {children}
            </div>
            <div className="card-footer">
                <Button className="card-button">⤍</Button>
            </div>
        </div>
    );
};

export default Card;
