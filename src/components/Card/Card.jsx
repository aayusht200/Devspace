import Button from '../Button/Button';
import './Card.css';
const Card = ({ children, className = '', header = '', onOpen = null }) => {
    if (children == null) return null;
    return (
        <div className={`card ${className} rounded-sm  md:rounded-lg lg:rounded-xl p-2`}>
            <div className="card-body border-b border-inherit grid gap-1 ">
                <h1 className="card-header font-extrabold border-b border-inherit ">{header}</h1>
                {children}
            </div>
            <div className="card-footer flex justify-end mr-4 items-center">
                <Button
                    className="card-button text-lg/snug md:text-lg/snug lg:text-xl/8 cursor-pointer hover:scale-150 "
                    onClick={onOpen}
                >
                    ⤍
                </Button>
            </div>
        </div>
    );
};

export default Card;
