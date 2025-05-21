import React from 'react'
import { MdOutlineDateRange } from "react-icons/md";
import ToUp from '../../animations/ToUp';
import { Link, useParams } from 'react-router-dom';
import { FaArrowRightLong, FaRightLong } from 'react-icons/fa6';
import ContactBox from '../../components/ContactBox';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const BlogDetail = () => {

  const {name} = useParams()
  const [blog,setblog] = useState(null)
  const [allBlogs,setAllBlogs] = useState(null)
  useEffect(()=>{
    try {
      axios.get(`http://localhost:3000/api/blog/${name}`).then((res)=>{
        setblog(res.data.data)
        console.log(res.data.data)
      })
      axios.get('http://localhost:3000/api/blog').then((res)=>{
        setAllBlogs(res.data.data)
      })
    } catch (error) {
      console.log(error)
    }
  },[])

  const DetailCol = ({item}) =>{
    return(
      <section>
        <div className="">
          <img src={`http://localhost:3000/api/${item.profilePicture}`} alt="" className='h-[400px] rounded-2xl object-cover w-full mb-5 ' />
          <div className="flex mb-5 gap-6 capitalize">
              <h3 className='flex items-center gap-3 font-heading font-bold'><MdOutlineDateRange className=' text-primary'/>  11 may 2025</h3>
              <h3 className='flex items-center gap-3 font-heading font-bold'><MdOutlineDateRange className=' text-primary'/>  admin</h3>
          </div>
          <ToUp>
            <h1 className='heading mb-5'>{item.title}</h1>
          </ToUp>
          <div className="content paragraph space-y-4">
            {blog.content.map((para, index) => {
              const isBeforeLast = index === blog.content.length - 1;
              return (
                <React.Fragment key={index}>
                  {isBeforeLast && (
                    <div className=" bg-foreground rounded-2xl p-10 text-heading italic paragraph my-10 font-medium">
                      <p>"{blog.message}"</p>
                    </div>
                  )}
                  <ToUp delay={index / 10}>
                    <p>{para}</p>
                  </ToUp>
                </React.Fragment>
              );
            })}
          </div>

        </div>
      </section>
    )
  }

  const FilterCol = ({item}) =>{


    const FilterBox = ({item}) =>{
      return(
        <div className="flex group gap-4 border-b pb-3 border-paragraph/20 last:border-none last:pb-0">
          <img src="/dummy.jpg" className='  w-[35%] rounded-xl object-cover' alt="" />
          <div className=" flex flex-col justify-between">
            <h1 className=' line-clamp-2 font-heading group-hover:text-heading duration-300 text-base leading-relaxed font-bold text-paragraph capitalize'>{item.title}</h1>
            <Link to={`/blog/${item.name}`} className=' text-primary capitalize  text-xs flex items-center gap-3'>read more  <FaArrowRightLong/> </Link>
          </div>
        </div>
      )
    }
    
    return(
      <section className=' space-y-8'>
          <div className="  shadow-minimal p-6 flex rounded-2xl justify-center items-center flex-col relative">
            <h3 className=' capitalize font-heading mb-7 rounded-2xl bg-primary w-full text-white p-2 text-center font-bold text-xl'>recent post</h3>
            <div className="  space-y-3 w-full">
              {item.map((item,index)=>(
                <FilterBox key={index} item={item}/>
              ))}
            </div>
          <div className=" bg-secondary p-[2px]  main absolute bottom-0 mx-auto"></div>
          </div>
          {/* <ContactBox/> */}
          <ContactBox/>
        </section>
    )
  }
  
  return (
    <main className='py-10'>
        <div className="main">
          <div className="flex flex-col xl:flex-row gap-10">
            <div className="xl:w-[70%]">
              {blog != null?(
                <DetailCol item={blog}/>
              ):(
                <h1>loading</h1>
              )}
            </div>
            <div className="xl:w-[30%]">
              {allBlogs != null?(
                <FilterCol item={allBlogs.filter(f_item => f_item.title !== name).slice(0, 5)} />
              ):(
                <h1>loading</h1>
              )}
            </div>
          </div>
        </div>
    </main>
  )
}

export default BlogDetail