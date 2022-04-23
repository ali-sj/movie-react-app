import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import tmdbApi from '../../api/thmdbApi'
import apiConfig from '../../api/apiConfig'

const Casts = ({ id }) => {
    const { catalog } = useParams()
    const [casts, setCasts] = useState([])
    useEffect(() => {

        const getCasts = async () => {
            const response = await tmdbApi.credits(catalog, id)
            console.log(response.cast.slice(0, 5)[0].profile_path);
            setCasts(response.cast.slice(0, 5))

        }
        getCasts()
    }, [catalog, id])
    return (
        <div className='casts'>
            {casts.map((cast, i) => (
                <div key={i} className="cast-item">
                    <div className="casts__item__img" style={{ backgroundImage: `url(${apiConfig.w500Image(cast.profile_path)})` }}>
                    </div>
                    <p className='casts__item__name'>{cast.name}</p>

                </div>
            ))}

        </div>
    )
}

export default Casts
