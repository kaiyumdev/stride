import React from 'react'
import useAuth from '../../hooks/useAuth'
import { Navigate } from 'react-router-dom';
import LoadingSpinner from '../../components/Login-Registration/LoadingSpinner';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();

    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }
    if(user){
        return children;
    }
    return <Navigate to={"/login"}></Navigate>
}

export default PrivateRoute