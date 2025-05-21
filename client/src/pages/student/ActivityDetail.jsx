import React from 'react'
import Header from '../../components/Header'
import LeftImage from '../../components/LeftImage'
import ToUp from '../../animations/ToUp'
import SubTitle from '../../components/SubTitle'
import { facilties, studentActivites } from '../../../utils/staticData'
import { GoDotFill } from 'react-icons/go'
import { useParams } from 'react-router-dom'

const ActivityDetail = () => {
  const {name} = useParams()
  const activityData = studentActivites[0].activityList.find(
    activity => activity.name.toLowerCase() === name.toLowerCase()
  )
    const DetailSection = () =>{
        return(
          <section className="py-28">
            <div className="main flex flex-col xl:flex-row gap-16 ">
            <div className="xl:w-1/2">
                  <div className="relative">
                    <LeftImage source={'/hero (1).jpeg'}/>
                  </div>
                </div>
                <div className="xl:w-1/2">
                  <ToUp>
                    <SubTitle name={'about us'}/>
                  </ToUp>
                  <ToUp delay={.3}>
                    <h1 className="title mb-7">program offered by us</h1>
                  </ToUp>
                  <ToUp delay={.6}>
                    <p className="paragraph mb-9">Amrita Vishwa Vidyapeetham is a multi-disciplinary, research-intensive, private university, educating a vibrant student population of over 24,000 by 1700+ strong faculty. Accredited with the highest possible ‘A++’ grade by NAAC, Amrita offers more than 250 UG, PG, and Ph.D. programs in Engineering, Management, and Medical Sciences including Ayurveda, Life Sciences, Physical Sciences, Agriculture Sciences, Arts & Humanities, and Social & Behavioral Sciences.</p>
                  </ToUp>
                </div>
            </div>
          </section>
        )
      }

      const ActivityDetailSection = () =>{
        return(
          <section className="pt-10">
            <div className="main mb-9 ">
                <SubTitle name={'student activity'}/>
                <h1 className="title mb-7">{activityData.name}</h1>
                <div className=" space-y-3 mb-10">
                  {activityData.paraList.map((para,index)=>(
                    <ToUp key={index} delay={index/10}>
                      <p className="paragraph">{para}</p>
                    </ToUp>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {activityData.images.map((item,index)=>(
                    <ToUp delay={index/10} key={index}>
                      <img src={item} key={index} className=' h-[250px] w-full object-cover rounded-2xl' alt="" />
                    </ToUp>
                  ))}
                </div>
            </div>
          </section>
        )
      }

  return (
    <main className=''>
          <Header name={name}/>
          <div className="">
            <ActivityDetailSection/>
          </div>
        </main>
  )
}

export default ActivityDetail