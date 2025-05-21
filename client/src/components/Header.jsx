import PropTypes from 'prop-types'
import React from 'react'
import { useLocation } from 'react-router-dom'

const Header = ({name}) => {
  const location = useLocation()
  const pathName = location.pathname
  

  const formattedPath = pathName
  .replace(/%20/g, ' ')
  .split('/')
  .filter(Boolean);

  const dynamicName = formattedPath[formattedPath.length - 1]
  return (
    <section className="relative h-[40vh] md:h-[50vh] lg:h-[58vh] flex items-center">
      {/* <div className="absolute inset-0 bg-heading/70 backdrop-blur-xs z-10"></div> */}
      <img
        src="/pattern.png"
        alt=""
        className="absolute inset-0 bg-secondary w-full h-full object-cover object-center -z-10"
      />
      <div className="main relative z-20 text-white space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading xl:w-[70%] font-bold capitalize drop-shadow-xl">
          {name || dynamicName}
        </h1>
        <p className="paragraph !text-white/70  xl:w-[60%]">Syed Ammal Nursing College empowers students with knowledge, compassion, and clinical expertise.</p>
        <h4 className="capitalize text-white/70 font-para text-xs hidden sm:text-base flex flex-wrap items-center gap-1">
          <span className="hover:text-primary transition">home</span>
          {formattedPath.map((segment, index) => (
            <span key={index} className="flex items-center gap-1">
              <span className="text-primary">/</span>
              <span className="hover:text-primary transition">{segment}</span>
            </span>
          ))}
        </h4>
      </div>
    </section>

  )
}

Header.propTypes = {
    name:PropTypes.string
}

export default Header