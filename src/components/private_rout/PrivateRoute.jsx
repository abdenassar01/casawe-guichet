import { observer } from "mobx-react-lite";
import { Navigate } from "react-router-dom";
import { useUser } from "../../models/user";
import { useUtils } from "../../models/utilityStore";

const PrivateRoute = observer(({ Element }) => {

    const user = useUser();
    // const store = useUtils();

    if(!user.isLogin){
        return <Navigate to="/connexion" replace/>
    }
  return (
    <>
        { Element }
    </>
  )
})

export default PrivateRoute