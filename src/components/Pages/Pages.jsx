import Button from '../Button/Button';
const Pages = ({
      children,
      className = '',
      header = '',
      onClick = () => {},
      accent = 'white',
      sideBarContent = null,
}) => {
      // if (children == null) return null;
      return (
            <div
                  className={`page ${className} grid h-dvh w-full grid-cols-10 p-2`}
            >
                  <div className="page-left col-span-1 col-start-0 flex flex-col items-center">
                        <div className="back-button h-1/10">
                              <Button
                                    className={`page-button text-lg/snug md:text-xl/snug lg:text-2xl/8 ${accent} `}
                                    onClick={onClick}
                              >
                                    ⤌
                              </Button>
                        </div>
                        {sideBarContent}
                  </div>
                  <div className="page-body col-span-9 col-start-2 border-inherit">
                        {header}
                        {children}
                  </div>
            </div>
      );
};

export default Pages;
