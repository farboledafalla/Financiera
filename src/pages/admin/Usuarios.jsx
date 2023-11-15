import { useEffect, useState, useRef } from 'react';

// 15. Mensajes al usuario
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
                  // 13.
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
               // 18. Pasar estado (setter) de 'Usuarios' al componente 'FormualarioCreacionUsuarios'
               // 21. (listaUsuarios, funcionParaAgregarUsuario)
               <FormularioCreacionUsuarios
                  setMostrarTabla={setMostrarTabla}
                  listaUsuarios={usuarios}
                  setUsuarios={setUsuarios}
               />
            )
            // 16. Contenedor para mensaje
         }
         <ToastContainer position='bottom-center' autoClose={5000} />
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
// 19. Recebir estado (prop) que viene del componente Padre (funcionParaMostrarTabla) para poder cambiarlo desde este componente
// y mostrar la tabla una vez guarde el usuario
// 22. (listaUsuarios, funcionParaAgregarUsuario)
const FormularioCreacionUsuarios = ({
   setMostrarTabla,
   listaUsuarios,
   setUsuarios,
}) => {
   // Se le deja null para que no ponga alguna referencia al principio
   const form = useRef(null);

   // Controlar los datos del formulario
   const submitForm = (e) => {
      // Evita que el form se redirija con valores predefinidos
      e.preventDefault();
      const fd = new FormData(form.current);

      // Crear el nuevo usuario con la info del form
      const nuevoUsuario = {};
      fd.forEach((value, key) => {
         nuevoUsuario[key] = value;
      });

      // Mostrar usuario
      //console.log('Datos del form: ', nuevoUsuario);

      // Se debe hacer validación cuando se envíe al backend y así saber que mensaje mostrar
      setMostrarTabla(true);
      toast.success('Usuario agregado con éxito');
      setUsuarios([...listaUsuarios, nuevoUsuario]);
   };

   // 14. Crear formulario
   return (
      <div className='border border-gray-300 flex flex-col items-center justify-center'>
         <h2 className=' text-2xl font-extrabold text-gray-800'>
            Crear Nuevo Usuario
         </h2>
         <form ref={form} onSubmit={submitForm} className='flex flex-col'>
            <label htmlFor='usuario' className='flex flex-col'>
               Usuario
               <input
                  className='border-gray-500 border p-2 rounded-lg m-2'
                  type='text'
                  name='usuario'
                  id=''
                  placeholder='pepito'
                  required
               />
            </label>
            <label htmlFor='nombre' className='flex flex-col'>
               Nombre
               <input
                  className='border-gray-500 border p-2 rounded-lg m-2'
                  type='text'
                  name='nombre'
                  id=''
                  placeholder='Pepito Perez'
                  required
               />
            </label>
            <label htmlFor='rol' className='flex flex-col'>
               Rol
               <select
                  name='rol'
                  className='border-gray-500 border p-2 rounded-lg m-2'
                  defaultValue={0}
                  required
               >
                  <option disabled value={0}>
                     Seleccione rol
                  </option>
                  <option>Aministrador</option>
                  <option>Contador</option>
                  <option>Asistente</option>
                  <option>Vendedor</option>
               </select>
            </label>
            <label htmlFor='modulo' className='flex flex-col'>
               Módulo
               <select
                  name='modulo'
                  className='border-gray-500 border p-2 rounded-lg m-2'
                  defaultValue={0}
                  required
               >
                  <option disabled value={0}>
                     Seleccione Módulo
                  </option>
                  <option>Aministración</option>
                  <option>Informes Contables</option>
                  <option>Informes Estadisticos</option>
                  <option>Ventas</option>
               </select>
            </label>
            <button
               type='submit'
               className=' col-span-2 bg-green-400 p-2 rounded-full text-gray-90 shadow-md hover:text-white hover:bg-green-700'
            >
               Guardar Usuario
            </button>
         </form>
      </div>
   );
};

export default Usuarios;
