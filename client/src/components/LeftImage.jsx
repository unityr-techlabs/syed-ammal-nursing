import React from 'react'

const LeftImage = ({source,classNameImage,classNameDiv}) => {
  return (
    <div className={`${classNameDiv} relative`}>
        <img src={source} className={` ${classNameImage} rounded-2xl object-cover z-20 w-[94%] ms-auto`} alt="" />
        <div className=" p-10 border-[10px] rounded-2xl absolute -bottom-6 -z-10 border-primary w-fit"></div>
    </div>
  )
}

export default LeftImage