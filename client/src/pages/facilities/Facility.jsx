import React from 'react'
import Header from '../../components/Header'
import SubTitle from '../../components/SubTitle'
import { facilitySection, facilties, heroImage } from '../../../utils/staticData'
import ToUp from '../../animations/ToUp'
import LeftImage from '../../components/LeftImage'
import RightImage from '../../components/RightImage'
import { FaCheck } from 'react-icons/fa6'

const Facilty = () => {

  const IntroSection = () =>{
    const IntroBox =()=>{
      return(
        <div className=" border rounded-2xl border-paragraph/20 p-5">
          <h1 className=" font-heading text-heading font-bold capitalize text-2xl mb-4">mission</h1>
          <p className=" paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet repudiandae in, magni quo incidunt voluptatibus nihil velit libero molestias. Modi.</p>
        </div>
      )
    }
    return(
      <section className="py-6">
        <div className="main grid grid-cols-1 xl:grid-cols-3 gap-8">
          {Array.from({length:3}).map((_,index)=>(
            <IntroBox key={index}/>
          ))}
        </div>
      </section>
    )
  }


  const DetailSection = () =>{
    return(
      <section className="py-28">
        <div className="main flex flex-col xl:flex-row gap-16 ">
        <div className="xl:w-1/2">
              <div className="relative">
                <LeftImage source={'/hero (4).jpeg'}/>
              </div>
            </div>
            <div className="xl:w-1/2">
              <ToUp>
                <SubTitle name={facilitySection[0].subTitle}/>
              </ToUp>
              <ToUp delay={.3}>
                <h1 className="title mb-7">{facilitySection[0].title}</h1>
              </ToUp>
              <ToUp delay={.6}>
                <p className="paragraph mb-9">{facilitySection[0].description}</p>
              </ToUp>
            </div>
        </div>
      </section>
    )
  }



    const transportData = facilties[2]
    const TransportSection = ({item}) =>{
    return(
      <section className="pt-28">
        <div className="main mb-9 ">
            <SubTitle name={item.subTitle}/>
            <h1 className="title mb-7">{item.title}</h1>
            <div className=" space-y-3 mb-10">
              {item.paraList.map((para,index)=>(
                <ToUp key={index} delay={index/10}>
                  <p className="paragraph">{para}</p>
                </ToUp>
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 mb-10">
                <ul className=' paragraph space-y-2'>
                  {item.points[0].col1.map((point,index)=>{
                    return(
                    <ToUp key={index} delay={index/10}>
                      <li key={index} className=' flex gap-3 items-center'><FaCheck className=' text-primary'/>{point}</li>
                    </ToUp>
                  )})}
                </ul>
                <ul className=' paragraph space-y-2'>
                  {item.points[1].col2.map((point,index)=>{
                    return(
                    <ToUp key={index} delay={index/10}>
                      <li key={index} className=' flex gap-3 items-center'><FaCheck className=' text-primary'/>{point}</li>
                    </ToUp>
                  )})}
                </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {item.images.map((item,index)=>(
                <ToUp delay={index/10} key={index}>
                  <img src={item} key={index} className=' h-[250px] w-full object-cover rounded-2xl' alt="" />
                </ToUp>
              ))}
            </div>
        </div>
      </section>
    )
  } 

  const classRoomData = facilties[0]
  const ClassroomSection = ({item}) =>{
    return(
      <section className="py-28 bg-foreground">
        <div className="main mb-9 ">
            <SubTitle name={item.subTitle}/>
            <h1 className="title mb-7">{item.title}</h1>
            <div className=" space-y-3 mb-10">
              {item.paraList.map((para,index)=>(
                <ToUp key={index} delay={index/10}>
                  <p className="paragraph">{para}</p>
                </ToUp>
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 mb-10">
                <ul className=' paragraph space-y-2'>
                  {item.points[0].col1.map((point,index)=>{
                    return(
                    <ToUp key={index} delay={index/10}>
                      <li key={index} className=' flex gap-3 items-center'><FaCheck className=' text-primary'/>{point}</li>
                    </ToUp>
                  )})}
                </ul>
                <ul className=' paragraph space-y-2'>
                  {item.points[1].col2.map((point,index)=>{
                    return(
                    <ToUp key={index} delay={index/10}>
                      <li key={index} className=' flex gap-3 items-center'><FaCheck className=' text-primary'/>{point}</li>
                    </ToUp>
                  )})}
                </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {item.images.map((item,index)=>(
                <ToUp delay={index/10} key={index}>
                  <img src={item} key={index} className=' h-[250px] w-full object-cover rounded-2xl' alt="" />
                </ToUp>
              ))}
            </div>
        </div>
      </section>
    )
  } 


  const libraryData = facilties[1]

  const LibrarySection = ({item}) =>{
    return(
      <section className="py-28 bg-foreground">
        <div className="main mb-9 ">
            <SubTitle name={item.subTitle}/>
            <h1 className="title mb-7">{item.title}</h1>
            <div className=" space-y-3 mb-10">
              {item.paraList.map((para,index)=>(
                <ToUp key={index} delay={index/10}>
                  <p className="paragraph">{para}</p>
                </ToUp>
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 mb-10">
                <ul className=' paragraph space-y-2'>
                  {item.points[0].col1.map((point,index)=>{
                    return(
                    <ToUp key={index} delay={index/10}>
                      <li key={index} className=' flex gap-3 items-center'><FaCheck className=' text-primary'/>{point}</li>
                    </ToUp>
                  )})}
                </ul>
                <ul className=' paragraph space-y-2'>
                  {item.points[1].col2.map((point,index)=>{
                    return(
                    <ToUp key={index} delay={index/10}>
                      <li key={index} className=' flex gap-3 items-center'><FaCheck className=' text-primary'/>{point}</li>
                    </ToUp>
                  )})}
                </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {item.images.map((item,index)=>(
                <ToUp delay={index/10} key={index}>
                  <img src={item} key={index} className=' h-[250px] w-full object-cover rounded-2xl' alt="" />
                </ToUp>
              ))}
            </div>
        </div>
      </section>
    )
  } 

  const labData = facilties[5]
  const LabSection = ({item}) =>{
    const LabBox = ({labItem}) =>{
      return(
        <div className=" rounded-2xl relative flex flex-col items-center overflow-hidden border border-paragraph/20">
          <div className="image">
            <img src={labItem.image} className=' h-[300px] w-full object-cover' alt="" />
          </div>
          <div className="p-5">
            <h1 className=' font-heading text-heading capitalize font-bold text-2xl mb-2'>{labItem.name}</h1>
            <p className=' paragraph'>
            {labItem.description}
            </p>
          </div>
          <div className=" bg-primary p-[2px]  main absolute bottom-0 mx-auto"></div>

        </div>
      )
    }
    return(
      <section className="py-28">
        <div className="main">
        <SubTitle name={item.subTitle}/>
            <h1 className="title mb-7">{item.title}</h1>
            <div className=" space-y-3 mb-10">
              {item.paraList.map((para,index)=>(
                <ToUp key={index} delay={index/10}>
                  <p className="paragraph">{para}</p>
                </ToUp>
              ))}
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              {item.labs.map((labItem,index)=>(
                <LabBox labItem={labItem} key={index}/>
              ))}
            </div>
        </div>
      </section>
    )
  }

  const auditoriumData = facilties[3]
  const AuditoriumSection = ({item}) =>{
    return(
      <section className="py-28">
        <div className="main">
        <SubTitle name={item.subTitle}/>
            <h1 className="title mb-7">{item.title}</h1>
            <div className=" space-y-3 mb-10">
              {item.paraList.map((para,index)=>(
                <ToUp key={index} delay={index/10}>
                  <p className="paragraph">{para}</p>
                </ToUp>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {item.images.map((item,index)=>(
                <ToUp delay={index/10} key={index}>
                  <img src={item} key={index} className=' h-[250px] w-full object-cover rounded-2xl' alt="" />
                </ToUp>
              ))}
            </div>
        </div>
      </section>
    )
  }

  const playgroundData = facilties[4]
  const PlaygroundSection = ({item}) =>{
    return(
      <section className="py-28 bg-foreground">
        <div className="main">
        <SubTitle name={item.subTitle}/>
            <h1 className="title mb-7">{item.title}</h1>
            <div className=" space-y-3 mb-10">
              {item.paraList.map((para,index)=>(
                <ToUp key={index} delay={index/10}>
                  <p className="paragraph">{para}</p>
                </ToUp>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {item.images.map((item,index)=>(
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
      <Header/>
      <div className="pt-10">
        <DetailSection/>
        {/* {facilties.map((item,index)=>(
          <DynamicFacility item={item} key={index}/>
        ))} */}
        <ClassroomSection item={classRoomData}/>
        <LabSection item={labData}/>
        <LibrarySection item={libraryData}/>
        <AuditoriumSection item={auditoriumData}/>
        <PlaygroundSection item={playgroundData}/>
        <TransportSection item={transportData}/>
      </div>
    </main>
  )
}

export default Facilty