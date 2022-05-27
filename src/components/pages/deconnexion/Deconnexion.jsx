import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

const Deconnexion = () => {
    
    useEffect(() =>{
        sessionStorage.removeItem("token")
    }, [])

  return (
    <Navigate to="/" />
  )
}

export default Deconnexion