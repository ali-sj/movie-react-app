import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Input from '../components/input/Input'
import PageHeader from '../components/pageheader/PageHeader'
import Button from '../components/button/Button'
import { useNavigate } from 'react-router'
import MovieGrid from '../components/movieGrid/MovieGrid'
import './catalog.scss'
import MovieList from '../components/movie-list/MovieList'
const Catalog = () => {
  const history=useNavigate()
  const{catalog,keyword}=useParams()
  const[kewWord,setKeyWord]=useState('')
useEffect(()=>{

},[kewWord])
const goToSearch=()=>{
  if(kewWord.trim().length>0){
    history(`/${catalog}/search/${kewWord}`)

  }
}
  return (
    <>
    <PageHeader>
      {catalog==='movie'?'movie':'TV Series'}
    </PageHeader>
    <div style={{marginBottom:'50px'}} className="movie-serach">
      <Input type='text'
      placeholder='search'
      onChange={(e)=>{setKeyWord(e.target.value)}}
      value={kewWord}
      />
      <Button onClick={goToSearch} className='small'>serach...</Button>

    </div>
    <MovieGrid/>
    


      
    </>
  )
}

export default Catalog
