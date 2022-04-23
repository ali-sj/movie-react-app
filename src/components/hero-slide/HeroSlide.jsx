import React, { useEffect, useState } from 'react'
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import tmdbApi, { category, movieType } from '../../api/thmdbApi'
import apiConfig from '../../api/apiConfig'

import Button, { OutlineButton } from '../button/Button';
import { useNavigate } from 'react-router-dom';
import './hero-slide.scss'
import Trailer from '../trailer/Trailer';
import { useContext } from 'react';
import { movieContex } from '../../context/movieContext';

const HeroSlide = () => {
    const{Active,ActiveHandler}=useContext(movieContex)

    SwiperCore.use([Autoplay]);
    const [movieList, setMovieList] = useState([])
    const params = { page: 1 }
    useEffect(() => {
    console.log(Active);
        const getMovie = async () => {
            const response = await tmdbApi.getMoviesList(movieType.popular, { params })
            //   console.log(response.results);
            setMovieList(response.results.slice(5, 10));

        }
        getMovie()
    }, [])
    return (
        <div className='hero-slide'>
            <Swiper
                modules={[Autoplay]}


                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}


            >
                {movieList.map((movie, index) => {
                     return     <SwiperSlide key={index}>
                     {({ isActive }) => (
                
                         <HeroSlideItem item={movie} className={`${isActive ? 'active' : ''}`} />
                        
                     )}
                 </SwiperSlide>
                  

                })}
            </Swiper>
            {Active?<Trailer/>:''}
            
            


        </div>
    )
}

export default HeroSlide
const HeroSlideItem = (props) => {
    const{Active,ActiveHandler}=useContext(movieContex)
    const item = props.item
    useEffect(()=>{
  
    

        
    },[Active])
 
    
    const setIframe=async()=>{
        ActiveHandler()

    const response=await tmdbApi.getVideos(category.movie,item.id)
    const videSrc = 'https://www.youtube.com/embed/' +response.results[0].key;
    console.log(response);
    console.log(  document.querySelector('.iframe'));
    document.querySelector('.iframe').setAttribute('src',videSrc)
 }

       
    const history=useNavigate()

    const pushHistory=()=>{
        history(`/movie/${item.id}`)
    }

    const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path)
    return (
        <div
        className={`hero-slide__item ${props.className}`}
        style={{backgroundImage: `url(${background})`}}
    >
        <div className="hero-slide__item__content container">
            <div className="hero-slide__item__content__info">
                <h2 className="title">{item.title}</h2>
                <div className="overview">{item.overview}</div>
                < div className="btns">
                    <Button onClick={pushHistory}>
                        Watch now
                    </Button>
                    <OutlineButton onClick={setIframe} >
                        Watch trailer
                    </OutlineButton>
                    
                </div>
            </div>
            <div className="hero-slide__item__content__poster">
                <img src={apiConfig.w500Image(item.poster_path)} alt="" />
            </div>
        </div>
    </div>
    )
}
