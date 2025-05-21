import React from 'react'
import Header from '../components/Header'
import SubTitle from '../components/SubTitle'
import ToUp from '../animations/ToUp'
import LeftImage from '../components/LeftImage'
import { aboutData, facilitySection, heroImage } from '../../utils/staticData'
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa6'

const About = () => {

  const IntroSection = () =>{
    const IntroBox =({item,index})=>{
      return(
        <div className=" border rounded-2xl border-paragraph/20 p-5">
          <div className="flex gap-5 items-center mb-4">
            <span className=' bg-primary text-white p-4 rounded-2xl text-xl'><item.icon/></span>
            <h1 className=" font-heading text-heading font-bold capitalize text-2xl">{item.name}</h1>
          </div>
          <p className=" paragraph">{item.description}</p>
        </div>
      )
    }
    return(
      <section className="py-6">
        <div className="main grid grid-cols-1 xl:grid-cols-3 gap-8">
          <IntroBox item={aboutData[0].mission} index={0}/>
          <IntroBox item={aboutData[0].vision} index={0}/>
          <IntroBox item={aboutData[0].overview} index={0}/>
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
                <LeftImage source={'/hero (1).jpeg'}/>
              </div>
            </div>
            <div className="xl:w-1/2">
              <ToUp>
                <SubTitle name={aboutData[0].aboutSection.subTitle}/>
              </ToUp>
              <ToUp delay={.3}>
                <h1 className="title mb-7">{aboutData[0].aboutSection.title}</h1>
              </ToUp>
              <ToUp delay={.6}>
                <p className="paragraph mb-9">{aboutData[0].aboutSection.description}</p>
              </ToUp>
            </div>
        </div>
      </section>
    )
  }

  const AbstractSection = () =>{

    const AbstractBox = () =>{
      return(
        <div className="bg-primary p-4 w-full z-20 rounded-2xl text-white">
          <h1 className=' text-4xl font-bold mb-3'>2000</h1>
          <h2 className=' capitalize'>undergraduate and graduate students</h2>
        </div>
      )
    }
    return(
      <section className="py-28">
        <div className="main flex flex-col xl:flex-row gap-16">
        <div className="xl:w-[70%]">
              <div className="relative">
                <img src="/about.jpg" className=" object-cover z-20 w-full h-[400px] ms-auto" alt="" />
              </div>
            </div>
            <div className="xl:w-[30%] flex relative flex-col items-center justify-between">
              {Array.from({length:3}).map((_,index)=>(
                <AbstractBox key={index}/>
              ))}
              <div className=" absolute h-full  border border-dotted p-[0.5px] "></div>
            </div>
        </div>
      </section>
    )
  }

  const PricipalSection =() =>{
    return(
      <section className="py-28 bg-secondary relative">
        <img src="/pattern.png" className=" absolute bottom-0 w-full h-full object-cover" alt="" />

        <div className="main ">
          <div className="xl:w-1/2">
            <h1 className='mb-5 heading text-white'>pricipal message</h1>
            <p className=' paragraph text-gray-300 italic'>"{aboutData[0].principalSection.message}"</p>
          </div>
        </div>
      </section>
    )
  }

  const HistorySection = () =>{
    return(
      <section className="py-28">
        <div className="main flex flex-col xl:flex-row gap-16 ">
          <div className="xl:w-1/2">
              <div className="relative">
                <LeftImage source={'/class3.avif'}/>
              </div>
          </div>
          <div className="xl:w-1/2">
            <SubTitle name={facilitySection[0].subTitle}/>
            <h1 className="title mb-7">{facilitySection[0].title}</h1>
            <p className="paragraph mb-9">{facilitySection[0].description}</p>
            <Link to={'/facility'} className=" hover:bg-primary rounded-2xl hover:text-white duration-300 border border-primary text-primary px-4 py-2 capitalize flex w-fit items-center gap-3">read more <FaAngleRight/>  </Link>
          </div>
        </div>
      </section>
    )
  } 

  const GallerySection = () =>{
    return(
      <section className="py-28">
        <div className="main">
          <div className="header mb-9 flex flex-col xl:justify-center xl:items-center">
            <ToUp>
              <SubTitle name={'gallery'}/>
            </ToUp>
            <ToUp delay={.3}>
              <h1 className='heading mb-5'>our memontum</h1>
            </ToUp>
            <ToUp delay={.6} className={'xl:w-[60%] xl:mx-auto xl:text-center'}>
              <p className="paragraph  xl:text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non repudiandae provident a nesciunt excepturi vitae praesentium. Voluptatum totam corrupti nisi!</p>
            </ToUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {heroImage.map((item,index)=>(
              <ToUp delay={index/10} key={index}>
                <img src={item} key={index} className=' h-[250px] w-full object-cover rounded-2xl' alt="" />
              </ToUp>
            ))}
          </div>
        </div>
      </section>
    )
  }

  const DocumentSection = () =>{
    const DocumentBox = () =>{
      return(
        <div className=" p-5 border border-paragraph/20 rounded-2xl flex justify-between gap-8 items-center">
          <img src="/tnnc_logo.png" className='w-[15%] object-cover' alt="" />
          <div className="w-[80%]">
          <h1 className=' font-heading text-heading mb-3 text-3xl font-bold capitalize'>inc recognition</h1>
          <p className='paragraph text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      )
    }
    return(
      <section className="py-28">
        <div className="main">
          <ToUp>
                <SubTitle name={aboutData[0].documentationSection.subTitle}/>
              </ToUp>
              <ToUp delay={.3}>
                <h1 className="title mb-7">{aboutData[0].documentationSection.title}</h1>
              </ToUp>
              <div className="space-y-3 mb-9">
                {aboutData[0].documentationSection.paraList.map((para,index)=>(
                  <ToUp delay={index/10} key={index}>
                    <p className="paragraph">{para}</p>
                  </ToUp>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                {aboutData[0].documentationSection.documentList.map((item,index)=>(
                  <Link to={`/document/${item.name}`} className=' ' key={index} >
                    <div className=" h-[220px]">
                      <img src={item.image} className=' object-contain m-auto lg:m-0 h-full w-[40%] lg:w-[60%] ' alt="" />
                    </div>
                  </Link>
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
        <IntroSection/>
        <DocumentSection/>
        <PricipalSection/>
        <GallerySection/>
        <HistorySection/>
      </div>
    </main>
  )
}

export default About