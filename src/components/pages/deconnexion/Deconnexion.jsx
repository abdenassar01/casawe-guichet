import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

const Deconnexion = ({ setLoggin }) => {
    
    useEffect(() =>{
        setLoggin(false)
    }, [setLoggin])

  return (
    <Navigate to="/" />
  )
}

export default Deconnexion