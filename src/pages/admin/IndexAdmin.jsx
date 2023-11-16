import React from 'react';
import { useDarkMode } from 'context/darkMode';

const IndexAdmin = () => {
   const { darkMode } = useDarkMode();

   return (
      <div
         className={
            darkMode
               ? 'flex w-full h-full bg-gray-900 text-white'
               : 'flex w-full h-full bg-gray-100'
         }
      >
         Soy el contenido del Index del panel de Admin
      </div>
   );
};

export default IndexAdmin;
