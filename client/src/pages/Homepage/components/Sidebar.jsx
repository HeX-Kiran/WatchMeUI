import React from 'react'
import './Sidebar.css'

function Sidebar() {
    return (
        <aside className='side-bar flex flex-col items-center justify-between'>
            <h1 className='logo'>Watch Me</h1>
            <div className='side-bar-options flex flex-col items-center justify-between'>
                <a>Dashboard</a>
                <a>Inbox</a>
                <a>Analytics</a>
                <a>Profile</a>
            </div>


            <button className='log-out btn btn-off'>Log out</button>
        </aside>
    )
}

export default Sidebar