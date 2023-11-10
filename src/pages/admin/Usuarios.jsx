import { useEffect, useState } from 'react';

const Usuarios = () => {
   const [mostrarTexto, setMostrarTexto] = useState(false);

   return (
      <form className="flex flex-col">
         <h2>Usuarios</h2>
         <button
            type="button"
            onClick={() => setMostrarTexto(!mostrarTexto)}
            className="bg-indigo-500 text-white"
         >
            Mostrar / Ocultar texto
         </button>

         {mostrarTexto && (
            <span className="text-3xl text-red-500 font-bold">
               Texto que se muestra y oculta
            </span>
         )}
      </form>
   );
};

export default Usuarios;
