import React from 'react'
import AccountImg from './AccountImg'

const SignInBtn = () => {
  return (
    <a href='https://google.com' className="bg-skyBlue text-white px-3 py-1 flex items-center text-base font-semibold rounded-3xl cursor-pointer">
    Sign In
    
    <AccountImg className='ml-2'/>

    
  </a>
  )
}

export default SignInBtn