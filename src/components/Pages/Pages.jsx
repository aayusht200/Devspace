import Button from '../Button/Button';
const Pages = ({
      children,
      className = '',
      header = '',
      onClick = () => {},
      accent = 'white',
      sideBarContent = null,
      hover = '',
}) => {
      // if (children == null) return null;
      return (
            <div className={`page ${className} flex h-dvh gap-2 p-1 md:p-4`}>
                  <div className="page-left flex w-1/13 flex-col items-center md:w-1/12">
                        <div className="back-button flex md:h-1/10">
                              <button
                                    className={`page-button text-xl md:text-3xl lg:text-4xl hover:${hover} cursor-pointer duration-150 ease-in-out hover:scale-125`}
                                    onClick={onClick}
                              >
                                    ⤌
                              </button>
                        </div>
                        {sideBarContent}
                  </div>
                  <div className="page-body flex w-full flex-col gap-2 md:gap-5">
                        {header}
                        {children}
                  </div>
            </div>
      );
};

export default Pages;
