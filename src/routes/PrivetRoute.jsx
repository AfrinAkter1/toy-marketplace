import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Pages/provider/AuthProvider";
import Swal from "sweetalert2";


const PrivetRoute = ({children}) => {
    const location = useLocation()
   
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <progress className="progress w-56 "></progress>
    }
    if(user){
           return children
    }
    else{
    return (Swal.fire('You have to log in first to view details'),
       <Navigate to='/login' state={{from: location}} replace></Navigate>
    )
    }
};

export default PrivetRoute;