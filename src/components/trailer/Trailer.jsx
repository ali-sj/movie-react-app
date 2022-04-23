import React, { useEffect, useRef } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import { movieContex } from '../../context/movieContext'
import { useContext } from 'react'



const Trailer = () => {
    const {Active,disActiveHandler}=useContext(movieContex)
    const iframeRef=useRef(null)
  return (
    <div className='trailer'>
      <i className='close-trailer' style={{marginTop:'20px',display:'inline-block',color:'red',width:'50px',marginRight:0,position:'relative',marginLeft:'480px'}} onClick={disActiveHandler} >
        <AiOutlineClose/>
      </i>

        <iframe className='iframe' width='100%' height='500px' title='trailer'></iframe>
      
    </div>
  )
}

export default Trailer
