import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import tmdbApi from '../../../api/thmdbApi'

const Videos = ({ id }) => {
    const { catalog } = useParams()
    const [videos, setVideos] = useState([])
    useEffect(() => {
        const getVideos = async () => {
            const response = await tmdbApi.getVideos(catalog, id)
            setVideos(response.results.slice(0, 5))
        }
        getVideos()
    }, [catalog, id])
    return (
        <div className='videos'>
            {
                videos.map((movie, index) => (
                    <Video key={index} item={movie} />
                ))
            }



        </div>
    )
}


const Video = ({ item }) => {
    return (
        <div className='video'>
            <div className='video_title'><h2>
                {item.name}

                </h2>
            </div>
            <iframe
                src={`https://www.youtube.com/embed/${item.key}`}
                width='100%'
                title='video'
                height='600px'

            />

        </div>
    )
}



export default Videos
