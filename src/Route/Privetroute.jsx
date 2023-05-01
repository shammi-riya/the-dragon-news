import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Privetroute = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation()

if(user){
  return children;
}else{
    return <Navigate state={{from:location}} to="/login" replace></Navigate>
}



    return (
        <div>
            
        </div>
    );
};

export default Privetroute;