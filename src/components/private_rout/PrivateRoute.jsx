import { useUserStore } from "../../models/userStore";

import { observer } from "mobx-react-lite";
import { Navigate } from "react-router-dom";

const PrivateRoute = observer(({ Element }) => {

    const user = useUserStore();

    console.log("Auth: " + user.isAuthentificated)
    console.log("Autor: " + user.isAuthorized())
    // if( !user.isAuthentificated || !user.isAuthorized() ){
    //     return <Navigate to="/connexion" replace/>
    // }
  return (
    <>
        { Element }
    </>
  )
})

export default PrivateRoute