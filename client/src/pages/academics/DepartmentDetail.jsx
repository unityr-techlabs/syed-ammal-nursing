import React, { useEffect, useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link, useParams } from 'react-router-dom'
import DepartmentQuick from '../../sections/DepartmentQuick'
import Header from '../../components/Header'
import ToUp from '../../animations/ToUp'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import axios from 'axios'

const DepartmentDetail = () => {
  const {name} = useParams()

    const [department,setDepartment] = useState(null)
    const [testimonial,setTestimonial] = useState(null)
    useEffect(()=>{
      try {
        axios.get(`${import.meta.env.VITE_API_URL}/department/${name}`).then((res)=>{
          setDepartment(res.data.data)
        })
        axios.get(`${import.meta.env.VITE_API_URL}/review`).then((res)=>{
          setTestimonial(res.data.data)
        })
      } catch (error) {
        console.log(error)
      }
    },[])

  const DetailCol = ({content}) =>{

    const TestimonialSection =() =>{

      const TestimonialBox = () =>{
        return(
          <div className=" shadow-minimal rounded-2xl p-8 border border-paragraph/20">
            <div className="flex gap-3 items-center mb-7">
                <img src={`${import.meta.env.VITE_API_URL}/${item.profilePicture}`} className=' rounded-full p-6 bg-paragraph' alt="" />
              <div className=" space-y-1">
                <h1 className=' font-heading capitalize text-lg font-bold text-heading'>student name</h1>
                <h4 className=' text-heading text-xs capitalize'>2021 - 2025 batch</h4>
              </div>
            </div>
            <div className="">
              <p className=' paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus qui provident quo reiciendis fugit laboriosam neque obcaecati! Et ad, nostrum velit recusandae ullam quasi dignissimos sunt fuga quisquam deserunt itaque?</p>
            </div>
          </div>
        )
      }
      return(
        <div className="">
                              <Swiper
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
              },
              //!h-[25rem] md:!h-[35rem] lg:!h-[27rem] xl:!h-full
            }}
            className=" !overflow-hidden"
          >
            {Array.from({length:8}).map((item, index) => (
              <SwiperSlide key={index} className='  !overflow-hidden'>
                <TestimonialBox />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )
    }
      return(
        <section>
          <div className="">
            <img src="/dummy.jpg" alt="" className='h-[400px] object-cover rounded-2xl w-full shadow-minimal mb-9' />
            <ToUp>
            <h1 className='heading mb-5'>Wide range of facilities and medical services</h1>
            </ToUp>
            <div className="content paragraph space-y-4 mb-7">
              {content.map((para,index)=>(
                <ToUp key={index} delay={index/10}>
                  <p key={index}>{para}</p>
                </ToUp>
              ))}
            </div>
            {testimonial&&(
              <TestimonialSection/>
            )}
          </div>
        </section>
      )
    }
  
    const FilterCol = () =>{
  
      const FilterBox = () =>{
        return(
          <div className="flex gap-4 items-center">
            <img src="/dummy.jpg" className=' w-[35%] object-cover' alt="" />
            <div className="">
              <h1 className=' line-clamp-2 font-heading text-xl font-bold capitalize'>Wide range of facilities and medical services</h1>
            </div>
          </div>
        )
      }
      return(
        <section>
          <div className="  overflow-hidden bg-foreground p-5">
            <h3 className=' capitalize font-heading mb-7 text-heading font-bold text-2xl'>quick links</h3>
            <div className="  space-y-3">
              <Link to={'/department/diploma/curriculam'} className=' capitalize text-lg flex items-center justify-between'>course currciulam <FaArrowRightLong/> </Link>
              <Link to={'/'} className=' capitalize text-lg flex items-center justify-between'>scholarship <FaArrowRightLong/> </Link>
              <Link to={'/'} className=' capitalize text-lg flex items-center justify-between'>admission <FaArrowRightLong/> </Link>
              <Link to={'/'} className=' capitalize text-lg flex items-center justify-between'>curriculam <FaArrowRightLong/> </Link>
            </div>
          </div>
        </section>
      )
    }

  return (
    <main className=' '>
      <Header/>
        <div className="main py-10">
          <div className="flex flex-col xl:flex-row gap-10">
            <div className="xl:w-[70%]">
              {department != null?(
                <DetailCol content={department.content}/>
              ):(
                <h1>loading</h1>
              )}
            </div>
            <div className="xl:w-[30%]">
              {department != null?(
                <DepartmentQuick name={department.name} admission={department.admission} curricullam={department.curricullam}/>
              ):(
                <h1>no data</h1>
              )}
            </div>
          </div>
        </div>
    </main>
  )
}

export default DepartmentDetail