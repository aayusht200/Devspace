import './StatusBar.css';

const StatusBar = ({ current = 0, total = 100, showLabel = true, className }) => {
    const percentage = total > 0 ? Math.floor((current / total) * 100) : 0;

    const completeLevel = Math.min(100, Math.max(0, percentage));

    return (
        <div className={`status-bar ${className} bg-white`}>
            <div
                className={`fill-level bg-reading-accent ${className}`}
                style={{
                    width: `${completeLevel}%`,
                }}
            ></div>

            {showLabel && <p className="status-bar-text">{completeLevel}%</p>}
        </div>
    );
};

export default StatusBar;
