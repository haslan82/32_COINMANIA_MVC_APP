import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const HeaderView = () => {
  return (
  <header >
    <Link className='h-logo'>
    <img src="/public/c-logo.png" alt=""  />
    <h3 className='text-white'>Coinmania</h3>
    </Link>
    <div className='buttons'>
<NavLink>Anasayfa</NavLink>
<NavLink>Kayıt Ol</NavLink>
    </div>
  </header>
  )
}

export default HeaderView
