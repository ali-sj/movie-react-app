import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import tmdbApi from '../../api/thmdbApi'
import apiConfig from '../../api/apiConfig'
import './detail.scss'
import Casts from './Casts'
import MovieList from '../../components/movie-list/MovieList'
import Videos from './videos/Videos'
const Detail = () => {
  const { id, catalog } = useParams()
  const [item, setItem] = useState({})
  useEffect(() => {
    
    const setDetail = async () => {
      const response = await tmdbApi.detail(catalog, id, { params: {} })
      setItem(response)
      console.log(response);
    }
    setDetail()
  }, [id,catalog])
  const bg=apiConfig.originalImage(item.poster_path || item.backdrop_path)
  return (
    <>
      {
        item && <>
        <div className='banner' style={{backgroundImage:`url(${bg})`}}></div>
        <div className='movie-content container'>
          
            <div className="movie-content__poster" style={{backgroundImage:`url(${apiConfig.originalImage(item.poster_path)})`}}></div>
          
          <div className="movie-content__info">
            <h1 className="title">
              {item.title || item.name}
            </h1>
            <div className="genres">
              {item.genres && item.genres.slice(0,5).map((gener,i)=>(<span className='genres__item' key={i}>
                {gener.name}

              </span>))}
            </div>
            <div className="overviwe">{item.overview}</div>
          <div className="credict">
            <div className="credict__header">
              <h2>casts</h2>
              <Casts id={item.id}/>
            </div>
          </div>
          </div>
        </div>
        <Videos id={id}/>

        <div className="section mb-3">
                     <div className="section__header mb-2">
                        <h2>similer</h2>
                      
                   </div>
                          <MovieList category={catalog} type='similer' id={id}/>

                </div>



        </>
      }


    </>
  )
}

export default Detail
