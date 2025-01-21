import "./TimeBar.css"

function TimeBar({ time }) {

    const fullDayInMilliSec = 24 * 60 * 60 * 60;

    const timeBarStyles = {
        gridTemplateColumns: `${(time / fullDayInMilliSec) * 100}% 1fr`
    }

    return (
        <div className="time-bar" style={timeBarStyles}>
            <span className="time-used" ></span>
        </div>
    )
}

export default TimeBar