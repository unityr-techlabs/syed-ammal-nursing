import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import SubTitle from '../../components/SubTitle'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import ToUp from '../../animations/ToUp'
import axios from 'axios'

const BlogList = () => {

  const [allBlogs,setAllBlogs] = useState(null)
  useEffect(()=>{
    try {
      axios.get(`${import.meta.env.VITE_API_URL}/blog`).then((res)=>{
        setAllBlogs(res.data.data)
      })
    } catch (error) {
      console.log(error)
    }
  },[])

  const ListSection = () =>{
    
    const BlogBox = ({item}) =>{
      return(
        <div className=" border rounded-2xl border-paragraph/20 overflow-hidden">
                        <div className="">
                            <img src={`${import.meta.env.VITE_API_URL}/${item.profilePicture}`} className='h-[300px] object-cover w-full' alt="" />
                        </div>
                        <div className="content relative p-5 pt-10">
                            <div className=" bg-primary rounded-xl text-white flex flex-col w-20 h-20 absolute justify-center items-center font-semibold  -top-14">
                                <h3 className=' text-2xl'>11</h3>
                                <h5 className=' text-xs'>APR</h5>
                            </div>
                            <h1 className=' font-heading text-heading capitalize text-2xl font-bold mb-4'>{item.title}</h1>
                            <p className='paragraph mb-4 line-clamp-2'>{item.description}</p>
                            <Link to={`/blog/${item.title}`} className='  capitalize text-primary flex gap-3 items-center '>read more <FaArrowRightLong/> </Link>
                        </div>
                    </div>
      )
    }
    return(
      <section className="py-28">
        <div className="main">
          <div className="header flex justify-between items-center mb-9">
            <div className="">
              <SubTitle name={'Blog'}/>
              <h1 className='heading'>list of Blog</h1>
            </div>
            {/* <input type="text" className=' bg-foreground p-3' /> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allBlogs != null?(
              allBlogs.map((item,index)=>(
              <ToUp delay={index/10} key={index}>
                <BlogBox item={item}/>
              </ToUp>
            ))
            ):(
              <h1>loading</h1>
            )}
          </div>
        </div>
      </section>
    )
  }
  return (
    <main>
        <Header/>
        <ListSection/>
    </main>
  )
}

export default BlogList