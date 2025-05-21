import React from 'react'
import Header from '../../components/Header'
import SubTitle from '../../components/SubTitle'
import LeftImage from '../../components/LeftImage'
import ToUp from '../../animations/ToUp'
import EventSection from '../../sections/EventSection'
import { facilties, heroImage, studentActivites, studentSection } from '../../../utils/staticData'
import { GoArrowRight, GoDotFill } from 'react-icons/go'
import { Link } from 'react-router-dom'

const Student = () => {
  const DetailSection = () =>{
    return(
      <section className="py-28">
        <div className="main flex flex-col xl:flex-row gap-16 ">
        <div className="xl:w-1/2">
              <div className="relative">
                <LeftImage source={'/hero (9).jpeg'}/>
              </div>
            </div>
            <div className="xl:w-1/2">
              <ToUp>
                <SubTitle name={studentSection[0].subTitle}/>
              </ToUp>
              <ToUp delay={.3}>
                <h1 className="title mb-7">{studentSection[0].title}</h1>
              </ToUp>
              <ToUp delay={.6}>
                <p className="paragraph mb-9">{studentSection[0].description}</p>
              </ToUp>
            </div>
        </div>
      </section>
    )
  }

  const DynamicFacility = () =>{


    const ActivityBox = ({index,item}) =>{
      return(
        <ToUp  delay={index/10} className={`border overflow-hidden rounded-2xl border-paragraph/20 flex flex-col ${index%2==0?'lg:flex-row':'lg:flex-row-reverse'} justify-between`}>
          <div className="lg:w-1/2 h-[400px] xl:h-[200px]">
            <img src={item.image} className=' h-full object-cover w-full' alt="" />
          </div>
          <div className="lg:w-1/2 p-5">
            <h1 className=' font-heading text-heading text-3xl mb-3 capitalize font-bold'>{item.name}</h1>
            <p className=' paragraph text-sm mb-7'>{item.description}</p>
            <Link className=" rounded-xl px-4 flex gap-3 items-center text-sm font-semibold w-fit py-2 border border-primary text-white capitalize bg-primary duration-300" to={`/student/activity/${item.name}`}>read more <GoArrowRight/></Link>
          </div>
        </ToUp>
      )
    }
    return(
      <section className="py-28 bg-foreground">
        <div className="main mb-9 ">
            <SubTitle name={'activities'}/>
            <h1 className="title mb-7">student activities</h1>
            <div className=" space-y-3 mb-10">
              {studentActivites[0].paraList.map((para,index)=>(
                <ToUp key={index} delay={index/10}>
                  <p className="paragraph">{para}</p>
                </ToUp>
              ))}
            </div>
            <div className=" space-y-9">
                  {studentActivites[0].activityList.map((item,index)=>{
                    return(
                    <ActivityBox key={index} item={item} index={index}/>
                  )})}
            </div>
        </div>
      </section>
    )
  }  

  return (
    <main className=''>
          <Header/>
          <div className="py-10">
            <DetailSection/>
            <DynamicFacility/>
            <EventSection/>
          </div>
        </main>
  )
}

export default Student