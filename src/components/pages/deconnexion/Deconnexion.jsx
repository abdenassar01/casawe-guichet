import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useUser } from '../../../models/user'

const Deconnexion = () => {
    
  const store = useUser();

    useEffect(() =>{
        store.logout()
    }, [])

  return (
    <Navigate to="/" />
  )
}

export default Deconnexion