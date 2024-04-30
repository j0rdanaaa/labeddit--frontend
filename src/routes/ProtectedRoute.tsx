import Cookies from "js-cookie"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = ({ children }: any) => {
  const token = Cookies.get('token')

  if (!token) {
    return <Navigate to='/' replace />
  }
  return children ? children : <Outlet />
}

export default ProtectedRoute