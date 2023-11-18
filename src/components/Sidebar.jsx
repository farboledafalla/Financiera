import React from 'react';
import ImagenLogo from './ImagenLogo';
import { Link } from 'react-router-dom';

const Sidebar = () => {
   return (
      <nav className='hidden md:flex md:w-72 border border-gray-300 h-full flex-col bg-gray-400 pt-5 px-4'>
         <Link to='/admin'>
            <ImagenLogo />
         </Link>

         <div className='mt-7'>
            <Ruta
               nombre='Usuarios'
               ruta='/admin/usuarios'
               icono='fas fa-solid fa-user w-10'
            />
            <Ruta
               nombre='Informes'
               ruta='/admin/informes'
               icono='fas fa-solid fa-clipboard w-10'
            />
            <Ruta
               nombre='Anulaciones'
               ruta='/admin/anulaciones'
               icono='fas fa-solid fa-thumbs-down w-10'
            />
         </div>
         <Ruta
            nombre='Cerrar Sesión'
            ruta='/'
            icono='fas fa-solid fa-door-open w-10'
         />
      </nav>
   );
};

const Ruta = ({ nombre, ruta, icono }) => {
   return (
      <Link to={ruta}>
         <button className='flex items-center p-1 bg-indigo-600 w-full rounded-md text-white my-3 hover:bg-indigo-800'>
            <i className={icono}></i>
            {nombre}
         </button>
      </Link>
   );
};

export default Sidebar;
