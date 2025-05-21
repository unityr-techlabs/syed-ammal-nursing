import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ({textStyle,logoStyle}) => {
  return (
    <Link to={'/'} className="flex gap-3 items-center">
          <div className={`logo ${logoStyle} relative w-[80px] h-[70px]`}>
            <img src="/logo.png" className=' h-full top-0 absolute w-full' alt="" />
          </div>
          <div className=" hidden xs:block">
            <h1 className={` font-universal text-heading ${textStyle} text-lg font-semibold mb-1 capitalize leading-[1.2] `}>syed ammal <br /> school of nursing</h1>
            <h4 className=' text-primary capitalize font-para font-semibold text-xs'>helping heart healing mind </h4>
          </div>
        </Link>
  )
}

export default Logo