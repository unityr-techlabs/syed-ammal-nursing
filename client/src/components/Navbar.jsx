import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { FiPhone } from "react-icons/fi";
import { HiMiniBars3 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';
import { documentData } from '../../utils/staticData';
import Logo from './Logo';

const Navbar = () => {


  const [nav,setNav] = useState(false)
  const navItems = [
    {
      name:'home',
      path:'/'
    },
    {
      name:'about',
      path:'/about'
    },
    {
      name:'program',
      path:'/'
    },
    {
      name:'event',
      path:'/'
    },
    {
      name:'blog',
      path:'/'
    },
    {
      name:'contact',
      path:'/'
    },
    
  ]

  const documentList = documentData.map((obj)=>Object.keys(obj))[0]
  
  const navItems1 = [
    {
      name:'taminadu nurses and midwives recognition',
      path:'/document/taminadu nurses and midwives recognition'
    },
    {
      name:'national midvives council',
      path:'/document/national midvives council'
    },
    {
      name:'inc recognition order',
      path:'/document/inc recognition order'
    },
  ]

    const navItems2 = [
          {
      name:'home',
      path:'/'
    },
    {
      name:'about us',
      path:'/about'
    },
    {
      name:'faculty',
      path:'/faculty'
    },
    {
      name:'student',
      path:'/student'
    },
    {
      name:'facilities',
      path:'/facility'
    },
    
  ]

  const location = useLocation();

  return (
    <nav className=' shadow-minimal bg-background sticky top-0 w-full z-40'>
      {/* <div className=" bg-secondary p-3 w-full hidden xl:block ">
        <div className="main flex items-center text-white font-heading font-bold justify-between capitalize">
          {navItems1.map((item,index)=>(
            <Link key={index} to={item.path} className=''>{item.name}</Link>
          ))}
          </div>
      </div> */}
      {/* Desktop */}
      <div className=" bg-secondary p-3 w-full hidden xl:block ">
        <div className="flex main items-center justify-between ">
          <div className=" flex items-center text-sm text-white font-heading font-bold gap-5 capitalize">
            {documentList.map((item,index)=>(
              <Link key={index} to={`/document/${item}`} className=' hover:text-primary duration-300 border-r pr-5 last:pr-0 last:border-none'>{item}</Link>
            ))}
          </div>
          <div className="">
              <Link to={'/contact'} className=' bg-primary px-4 py-1 rounded-lg text-sm text-white font-heading font-bold gap-5 capitalize'>contact</Link>
          </div>
        </div>
      </div>
      <div className="main flex items-center justify-between py-3">
        {/* <Link to={'/'} className="flex gap-3 items-center">
          <div className="logo relative w-[80px] h-[70px]">
            <img src="/logo.png" className=' h-full top-0 absolute w-full' alt="" />
          </div>
          <div className=" hidden xs:block">
            <h1 className=' font-universal text-heading text-lg font-semibold mb-1 capitalize leading-[1.2] '>syed ammal <br /> school of nurshing</h1>
            <h4 className=' text-primary capitalize font-para font-semibold text-xs'>helping heart healing mind </h4>
          </div>
        </Link> */}
        <Logo/>
        <div className="btns xl:hidden">
          <motion.button whileTap={{scale:.9}} className=' text-3xl text-white bg-primary p-2 rounded-xl' onClick={()=>setNav(!nav)}>
            {!nav?(
              <HiMiniBars3/>
            ):(
              <IoClose/>
            )}
          </motion.button>
        </div>
        {/* Main items */}
        <div className="hidden xl:flex space-x-9 capitalize text-secondary font-heading font-bold items-center">
          {navItems2.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={index}
                to={item.path}
                className={`hover:text-primary transition-all duration-300 ${
                  isActive ? 'text-primary underline underline-offset-8 decoration-primary' : ''
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* <div className=" w-[30%] flex items-center text-secondary font-heading font-bold justify-between capitalize">
        {navItems2.map((item,index)=>(
          <Link key={index} to={item.path} className=''>{item.name}</Link>
        ))}
        </div> */}
        <div className="xl:flex hidden items-center gap-7 border-l pl-7 border-paragraph/20">
          <h3 className='flex text-secondary items-center gap-5 font-heading font-semibold'> 
            <span className='border bg-secondary border-secondary text-base text-primary rounded-full  p-2'><FiPhone className=' '/> </span>
            +91 9876543332</h3>
          <Link to={'/'} className=' hidden font-heading font-semibold xl:block bg-primary rounded-xl px-6 py-2 text-white capitalize'>admission</Link>
        </div>
      </div>
      {/* Mobile Navigation */}
<div className="xl:hidden relative z-50">
  <div
    className={`fixed top-0 left-0 h-screen w-[75%] bg-white/90 backdrop-blur-md shadow-2xl p-6 transform transition-transform duration-500 ease-in-out ${
      nav ? 'translate-x-0' : '-translate-x-full'
    }`}
  >
    <div className="flex flex-col h-full">
      {/* Logo and Close Button */}
      <Logo/>

      {/* Menu Items */}
      <ul className="flex flex-col capitalize space-y-4 text-secondary font-heading text-lg font-semibold">
            {/* Main Nav Items */}
            <li className="border-t border-paragraph/20 pt-4 mt-4 text-xs uppercase tracking-wide text-paragraph">
              menu
            </li>
            {navItems2.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="block w-full rounded-md hover:bg-primary hover:text-white transition-all duration-300"
                  onClick={() => setNav(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Divider for documents */}
            <li className="border-t border-paragraph/20 pt-4 mt-4 text-xs uppercase tracking-wide text-paragraph">
              Documents
            </li>

            {/* Dynamically Load Documents */}
            {Object.entries(documentData[0]).map(([name, url], index) => (
              <li key={`doc-${index}`}>
                <Link
                  to={`/document/${name}`}
                  className="block w-full  rounded-md hover:bg-primary hover:text-white transition-all duration-300"
                  onClick={() => setNav(false)}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

      {/* Contact Button */}
      <div className="mt-auto">
        <Link
          to="/contact"
          onClick={() => setNav(false)}
          className="block w-full bg-primary text-white text-center py-3 rounded-xl font-heading font-bold capitalize shadow-md hover:bg-primary/90 transition-all"
        >
          Contact Us
        </Link>
      </div>
    </div>
  </div>
</div>


    </nav>
  )
}

export default Navbar