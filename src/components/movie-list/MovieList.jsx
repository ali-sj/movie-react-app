import React, { useContext, useEffect, useState } from 'react'
import tmdbApi from '../../api/thmdbApi'
import { category } from '../../api/thmdbApi'

import apiConfig from '../../api/apiConfig'
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import MovieCard from '../MovieCard/MovieCard'

import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom'

const MovieList = (props) => {
    const[loading,setLoading]=useState(true)
    SwiperCore.use([Autoplay]);


    const[list,setList]=useState([])
    useEffect(() => {
    
        const getMovie = async () => {
            let response = null
            const params = {}
            if (props.type !== 'similer') {
                switch (props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(props.type, { params })
                        break;
                    default:
                        response = await tmdbApi.getTvList(props.type, { params })

                }
            } else {
                response = await tmdbApi.similar(props.category, props.id)
            }
           // console.log(response.results[0].poster_path);
      
            setList(response.results)
            setLoading(false)
        }
        getMovie()

    }, [])
    const content=loading?<div style={{textAlign:'center'}}>loading...</div>: <div>
    <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={6}
        autoplay={{ delay: 3000 }}>

        

            {list.map((movie, index) => {
                return <SwiperSlide key={movie.id}>
                    {({ isActive }) => (
                      <MovieCard item={movie} category={props.category}/>
                  
                  
                    )}
                </SwiperSlide>
            })}

    
    </Swiper>


</div>
    return (
    
        
       <>
           {content}
       </>
    )
}



export default MovieList
