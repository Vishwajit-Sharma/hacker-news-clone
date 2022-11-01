import React, { useState } from 'react'
import './SearchPage.css'
import NavSearch from './NavSearch'
import { FaShareAlt } from "react-icons/fa";
import SearchDefault from './SearchDefault';
import SearchComments from './SearchComments';

export default function SearchPage() {

  const [search, setSearch] = useState("india")
  const [firstFilter, setFirstFilter] = useState("story")

  return (
    <div className='search-page-outer'>
      <NavSearch search={search} setSearch={setSearch} />
      <div className='d-flex p-3 justify-content-between'>
        <div className='d-flex '>
          <span className='px-2'>Search</span>
          <select defaultValue={"default"} onChange={(e)=>setFirstFilter(e.target.value)}>
            <option value="all" >All</option>
            <option  value="default">Stories</option>
            <option value="comment">Comments</option>
          </select>
          <span className='px-2'>by</span>
          <select defaultValue={"default"}>
            <option value="default">Popularity</option>
            <option value="2">Date</option>
          </select>
          <span className='px-2'>for</span>
          <select defaultValue={"default"}>
            <option vlue="default">All time</option>
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
      {firstFilter === "story" ? <SearchDefault search={search} firstFilter={firstFilter}/> : <SearchComments search={search} firstFilter={firstFilter} />}
      {/* {comments && <SearchComments search={search} />} */}
    </div>
  )
}
