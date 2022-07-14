import { Navigate } from 'react-router-dom'

function PrivateRouter({ children}) {

  const token = localStorage.getItem('@awsToken')

  return (
    token ? children : <Navigate to='login'/>
  )
}

export default PrivateRouter