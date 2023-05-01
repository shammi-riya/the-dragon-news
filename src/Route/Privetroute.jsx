import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const Privetroute = ({ children }) => {
    const { user, loder } = useContext(AuthContext);
    const location = useLocation()


    if (loder) {
        return <div className='text-center'>
            <Spinner animation="border" variant="danger" />
        </div>
    }

    if (user) {
        return children;
    }
    else {
        return <Navigate state={{ from: location }} to="/login" replace></Navigate>
    }



    return (
        <div>

        </div>
    );
};

export default Privetroute;