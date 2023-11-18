import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SidebarResponsive = () => {
   const [mostrarNavegacion, setMostrarNavegacion] = useState(false);

   return (
      <div
         className='md:hidden'
         onClick={() => {
            setMostrarNavegacion(!mostrarNavegacion);
         }}
      >
         <i
            className={`fas fa-solid fa-${
               mostrarNavegacion ? 'arrow-up' : 'bars'
            } hover:text-yellow-500 hover:cursor-pointer mx-2`}
         />
         {mostrarNavegacion && (
            <ul>
               <RutaResponsive
                  nombre='Usuarios'
                  ruta='/admin/usuarios'
                  icono='user'
               />
               <RutaResponsive
                  nombre='Informes'
                  ruta='/admin/informes'
                  icono='clipboard'
               />
               <RutaResponsive
                  nombre='Anulaciones'
                  ruta='/admin/anulaciones'
                  icono='thumbs-down'
               />
            </ul>
         )}
      </div>
   );
};

const RutaResponsive = ({ nombre, ruta, icono }) => {
   return (
      <Link to={ruta}>
         <li className='flex items-center p-1 bg-indigo-600 w-full rounded-md text-white my-1 hover:bg-indigo-800'>
            <i className={`fas fa-solid fa-${icono} w-10 ml-2`} />
            {nombre}
         </li>
      </Link>
   );
};

export default SidebarResponsive;
