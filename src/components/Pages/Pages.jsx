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
            <div className={`page ${className}`}>
                  <div className="page-left ">
                        <div className="back-button ">
                              <Button
                                    className={`page-button text-lg/snug md:text-xl/snug lg:text-2xl/8 ${accent} `}
                                    onClick={onClick}
                              >
                                    ⤌
                              </Button>
                        </div>
                        {sideBarContent}
                  </div>
                  <div className="page-body ">
                        {header}
                        {children}
                  </div>
            </div>
      );
};

export default Pages;
