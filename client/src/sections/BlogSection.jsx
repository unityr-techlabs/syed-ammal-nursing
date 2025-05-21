import React from 'react'
import SubTitle from '../components/SubTitle'
import { CiHospital1 } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { FaArrowRightLong, FaLeftLong, FaRightLong } from 'react-icons/fa6'
import ToUp from '../animations/ToUp'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { blogSectionData } from '../../utils/staticData'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const BlogSection = () => {

  const [blog,setBlog] = useState(null)
  useEffect(()=>{
    try {
      axios.get('http://localhost:3000/api/blog').then((res)=>{
        if (res.status != 200){
          console.log('something went wrong')
          return 0
        }
        setBlog(res.data.data)
      })
    } catch (error) {
      console.log(error)
    }
  },[])

    const BlogBox = ({item}) =>{
        return(
            <div className=" border rounded-2xl border-paragraph/20 overflow-hidden">
                <div className="">
                    <img src={`http://localhost:3000/api/${item.profilePicture}`} className='h-[300px] object-cover w-full' alt="" />
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

    const InfoBox = () =>{
          return(
            <div className=" flex items-center gap-5 border w-fit p-2 border-paragraph/20">
              <span className=" bg-primary text-heading p-3 text-3xl"><CiHospital1/></span>
              <div className=" space-y-1">
                <h1 className=" text-xl text-heading font-bold capitalize font-heading">diploma</h1>
                <p className=" paragraph text-xs">Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          )
        }

  return (
    <section className="py-28 bg-foreground relative">
        <div className="main">
            <div className="flex flex-col xl:flex-row gap-10">
                <div className="xl:w-[40%] relative">
                    <ToUp>
                        <SubTitle name={blogSectionData[0].subTitle}/>
                    </ToUp>
                    <ToUp delay={.3}>
                        <h1 className="title mb-7 text-heading">{blogSectionData[0].title}</h1>
                    </ToUp>
                    <ToUp delay={.6}>
                    <p className="paragraph mb-2">{blogSectionData[0].description}</p>
                    </ToUp>
                    <ToUp delay={.6} className={'mb-10'}>
                        <Link to={'/blog'} className=' text-primary capitalize font-semibold duration-300'>view more</Link>
                    </ToUp>
                    <div className="btns flex gap-5">
                        <button className='rounded-xl hover:bg-primary duration-300 hover:text-white border p-4 text-primary'>
                            <FaLeftLong/>
                        </button>
                        <button className='rounded-xl hover:bg-primary duration-300 hover:text-white border p-4 text-primary'>
                            <FaRightLong/>
                        </button>
                    </div>
                </div>
                <div className="xl:w-[60%]">
                    <div className="">
                      {blog != null?(
                        <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                          640: {
                            slidesPerView: 1,
                          },
                          768: {
                            slidesPerView: 1,
                          },
                          1024: {
                            slidesPerView: 1,
                          },
                          //!h-[25rem] md:!h-[35rem] lg:!h-[27rem] xl:!h-full
                        }}
                        className=" !overflow-hidden"
                      >
                        {blog.map((item, index) => (
                          <SwiperSlide key={index}  className='  !overflow-hidden'>
                            <BlogBox item={item}/>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                      ):(
                        <h1>no data found</h1>
                      )}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BlogSection