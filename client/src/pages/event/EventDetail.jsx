import React from 'react'
import { MdOutlineDateRange } from "react-icons/md";
import ToUp from '../../animations/ToUp';
import Header from '../../components/Header';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import ContactBox from '../../components/ContactBox';

const EventDetail = () => {

  const {name} = useParams()
  const [event,setEvent] = useState(null)
    const [allEvents,setAllEvents] = useState(null)
    useEffect(()=>{
      try {
        axios.get(`${import.meta.env.VITE_API_URL}/event/${name}`).then((res)=>{
          setEvent(res.data.data)
          console.log(res.data.data)
        })
        axios.get(`${import.meta.env.VITE_API_URL}/event`).then((res)=>{
          setAllEvents(res.data.data)
        })
      } catch (error) {
        console.log(error)
      }
    },[])
  const DetailCol = ({item}) =>{
    return(
      <section>
        <div className="">
          <img src={`${import.meta.env.VITE_API_URL}/${item.profilePicture}`} alt="" className='h-[400px] rounded-2xl object-cover w-full mb-5 ' />
          <div className="flex mb-5 gap-6 capitalize">
              <h3 className='flex items-center gap-3 font-heading font-bold'><MdOutlineDateRange className=' text-primary'/>  11 may 2025</h3>
              <h3 className='flex items-center gap-3 font-heading font-bold'><MdOutlineDateRange className=' text-primary'/>  admin</h3>
          </div>
          <ToUp>
            <h1 className='heading mb-5'>{item.title}</h1>
          </ToUp>
          <div className="content paragraph space-y-4">
            {event[0].content.map((para, index) => {
              const isBeforeLast = index === event[0].content.length - 1;
              return (
                <React.Fragment key={index}>
                  {isBeforeLast && (
                    <div className="flex flex-col lg:flex-row gap-6 my-7">
                      <img src={`http://localhost:3000/api/${item.images[0]}`} className='lg:w-1/2 rounded-2xl' alt="" />
                      <img src={`http://localhost:3000/api/${item.images[1]}`} className='lg:w-1/2 rounded-2xl' alt="" />
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

    const FilterBox = ({eventItem}) =>{
      return(
        <div className="flex gap-4 border-b pb-3 border-paragraph/20 last:border-none last:pb-0">
          <img src="/dummy.jpg" className='  w-[35%] rounded-xl object-cover' alt="" />
          <div className=" flex flex-col justify-between">
            <h1 className=' line-clamp-2 font-heading text-base leading-relaxed font-bold text-paragraph capitalize'>{eventItem.title}</h1>
            <Link to={`/event/${eventItem.title}`} className=' text-primary capitalize  text-xs flex items-center gap-3'>read more  <FaArrowRightLong/> </Link>
          </div>
        </div>
      )
    }
    
    return(
      <section className=' space-y-8'>
          <div className="  shadow-minimal p-6 flex rounded-2xl justify-center items-center flex-col relative">
            <h3 className=' capitalize font-heading mb-7 rounded-2xl bg-primary w-full text-white p-2 text-center font-bold text-xl'>upcomming events</h3>
            <div className="  space-y-3 w-full">
              {item.map((item,index)=>(
                <FilterBox key={index} eventItem={item}/>
              ))}
            </div>
            <div className=" bg-secondary p-[2px]  main absolute bottom-0 mx-auto"></div>
          </div>
          {/* <ContactBox/> */}
        </section>
    )
  }
  
  return (
    <main className=''>
      <Header/>
        <div className="main py-10">
          <div className="flex flex-col xl:flex-row gap-10">
            <div className="xl:w-[70%]">
              {event != null?(
                <DetailCol item={event[0]}/>
              ):(
                <h1>loading</h1>
              )}
            </div>
            <div className="xl:w-[30%]">
              {allEvents != null?(
                <div className=" space-y-5">
                  <FilterCol item={allEvents.filter(f_item => f_item.title !== name).slice(0, 5)} />
                  <ContactBox/>
                </div>
              ):(
                <h1>loading</h1>
              )}
            </div>
          </div>
        </div>
    </main>
  )
}

export default EventDetail