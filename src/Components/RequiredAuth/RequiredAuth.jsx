import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import Loading from '../Shared/Loading/Loading';

const RequiredAuth = ({children}) => {
    const [user,loading,error] = useAuthState(auth)
    const location = useLocation()
    console.log(location)
    if(loading){
        return <Loading></Loading>
    }
    else if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children
};

export default RequiredAuth;