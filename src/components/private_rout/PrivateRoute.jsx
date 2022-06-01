import { Navigate } from "react-router-dom";
import { useUser } from "../../models/user";

const PrivateRoute = ({ Element }) => {

    const user = useUser();

    if(!user.isLogin){
        return <Navigate to="/connexion" replace/>
    }
  return (
    <>
        { Element }
    </>
  )
}

export default PrivateRoute