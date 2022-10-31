import React from 'react'
import './SearchPage.css'
import NavSearch from './NavSearch'
import { FaShareAlt } from "react-icons/fa";

export default function SearchPage() {
  return (
    <div className='search-page-outer'>
      <NavSearch />
      <div className='d-flex p-3 justify-content-between'>
        <div className='d-flex '>
          <span className='px-2'>Search</span>
          <select>
            <option value="1" >All</option>
            <option selected value="2">Stories</option>
            <option value="3">Comments</option>
          </select>
          <span className='px-2'>by</span>
          <select>
            <option value="1" selected >Popularity</option>
            <option value="2">Date</option>
          </select>
          <span className='px-2'>for</span>
          <select>
            <option value="1" selected >All time</option>
            <option value="2">Last 24h</option>
            <option value="3">Past week</option>
            <option value="4">Past month</option>
            <option value="5">Past year</option>
            <option value="6">Custom range</option>
          </select>
        </div>
        <div>
          <small>1000 Results &nbsp; <FaShareAlt/></small>
        </div>
      </div>
    </div>
  )
}
