import React from 'react'
import Sidebar from './components/Sidebar'
import "./Home.css"
import Mainbody from './components/Mainbody'

function Home() {
    return (
        <section className='home-page'>
            <Sidebar />
            <Mainbody />
        </section>
    )
}

export default Home