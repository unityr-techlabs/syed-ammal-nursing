import React from 'react'

const RightImage = () => {
  return (
    <div className="relative">
        <img src="/about.jpg" className=" rounded-2xl object-cover z-20 w-[94%] " alt="" />
        <div className=" p-10 border-[10px] rounded-2xl absolute -top-6 right-0 -z-10 border-primary w-fit"></div>
    </div>
  )
}

export default RightImage