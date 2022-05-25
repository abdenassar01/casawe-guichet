import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

const Deconnexion = ({setLoggin}) => {
    
    useEffect(() =>{
        setLoggin(false)
    })

  return (
    <Navigate to="/" />
  )
}

export default Deconnexion