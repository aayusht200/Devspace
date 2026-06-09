import './StatusBar.css';

const StatusBar = ({
      current = 0,
      total = 100,
      showLabel = true,
      className,
      fillBg = 'bg-black',
      barBg = 'bg-white',
      textColor = 'text-black',
}) => {
      const percentage = total > 0 ? Math.floor((current / total) * 100) : 0;

      const completeLevel = Math.min(100, Math.max(0, percentage));

      return (
            <div className={`status-bar h-4 rounded-lg ${barBg} font-light`}>
                  <div
                        className={`fill-level ${fillBg} h-4 rounded-lg`}
                        style={{
                              width: `${completeLevel}%`,
                        }}
                  ></div>

                  {showLabel && (
                        <p className={`status-bar-text ${textColor}`}>
                              {completeLevel}%
                        </p>
                  )}
            </div>
      );
};

export default StatusBar;
