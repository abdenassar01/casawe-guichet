import { useUserStore } from "../../models/userStore";

import { observer } from "mobx-react-lite";
import { Navigate } from "react-router-dom";

const PrivateRoute = observer(({ Element }) => {

    const user = useUserStore();

    if(!user.isAuthentificated){
        return <Navigate to="/connexion" replace/>
    }
  return (
    <>
        { Element }
    </>
  )
})

export default PrivateRoute