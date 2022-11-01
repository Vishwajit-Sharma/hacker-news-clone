import React,{useState, useEffect} from 'react'
import { Pagination } from '@mui/material';
import Highlighter from "react-highlight-words";


export default function SearchDefault(props) {

  const [news, setNews] = useState([])
  const [page, setPage] = useState(1)

  useEffect(()=>{
    const fetchNews = async () =>{
      const res = await fetch(`http://hn.algolia.com/api/v1/search?query=${props.search}&tags=${props.firstFilter}&page=${page}&hitsPerPage=20`)
      const data =  await res.json()
      console.log(props.search);
      console.log(data.hits);
      setNews(data.hits)
    }
    fetchNews()
  },[page,props.search, props.firstFilter])

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
                let firstCount = (page-1)*20+1
                let lastCount = page*20
                let serialArray = []
                for(let i=firstCount; i<=lastCount;i++){
                  serialArray.push(i)
                }
            
               return  <div className='pb-4' key={index}>
                  
                  <p className='m-0 p-0'>{serialArray[index]}.&nbsp; {item.points} | {item.author} | {date} | {time} | on: {item.story_title} </p>
                  <Highlighter className='comment-text' highlightClassName="bg-warning" searchWords={[`${props.search}`]} textToHighlight={`${item.comment_text}`}/>
              </div>
              }
              )
          }
          <div className='d-flex justify-content-center mt-3'>
            {<Pagination count={20} page={page} color="error" onChange={handleChange} />}
          </div>
        </div>
    </div>
  )
}
