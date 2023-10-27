import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className=' bg-yellow-600'>
      Auth Layout
      <Outlet />
    </div>
  )
}

export default AuthLayout
