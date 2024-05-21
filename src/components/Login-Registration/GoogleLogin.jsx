import React from 'react'
import { FaGoogle } from "react-icons/fa";
import useAuth from '../../hooks/useAuth';

const GoogleLogin = () => {
  const {googleLogin} = useAuth();
  const handleGoogleSingIn = () => {
    googleLogin()
  }
  return (
    <button onClick={handleGoogleSingIn} className='btn w-full'>
       <div className='flex items-center gap-2'>
       <FaGoogle />
       <p>Google</p>
       </div>
        </button>
  )
}

export default GoogleLogin