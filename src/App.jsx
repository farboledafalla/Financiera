/* Importar estilos */
import 'styles/styles.css';

/* Importar Layouts */
import AuthLayout from 'layouts/AuthLayout';
import PrivateLayout from 'layouts/PrivateLayout';
import PublicLayout from 'layouts/PublicLayout';

/* Importar Páginas */
import Index from 'pages/Index';
import Login from 'pages/auth/Login';
import Registro from 'pages/auth/Registro';
import IndexAdmin from 'pages/admin/IndexAdmin';
import Informes from 'pages/admin/Informes';
import Anulaciones from 'pages/admin/Anulaciones';
import Usuarios from 'pages/admin/Usuarios';

// Contextos
import { DarkModeContex } from 'context/darkMode';

/* Importar manejador de rutas */
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Manejo de estados
import { useEffect, useState } from 'react';

function App() {
   const [darkMode, setDarkMode] = useState(false);

   useEffect(() => {
      console.log('Modo dark: ', darkMode);
   }, [darkMode]);

   return (
      <DarkModeContex.Provider value={{ darkMode, setDarkMode }}>
         <BrowserRouter>
            <Routes>
               <Route path='/' element={<PublicLayout />}>
                  <Route index element={<Index />} />
               </Route>
               <Route path='/auth' element={<AuthLayout />}>
                  <Route index element={<Login />} />
                  <Route path='/auth/registro' element={<Registro />} />
               </Route>
               <Route path='/admin' element={<PrivateLayout />}>
                  <Route index element={<IndexAdmin />} />
                  <Route path='/admin/informes' element={<Informes />} />
                  <Route path='/admin/anulaciones' element={<Anulaciones />} />
                  <Route path='/admin/usuarios' element={<Usuarios />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </DarkModeContex.Provider>
   );
}

export default App;
