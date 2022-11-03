import React, { useState } from 'react'
import './SearchPage.css'
import NavSearch from './NavSearch'
import { FaShareAlt } from "react-icons/fa";
import SearchDefault from './SearchDefault';
import SearchComments from './SearchComments';
import SearchAll from './SearchAll';

export default function SearchPage() {

  const [search, setSearch] = useState("india")
  const [firstFilter, setFirstFilter] = useState("story")
  const [secondFilter, setSecondFilter] = useState("popularity")
  const [thirdFilter, setThirdFilter] = useState("allTime")
  const [val, setVal] = useState(0)

    const totalItems = (total)=>{
      setVal(total)
    }
  


  return (
    <div className='search-page-outer'>
      <NavSearch search={search} setSearch={setSearch} />
      <div className='d-flex p-3 justify-content-between'>
        <div className='d-flex '>
          <span className='px-2'>Search</span>
          <select defaultValue={"story"} onChange={(e)=>setFirstFilter(e.target.value)}>
            <option value="all" >All</option>
            <option  value="story">Stories</option>
            <option value="comment">Comments</option>
          </select>
          <span className='px-2'>by</span>
          <select defaultValue={"popularity"} onChange={(e)=>setSecondFilter(e.target.value)}>
            <option value="popularity">Popularity</option>
            <option value="date">Date</option>
          </select>
          <span className='px-2'>for</span>
          <select defaultValue={"allTime"} onChange={(e)=>setThirdFilter(e.target.value)}>
            <option value="allTime">All time</option>
            <option value="day">Last 24h</option>
            <option value="week">Past week</option>
            <option value="month">Past month</option>
            <option value="year">Past year</option>
            <option value="6">Custom range</option>
          </select>
        </div>
        <div>
          <small className='fw-bold'>{val} Results &nbsp; <FaShareAlt/></small>
        </div>
      </div>
      {firstFilter === "story" ? <SearchDefault search={search} firstFilter={firstFilter} secondFilter={secondFilter} thirdFilter={thirdFilter} totalItems={totalItems}/> : null}
      {firstFilter === "comment" ? <SearchComments search={search} firstFilter={firstFilter} secondFilter={secondFilter} thirdFilter={thirdFilter} totalItems={totalItems} /> : null}
      {firstFilter === "all" ? <SearchAll search={search} firstFilter={firstFilter} secondFilter={secondFilter} thirdFilter={thirdFilter} totalItems={totalItems}/> : null}
    </div>
  )
}
