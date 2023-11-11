import { useEffect, useState } from 'react';
// 4. Lista de usuarios
const usuariosBackend = [
   {
      usuario: 'farboleda',
      nombre: 'Franklim Arboleda',
      rol: 'Administrador',
      modulo: 'Administración',
   },
   {
      usuario: 'lmarin',
      nombre: 'Leidy Marin',
      rol: 'Coordinador',
      modulo: 'Ventas',
   },
   {
      usuario: 'rcardenas',
      nombre: 'Rosa Cardenas',
      rol: 'Director',
      modulo: 'Gestión',
   },
];

// 1.
const Usuarios = () => {
   // 5. Cambiar entre Tabla / Formulario
   const [mostrarTabla, setMostrarTabla] = useState(true);
   // Cambiar texto botón
   const [textoBoton, setTextoBoton] = useState('Crear Nuevo Usuario');
   // listado de usuarios
   const [usuarios, setUsuarios] = useState([]);
   // 12. Cambiar color botón
   const [colorBoton, setColorBoton] = useState(true);

   // 8. La información de la BD la pedimos en un useEffect vacio
   useEffect(() => {
      // Obtener listado de usuarios desde el backend
      setUsuarios(usuariosBackend);
   }, []);

   // 6. Escuchar 'mostrarTabla'
   useEffect(() => {
      if (mostrarTabla) {
         setTextoBoton('Crear Nuevo Usuario');
         setColorBoton(true);
      } else {
         setTextoBoton('Mostrar Usuarios');
         setColorBoton(false);
      }
   }, [mostrarTabla]);

   return (
      <div className=' flex flex-col h-full w-full items-center justify-start py-10'>
         <div className='border border-gray-300 flex flex-col mb-10'>
            <h2 className=' text-3xl font-extrabold'>
               Administración de Usuarios
            </h2>
            <button
               onClick={() => {
                  setMostrarTabla(!mostrarTabla);
               }}
               className={
                  // 13. fin
                  colorBoton
                     ? 'text-white bg-green-500 p-5 rounded-full mt-8 h-28 w-28 self-end'
                     : 'text-white bg-indigo-500 p-5 rounded-full mt-8 h-28 w-28 self-end'
               }
            >
               {textoBoton}
            </button>
         </div>
         {
            // 7. Mostrar Tabla/Formulario
            mostrarTabla ? (
               // 9.
               <TablaUsuarios listaUsuarios={usuarios} />
            ) : (
               <FormularioCreacionUsuarios />
            )
         }
      </div>
   );
};

// 2.
// 10. {listaUsuarios}
const TablaUsuarios = ({ listaUsuarios }) => {
   useEffect(() => {
      console.log('Listado de usuarios en el componente tabla', listaUsuarios);
   }, [listaUsuarios]);

   return (
      <div className='border border-gray-300 flex flex-col items-center justify-center'>
         <h2 className=' text-2xl font-extrabold text-gray-800'>
            Listado de Usuarios
         </h2>
         <table>
            <thead>
               <tr>
                  <td>Usuario</td>
                  <td>Nombre</td>
                  <td>Rol</td>
                  <td>Módulo</td>
               </tr>
            </thead>
            <tbody>
               {
                  // 11.
                  listaUsuarios.map((usuario) => {
                     return (
                        <tr>
                           <td>{usuario.usuario}</td>
                           <td>{usuario.nombre}</td>
                           <td>{usuario.rol}</td>
                           <td>{usuario.modulo}</td>
                        </tr>
                     );
                  })
               }
            </tbody>
         </table>
      </div>
   );
};

// 3.
const FormularioCreacionUsuarios = () => {
   return (
      <div className='border border-gray-300 flex flex-col items-center justify-center'>
         <h2 className=' text-2xl font-extrabold text-gray-800'>
            Crear Nuevo Usuario
         </h2>
         <form className='grid grid-cols-2'>
            <input
               className='border-gray-500 border p-2 rounded-lg m-2'
               type='text'
               name=''
               id=''
            />
            <input
               className='border-gray-500 border p-2 rounded-lg m-2'
               type='text'
               name=''
               id=''
            />
            <input
               className='border-gray-500 border p-2 rounded-lg m-2'
               type='text'
               name=''
               id=''
            />
            <input
               className='border-gray-500 border p-2 rounded-lg m-2'
               type='text'
               name=''
               id=''
            />
            <button className=' col-span-2 bg-green-400 p-2 rounded-full text-gray-90 shadow-md hover:text-white hover:bg-green-700'>
               Guardar Usuario
            </button>
         </form>
      </div>
   );
};

export default Usuarios;
