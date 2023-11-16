import { useDarkMode } from 'context/darkMode';
import React from 'react';

const Index = () => {
   const { darkMode } = useDarkMode();

   return (
      <div
         className={
            darkMode ? 'flex h-full bg-gray-900' : 'flex h-full bg-gray-100'
         }
      >
         Contenido Landing Financiera
      </div>
   );
};

export default Index;
