import React from 'react'
import "./NavHome.css"
import { NavLink, useNavigate } from 'react-router-dom'

export default function NavHome() {
    const navigate = useNavigate()

    return (
        <div className='nav-div-home'>
            <div className='d-flex'>
                <div className='d-flex pe-3 align-items-center'>
                    <NavLink to='/home'><span className='text-white px-2 border border-white fw-bold'>Y</span></NavLink>
                    <span className='ps-2  fw-bold'><NavLink to='/' className="text-dark">Hacker News</NavLink></span>
                </div>
                <ul>
                    <li><NavLink to="/" end>new</NavLink>&nbsp;|</li>
                    <li><NavLink to="/past">past</NavLink>&nbsp;|</li>
                    <li><NavLink to="/comm">comments</NavLink>&nbsp;|</li>
                    <li><NavLink to="/ask">ask</NavLink>&nbsp;|</li>
                    <li><NavLink to="/show">show</NavLink>&nbsp;|</li>
                    <li><NavLink to="/job">jobs</NavLink>&nbsp;|</li>
                    <li><NavLink to="/submit">submit</NavLink></li>
                </ul>
            </div>
            <div className='d-flex'>
                <button className='search-btn' onClick={() => navigate('/search')}>Search</button>
            </div>
        </div>
    )
}
