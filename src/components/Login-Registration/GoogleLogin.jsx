import React from 'react'
import { FaGoogle } from "react-icons/fa";

const GoogleLogin = () => {
  return (
    <button className='btn w-full'>
       <div className='flex items-center gap-2'>
       <FaGoogle />
       <p>Google</p>
       </div>
        </button>
  )
}

export default GoogleLogin