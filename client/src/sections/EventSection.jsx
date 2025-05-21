import React from 'react'
import { Link } from 'react-router-dom'
import SubTitle from '../components/SubTitle'
import { FaAngleRight, FaArrowRightLong } from 'react-icons/fa6'
import ToUp from '../animations/ToUp'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { eventSectionData } from '../../utils/staticData'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const EventSection = () => {

    const [event,setEvent] = useState(null)
    useEffect(()=>{
      try {
        axios.get(`${import.meta.env.VITE_API_URL}/event`).then((res)=>{
          if (res.status != 200){
            console.log('something went wrong')
            return 0
          }
          setEvent(res.data.data)
        })
      } catch (error) {
        console.log(error)
      }
    },[])

    const EventBox =({item})=>{
        return(
            <div className=" bg-background overflow-hidden border rounded-2xl border-paragraph/20">
                <div className=" relative h-[300px]">
                    <img src={`http://localhost:3000/api/${item.profilePicture}`} className=' h-full w-full object-cover absolute' alt="" />
                </div>
                <div className="p-5 pt-5 relative">
                    <h3 className=' bg-primary rounded-xl absolute !-top-6 w-fit text-xs font-semibold tracking-wide px-4 py-3 text-white capitalize'>cultural</h3>
                    <h1 className=' font-heading text-heading capitalize text-2xl font-bold mb-4'>{item.title}</h1>
                    <p className='paragraph mb-4 line-clamp-2'>{item.description}</p>
                    <Link to={`/event/${item.title}`} className='  capitalize  text-primary flex gap-3 items-center '>read more <FaArrowRightLong/> </Link>
                </div>
            </div>
        )
    }

  return (
    <section className="py-28">
        <div className="main">
            <div className="header mb-10 flex flex-col lg:flex-row justify-between gap-9 lg:items-end">
                <div className="xl:w-1/2">
                    <ToUp>
                        <SubTitle name={eventSectionData[0].subTitle}/>
                    </ToUp>
                    <ToUp delay={.3}>
                        <h1 className='title mb-4'>{eventSectionData[0].title}</h1>
                    </ToUp>
                    <ToUp delay={.6}>
                        <p className='paragraph'>{eventSectionData[0].description}</p>
                    </ToUp>
                </div>
                <ToUp delay={.6}>
                    <Link to={'/event'} className='border rounded-2xl border-primary text-primary px-4 py-3 hover:bg-primary hover:text-white duration-300'>view more</Link>
                </ToUp>
            </div>
            <div className="">
            {event != null?(
              <Swiper
                  spaceBetween={30}
                  slidesPerView={1}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 3,
                    },
                    //!h-[25rem] md:!h-[35rem] lg:!h-[27rem] xl:!h-full
                  }}
                  className=" !overflow-hidden"
                >
                  {event.map((item, index) => (
                    <SwiperSlide key={index} className='  !overflow-hidden'>
                      <EventBox item={item} />
                    </SwiperSlide>
                  ))}
                </Swiper>
            ):(
              <h1>no data </h1>
            )}
            </div>
        </div>
    </section>
  )
}

export default EventSection