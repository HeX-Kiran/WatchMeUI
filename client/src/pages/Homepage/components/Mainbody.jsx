import React from 'react'
import "./Mainbody.css"
import SummaryPanel from '../../../components/SummaryPanel/SummaryPanel'

function Mainbody() {
    return (
        <div className='main-body flex flex-col items-start justify-between'>
            <h3>Dashboard</h3>
            <SummaryPanel />
        </div>
    )
}

export default Mainbody