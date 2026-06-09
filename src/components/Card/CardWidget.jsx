import Button from '../Button/Button';
import './CardWidget.css';
const CardWidget = ({
      children,
      className = '',
      header = '',
      onOpen = null,
      accent = '',
}) => {
      if (children == null) return null;
      return (
            <div
                  className={`card ${className} grid grid-rows-10 rounded-sm p-2 text-wrap md:rounded-lg lg:rounded-xl`}
            >
                  <div className="card-body row-span-9 grid gap-1 border-inherit">
                        <h1 className="card-header h-fit border-b border-inherit pb-1 font-extrabold">
                              {header}
                        </h1>
                        {children}
                  </div>
                  <div className="card-footer mr-4 flex h-fit items-center justify-end place-self-end">
                        <button
                              className={`card-button text-xl md:text-3xl lg:text-4xl ${accent} cursor-pointer duration-150 ease-in-out hover:scale-125`}
                              onClick={onOpen}
                        >
                              ⤍
                        </button>
                  </div>
            </div>
      );
};

export default CardWidget;
