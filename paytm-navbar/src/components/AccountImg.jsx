import React from 'react'
import Circle from './Circle'

const AccountImg = () => {
  return (
    <>
    <Circle dia='8' color='[#002970]' className='relative flex items-center justify-center overflow-hidden ml-2'>

    {/* <div className="bg-[#002970] w-8 h-8 rounded-full ml-2 relative flex items-center justify-center overflow-hidden "> */}
      <Circle dia='4'/>
      <Circle dia='7' color='white' className='absolute -bottom-4'/>
    {/* </div> */}
    </Circle>
      {/* <div className="bg-white w-4 h-4 rounded-full"></div>
      <div className="bg-white w-7 h-7 rounded-full absolute bottom-[-15px]"></div> */}
    </>
  )
}

export default AccountImg