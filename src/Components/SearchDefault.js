import React,{useState, useEffect} from 'react'
import { Pagination } from '@mui/material';
import Highlighter from "react-highlight-words";


export default function SearchDefault(props) {

  const [news, setNews] = useState([])
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] =  useState(0)

  const d= new Date()
  var timeFilter
  if(props.thirdFilter === "day"){
    const fromDate = (d.setDate(d.getDate()))/1000
    const toDate = (d.setDate(d.getDate()-1))/1000
    timeFilter = `created_at_i<${fromDate},created_at_i>${toDate}`
  }  
  else if(props.thirdFilter === "week"){
    const fromDate = (d.setDate(d.getDate()))/1000
    const toDate = (d.setDate(d.getDate()-7))/1000
    timeFilter = `created_at_i<${fromDate},created_at_i>${toDate}`
  }     
  else if(props.thirdFilter === "month"){
    const fromDate = (d.setDate(d.getDate()))/1000
    const toDate = (d.setDate(d.getDate()-30))/1000
    timeFilter = `created_at_i<${fromDate},created_at_i>${toDate}`
  } 
  else if(props.thirdFilter === "year"){
    const fromDate = (d.setDate(d.getDate()))/1000
    const toDate = (d.setDate(d.getDate()-365))/1000
    timeFilter = `created_at_i<${fromDate},created_at_i>${toDate}`
  }  
  else if(props.thirdFilter === "allTime"){
    timeFilter=""
  }    

  useEffect(()=>{
    const fetchNews = async () =>{
      
      const url = props.secondFilter === "popularity" ? `http://hn.algolia.com/api/v1/search?&query=${props.search}&tags=${props.firstFilter}&page=${page}&hitsPerPage=50&numericFilters=${timeFilter}` : `http://hn.algolia.com/api/v1/search_by_date?query=${props.search}&tags=${props.firstFilter}&page=${page}&hitsPerPage=50&numericFilters=${timeFilter}`
      const res = await fetch(url) 
      const data =  await res.json()
      setNews(data.hits)
      setTotalPage(data.nbPages)
      
    
      //For sending data to parent about how many items are there based on filter
      const totalItemsFunc = ()=>{
        let val = data.hits.length ===0 ? 0 : (data.nbPages*data.hitsPerPage)
        props.totalItems(val)
      }
      totalItemsFunc()
    }
    fetchNews()
  },[page,props.search, props.firstFilter, props.secondFilter, props.thirdFilter])

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      <div className='search-page-news-div'>
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
                  {serialArray[index]}.&nbsp;
                  <Highlighter className='text-dark' highlightClassName="bg-warning" searchWords={[`${props.search}`]} textToHighlight={`${item.title}`}/>
                  <a href="/" className='url'>&nbsp;({item.url})&nbsp;</a>
                  <p className='m-0 p-0'>{item.points} points | {item.author} | {date} | {time} | {item.num_comments} comments </p>
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
