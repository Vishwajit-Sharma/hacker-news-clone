import React,{useState, useEffect} from 'react'
import { Pagination } from '@mui/material';
import Highlighter from "react-highlight-words";


export default function SearchDefault(props) {

    //dateRange=all&page=0&prefix=true&query=nexus&sort=byPopularity&type=story
  const [news, setNews] = useState([])
  const [page, setPage] = useState(1)

  useEffect(()=>{
    const fetchNews = async () =>{
      const res = await fetch(`http://hn.algolia.com/api/v1/search?query=${props.search}&tags=${props.firstFilter}&page=${page}&hitsPerPage=50`)
      const data =  await res.json()
      console.log(props.firstFilter);
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
                  <p className='m-0 p-0'>{item.points} | {item.author} | {date} | {time} | {item.num_comments} comments </p>
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
