/* Importar componentes */
import Sidebar from "components/Sidebar"
import { Outlet } from "react-router-dom"

const PrivateLayout = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default PrivateLayout