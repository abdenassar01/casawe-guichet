import { useUserStore } from "../../models/userStore";

import { observer } from "mobx-react-lite";
import Connection from "../pages/connection/Connection";

const PrivateRoute = observer(({ Element }) => {

    const user = useUserStore();

    if( !user.isAuthentificated ){
      return <Connection />
    }

  return (
    <>
        { Element }
    </>
  )
})

export default PrivateRoute