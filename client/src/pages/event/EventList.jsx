import React from 'react'
import Header from '../../components/Header'
import SubTitle from '../../components/SubTitle'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import ToUp from '../../animations/ToUp'

const EventList = () => {

  const ListSection = () =>{
    
    const EventBox = () =>{
      return(
        <div className="  bg-background overflow-hidden border rounded-2xl border-paragraph/20">
                        <div className=" relative h-[300px]">
                            <img src="/dummy.jpg" className=' absolute' alt="" />
                        </div>
                        <div className="p-5 pt-1 relative">
                        <h3 className=' bg-primary rounded-xl absolute !-top-11 w-fit text-xs font-semibold tracking-wide px-4 py-3 text-white capitalize'>cultural</h3>
                            <h1 className=' font-heading text-heading capitalize text-2xl font-bold mb-4'>syed ammal nurhisng cultural</h1>
                            <p className='paragraph mb-4 line-clamp-2'>That means that you should still be following any shelter-in-place orders in your community. But when you’re venturing out to the grocery store, pharmacy or hospital, it’s wise to wear…</p>
                            <Link to={'/event/event name'} className='  capitalize  text-primary flex gap-3 items-center '>read more <FaArrowRightLong/> </Link>
                        </div>
                    </div>
      )
    }
    return(
      <section className="py-28">
        <div className="main">
          <div className="header flex justify-between items-center mb-9">
            <div className="">
              <SubTitle name={'Event'}/>
              <h1 className='heading'>list of Event</h1>
            </div>
            {/* <input type="text" className=' bg-foreground p-3' /> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({length:6}).map((_,index)=>(
              <ToUp delay={index/10} key={index}>
                <EventBox/>
              </ToUp>
            ))}
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

export default EventList