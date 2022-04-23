import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import apiConfig from '../../api/apiConfig'
import tmdbApi, { movieType, tvType } from '../../api/thmdbApi'
import { category } from '../../api/thmdbApi'
import Button, { OutlineButton } from '../button/Button'
import MovieCard from '../MovieCard/MovieCard'
import './movie-grid.scss'
const MovieGrid = () => {
    const{catalog,keyword}=useParams()
    const [items,setItems]=useState([])
    const[page,setPage]=useState(1)
    const[totalPage,setTotalPage]=useState(0)
    const loadMore=async()=>{
        
        let response=null
        if(keyword===undefined){
            const params={
                page:page+1
            }
            switch(catalog){
                case category.movie:
                    response=await tmdbApi.getMoviesList(movieType.upcoming,{params})
                    break;
                    default:
                        response=await tmdbApi.getTvList(tvType.popular,{params}) 
            }

        }else{
            const params={
                page:page+1,
                query:keyword
            }
            response=await tmdbApi.search(catalog,{params})

        }
        setItems([...items,...response.results])
        setPage(page+1)
    }
    useEffect(()=>{
        const getVideose=async ()=>{
        let response=null
if(keyword===undefined){
    const params={}
            switch(catalog){
            case category.movie:
                response=await tmdbApi.getMoviesList(movieType.upcoming,{params})
                break;
                default:
                    response=await tmdbApi.getTvList(tvType.popular,{params})

        }
}else{
    const params={
        query:keyword
    }
    response=await tmdbApi.search(catalog,{params})

}
setItems(response.results)
setTotalPage(response.total_pages)
        
        }
        getVideose()
    

    },[catalog,keyword])
    

  return (
      <>
        <div className='movie-grid'>
{items.map((movie,index)=>(

     <MovieCard key={index} item={movie} category={catalog}/>
))}      
    </div>
    {
     totalPage>page?<OutlineButton onClick={loadMore} className='small'>load more</OutlineButton>:null   
    }
      </>
  
  )
}

export default MovieGrid
