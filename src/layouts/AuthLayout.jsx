import React from 'react';
import { Outlet, Link } from 'react-router-dom';

import ImagenLogo from 'components/ImagenLogo';

const AuthLayout = () => {
   return (
      <div className='bg-gray-50 flex flex-col items-center justify-center py-2 px-4'>
         <div className='w-full flex items-start'>
            <Link to='/'>
               <i className='fas fa-home cursor-pointer hover:text-indigo-500' />
            </Link>
         </div>
         <div className='w-full max-w-md'>
            <ImagenLogo />
            <Outlet />
         </div>
      </div>
   );
};

export default AuthLayout;
