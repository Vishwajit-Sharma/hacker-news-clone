import React from 'react'
import './NavSearch.css'
import { NavLink } from 'react-router-dom'
import { BsSearch } from "react-icons/bs";
import { FaAlgolia } from "react-icons/fa";

export default function NavSearch(props) {
    return (
        <div className='nav-div-search'>
            <div className="d-flex">
                <div className='d-flex align-items-center'>
                    <NavLink to='/home'><span className='text-white px-2 border border-white fw-bold'>H</span></NavLink>
                    <span className='ps-2  fw-bold'><NavLink to='/' className="text-dark">Search Hacker News</NavLink></span>
                </div>
            </div>
            <div className='search-div'>
                <span className='search-icon'><BsSearch/></span>
                <input type="text" value={props.search} placeholder='Search stories by title, url or author' onChange={(e)=>props.setSearch(e.target.value)}/>
                <span className='search-credits'>Search by<span className='ps-2 text-primary fw-bold'><FaAlgolia/> algolia</span></span>
            </div>

        </div>
    )
}
