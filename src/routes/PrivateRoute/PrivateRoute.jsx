import React from 'react'
import useAuth from '../../hooks/useAuth'
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../../components/Login-Registration/LoadingSpinner';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    let location = useLocation();

    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
}

export default PrivateRoute