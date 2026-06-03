import Button from '../Button/Button';
const Pages = ({
      children,
      className = '',
      header = '',
      onClick = () => {},
      accent = 'white',
      sideBarContent = null,
}) => {
      if (children == null) return null;
      return (
            <div className={`page ${className} flex h-dvh p-2`}>
                  <div className="page-left mr-4">
                        <Button
                              className={`page-button text-lg/snug md:text-xl/snug lg:text-2xl/8 ${accent}`}
                              onClick={onClick}
                        >
                              ⤌
                        </Button>
                        {sideBarContent}
                  </div>
                  <div className="page-body flex-1 border-inherit">
                        <h1 className="page-header h-fit border-b border-inherit font-extrabold">
                              {header}
                        </h1>
                        {children}
                  </div>
            </div>
      );
};

export default Pages;
