import TimeBar from '../TimeBar/TimeBar'
import './SummaryPanel.css'

function SummaryPanel() {
    return (

        <div className='summary-panel flex flex-col items-start justify-between gap-20 w-full'>
            <h1>Today's Summary</h1>
            <div className='time-bar-container flex items-center justify-between w-[100%]'>
                <div className='time-bar-card flex flex-col items-start justify-center gap-2'>
                    <h3 className='site-name text-md '>ChatGPT</h3>
                    <TimeBar time={12 * 60 * 60 * 60} />
                    <h5 className='time-spend'>12h 30m</h5>
                </div>
                <div className='time-bar-card flex flex-col items-start justify-center gap-2'>
                    <h3 className='site-name text-md '>ChatGPT</h3>
                    <TimeBar time={12 * 60 * 60 * 60} />
                    <h5 className='time-spend'>12h 30m</h5>
                </div>
                <div className='time-bar-card flex flex-col items-start justify-center gap-2'>
                    <h3 className='site-name text-md '>ChatGPT</h3>
                    <TimeBar time={12 * 60 * 60 * 60} />
                    <h5 className='time-spend'>12h 30m</h5>
                </div>
                <div className='time-bar-card flex flex-col items-start justify-center gap-2'>
                    <h3 className='site-name text-md '>ChatGPT</h3>
                    <TimeBar time={12 * 60 * 60 * 60} />
                    <h5 className='time-spend'>12h 30m</h5>
                </div>
                <div className='time-bar-card flex flex-col items-start justify-center gap-2'>
                    <h3 className='site-name text-md '>ChatGPT</h3>
                    <TimeBar time={12 * 60 * 60 * 60} />
                    <h5 className='time-spend'>12h 30m</h5>
                </div>
            </div>
        </div>
    )
}

export default SummaryPanel