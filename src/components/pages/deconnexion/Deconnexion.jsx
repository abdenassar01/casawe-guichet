import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useUserStore } from '../../../models/userStore'

const Deconnexion = () => {
    
  const root = useUserStore();

    useEffect(() =>{
      root.logout()
    }, [])

  return (
    <Navigate to="/" />
  )
}

export default Deconnexion