import React, { useEffect, useState } from 'react'
import './HomePage.css'
import NavHome from './NavHome'
import { BsFillTriangleFill } from "react-icons/bs";
import { Pagination } from '@mui/material';

export default function HomePage() {

  const [news, setNews] = useState([])
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] =  useState(0)

  useEffect(()=>{
    const fetchNews = async () =>{
      const res = await fetch(`http://hn.algolia.com/api/v1/search_by_date?query&page=${page}&hitsPerPage=50`)
      const data =  await res.json()
      console.log(data.hits);
      setNews(data.hits)
      setTotalPage(data.nbPages)
      console.log(data.nbPages);
    }
    fetchNews()
  },[page])

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className='home-page-outer'>
        <NavHome/>
        <div className='home-page-news-div'>
          {
            news.map( (item,index) => 
              { let time = item.created_at.substring(item.created_at.indexOf("T")+1, item.created_at.lastIndexOf("."))
                let date = item.created_at.substring(item.created_at[0], item.created_at.lastIndexOf("T"))
                let firstCount = (page-1)*50+1
                let lastCount = page*50
                let serialArray = []
                for(let i=firstCount; i<=lastCount;i++){
                  serialArray.push(i)
                }
            
               return  <div className='pb-2' key={index}>
                  {serialArray[index]}. <span className='upvote-icon'><BsFillTriangleFill/> </span> 
                  <span className='text-dark'>&nbsp;{item.story_title}</span>
                  <a href="/" className='url'>&nbsp;({item.story_url})&nbsp;</a>
                  <p className='m-0 p-0'>{item.points} by {item.author} on {date} at {time} &nbsp;| hide | {item.num_comments} comments </p>
              </div>
              }
              )
          }
          <div className='d-flex justify-content-center mt-3'>
            {<Pagination count={totalPage} page={page} color="error" onChange={handleChange} />}
          </div>
        </div>
    </div>
  )
}
