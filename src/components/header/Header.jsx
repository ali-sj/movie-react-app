import React, { useState } from 'react'
import './header.scss'
import Logo from '../../assets/tmovie.png'
import { Link } from 'react-router-dom'
const headerNav=[
  {
    display:'Home',
    path:'/'
  },
  {
    display:'movie',
    path:'/movie'
  },
  {
    display:'tv series',
    path:'/tv'
  },
]
const {pathname}=window.location
const Header = () => {
  //console.log(pathname);
  const [path,setPath]=useState('/')
  return (
    <div className='header'>
      <div className='header__wrap container'>
        <div className='logo'>
          <img src={Logo}/>
          <Link to="/">tMovies</Link>

        </div>
        <ul className='header__nav'>
          {headerNav.map((link,index)=><li onClick={()=>{setPath(link.path)}} className={link.path===path?'active':''} key={index} ><Link to={link.path}>{link.display}</Link></li>)}
        </ul>
      </div>
      
    </div>
  )
}

export default Header
