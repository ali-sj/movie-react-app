import React, { useEffect } from 'react'
import apiConfig from '../../api/apiConfig'
import { category } from '../../api/thmdbApi'
import { Link } from 'react-router-dom'
import './MovieCard.scss'
import '../../assets/boxicons-2.0.7/css/boxicons.min.css'
import Button from '../button/Button'
const MovieCard = ({ item, category }) => {
    const { id, poster_path,backdrop_path,title,name } = item
    const link = '/' + category+'/' + id
    const bg=apiConfig.w500Image(poster_path || backdrop_path)
    useEffect(()=>{
       // console.log(item);
    },[])
    return (
        <Link to={link} >
            <div className='movie-card'  style={{backgroundImage:`url(${bg})`}} >

<Button>
<i className="bx bx-play"></i>

</Button>



            </div>
            <h3>{title || name}</h3>

        </Link>

    )
}

export default MovieCard
