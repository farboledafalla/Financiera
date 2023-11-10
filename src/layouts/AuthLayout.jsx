import React from 'react'
import { Outlet, Link } from 'react-router-dom'

/* Importar imagenes */
import Logo from 'media/logo.png'

const AuthLayout = () => {
  return (
    <div className='bg-gray-50 flex flex-col items-center justify-center py-2 px-4'>
      <div className='w-full flex items-start'>
        <Link to='/'>
          <i className='fas fa-home cursor-pointer hover:text-indigo-500' />
        </Link>
      </div>
      <div className='w-full max-w-md'>
        <img className='mx-auto h-40 w-auto' src={Logo} alt='Logo' />
        <Outlet />        
      </div>
    </div>
  )
}

export default AuthLayout
