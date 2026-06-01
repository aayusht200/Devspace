import Button from '../Button/Button';
import './Card.css';
const Card = ({ children, className = '', header = '', onOpen = null, accent = 'white' }) => {
    if (children == null) return null;
    return (
        <div className={`card ${className} rounded-sm  md:rounded-lg lg:rounded-xl p-2 text-wrap`}>
            <div className="card-body border-inherit grid gap-1 ">
                <h1 className="card-header font-extrabold border-b border-inherit h-fit">{header}</h1>
                {children}
            </div>
            <div className="card-footer flex justify-end mr-4 items-center h-fit place-self-end">
                <Button
                    className={`card-button text-lg/snug md:text-xl/snug lg:text-2xl/8  ${accent}`}
                    onClick={onOpen}
                >
                    ⤍
                </Button>
            </div>
        </div>
    );
};

export default Card;
