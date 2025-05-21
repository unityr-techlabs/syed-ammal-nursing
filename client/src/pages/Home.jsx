import { CiHospital1 } from "react-icons/ci";
import { FaAngleRight , FaArrowRightLong, FaCheck } from "react-icons/fa6";
import {Link} from "react-router-dom"
import EventSection from "../sections/EventSection";
import SubTitle from "../components/SubTitle";
import BlogSection from "../sections/BlogSection";
import { IoMove } from "react-icons/io5";
import ToUp from "../animations/ToUp";
import ToLeft from "../animations/ToLeft";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import LeftImage from "../components/LeftImage";
import { aboutData, academicData, antiRaggingData, heroImage, whySectionData } from "../../utils/staticData";
import axios from "axios";

const Home = () => {
  const HeroSection = () =>{

    const heroRef = useRef(null)
    const heroView = useInView(heroRef,{once:false})

    const imageCol1 = [heroImage[0],heroImage[1],heroImage[2],heroImage[3],heroImage[4]]
    const imageCol2 = [heroImage[5],heroImage[6],heroImage[7],heroImage[8],heroImage[9]]
    const imageCol3 = [heroImage[8],heroImage[4],heroImage[9],heroImage[6],heroImage[4]]

    return(
      <section  className=" pt-16 pb-16 relative">
        <div className="main flex items-center">
          <div className="flex flex-col xl:flex-row gap-10">
            <motion.div 
            ref={heroRef}
            initial={{opacity:0}}
            animate={{opacity:heroView?1:0}}
            transition={{duration:.2,delay:.1}}
            className="xl:w-1/2 space-y-9">
              <h1 className=" text-center xl:text-left font-universal text-heading capitalize font-bold text-5xl xxs:text-6xl xs:text-7xl lg:text-8xl xl:text-8xl leading-[1]">healing <br /> hands <br /> <span className=" text-primary">worldwide</span> </h1>
              <p className="text-center xl:text-left paragraph">Be a part of an ecosystem that fosters exploring and shaping your future through transformative education</p>
              <div className="btns flex gap-5 justify-center xl:justify-normal">
                <Link to={'/'} className=" capitalize text-secondary flex items-center gap-2 font-semibold font-universal"> <IoMove className=" text-primary"/> campus tour <FaAngleRight className=" text-primary"/></Link>
                <Link to={'/'} className=" capitalize text-secondary flex items-center gap-2 font-semibold font-universal"> <IoMove className=" text-primary"/> admission <FaAngleRight className=" text-primary"/></Link>
              </div>
            </motion.div>
            <div className="xl:w-1/2">
              <div className="h-[450px] rounded-2xl overflow-hidden flex  gap-4">
                <div className="scroll-container">
                  <div className="scroll-content">
                    {[...Array(2)].flatMap(() =>
                      imageCol1.map((item, index) => (
                        <img key={`col1-${index}-${Math.random()}`} src={item} className="rounded-2xl w-full h-[200px] object-cover" alt="" />
                      ))
                    )}
                  </div>
                </div>
                <div className="scroll-container scroll-down">
                  <div className="scroll-content">
                    {[...Array(2)].flatMap(() =>
                      imageCol2.map((item, index) => (
                        <img key={`col2-${index}-${Math.random()}`} src={item} className="rounded-2xl w-full h-[200px] object-cover" alt="" />
                      ))
                    )}
                  </div>
                </div>
                <div className="scroll-container hidden md:block">
                  <div className="scroll-content">
                    {[...Array(2)].flatMap(() =>
                      imageCol3.map((item, index) => (
                        <img key={`col3-${index}-${Math.random()}`} src={item} className="rounded-2xl w-full h-[200px] object-cover" alt="" />
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const IntroSection = () =>{
    const IntroBox =()=>{
      return(
        <div className=" border border-paragraph/20 p-5">
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

  const AboutSection = () =>{
    return(
      <section className="py-28 ">
        <div className="main">
          <div className="flex flex-col xl:flex-row gap-16">
            <div className="xl:w-1/2">
              <LeftImage source={'/about.jpeg'}/>
            </div>
            <div className="xl:w-1/2">
              <ToUp>
                <SubTitle name={aboutData[0].aboutSection.subTitle}/>
              </ToUp>
              <ToUp delay={.3}>
                <h1 className="title mb-7">{aboutData[0].aboutSection.title}</h1>
              </ToUp>
              <ToUp delay={.5}>
                <p className="paragraph mb-9">{aboutData[0].aboutSection.description}</p>
              </ToUp>
              <Link to={'/about'} className=" rounded-2xl hover:bg-primary hover:text-white duration-300 border border-primary text-primary px-4 py-2 capitalize flex w-fit items-center gap-3">read more <FaAngleRight/>  </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const ProgramSection = () =>{

    const [department,setDepartment] = useState(null)
     useEffect(()=>{
    try {
      axios.get('http://localhost:3000/api/department').then((res)=>{
        if (res.status != 200){
          console.log('something went wrong')
          return 0
        }
        setDepartment(res.data.data)
        // console.log(res.data.data)
      })
    } catch (error) {
      console.log(error)
    }
  },[])
    const ProgramBox =({index,item}) =>{
      console.log(item)
      return(
        <ToLeft delay={index/10} className=" border rounded-2xl border-paragraph/20 p-6 bg-secondary flex justify-center items-center flex-col relative">
          <div className="">
            <span className=" bg-primary rounded-xl mb-5 p-3 flex w-fit text-white text-3xl ">
              <CiHospital1 className=" "/>
            </span>
            <h1 className=" font-heading capitalize mb-5 text-white text-2xl font-bold">{item.name}</h1>
            {/* <p className="paragraph mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati est ut corporis error in aperiam?</p> */}
            <ul className="paragraph text-sm space-y-2 text-gray-300 mb-7">
              {['smart classroom','high specified lab','realtime practice'].map((item,index)=>(
                <li key={index} className="flex items-center flex-row gap-3"> <FaCheck className=" text-primary"/> {item}</li>
              ))}
            </ul>
            <Link to={`/department/${item.name}`} className=" rounded-2xl px-4 flex gap-3 items-center w-fit py-3 border border-primary text-primary capitalize hover:bg-primary hover:text-white duration-300">read more <FaAngleRight /></Link>
          </div>
          <div className=" bg-secondary p-[2px] main absolute bottom-0 mx-auto"></div>
        </ToLeft>
      )
    }

    const CommingSoon =({index}) =>{
      return(
        <ToLeft delay={index/10} className=" border rounded-2xl border-paragraph/20 p-6 bg-secondary flex justify-center items-center flex-col relative">
         <h1 className=" text-white capitalize font-heading text-3xl font-bold">comming soon</h1>
          <div className=" bg-secondary p-[2px] main absolute bottom-0 mx-auto"></div>
        </ToLeft>
      )
    }

    const InfoBox = ({item,index}) =>{
      return(
        <ToUp delay={index/10} className=" flex items-center gap-5 border w-full p-2 rounded-2xl border-paragraph/20">
          <span className=" bg-primary text-white p-3 rounded-xl text-3xl "><item.icon/></span>
          <div className=" space-y-1">
            <h1 className=" text-xl text-white font-bold capitalize font-heading">{item.name}</h1>
            <p className=" paragraph text-xs text-gray-300">{item.para}</p>
          </div>
        </ToUp>
      )
    }


    return(
      <section className=" py-28 bg-secondary relative">
        <img src="/pattern.png" className=" absolute bottom-0 w-full h-full object-cover" alt="" />
        <div className="main">
          <div className="flex flex-col justify-between xl:flex-row gap-16">
            <div className="xl:w-[40%]">
              <ToUp>
                <SubTitle name={academicData[0].subTitle}/>
              </ToUp>
              <ToUp delay={.3}>
                <h1 className="title mb-7 text-white">{academicData[0].title}</h1>
              </ToUp>
              <ToUp delay={.6}>
                <p className="paragraph text-gray-300">{academicData[0].description}</p>
              </ToUp>
              <div className="mt-8 space-y-5">
                {academicData[0].pointBox.map((item,index)=>(
                  <InfoBox key={index} item={item} index={index}/>
                ))}
              </div>
            </div>
            <div className="xl:w-1/2 grid grid-cols-1 lg:grid-cols-2 gap-5">
              {department != null?(
              <>
              <ProgramBox item={department[0]} index={0}/>
              <CommingSoon index={3}/>
              </>                
              ):(
                <h1>no data</h1>
              )}
            </div>
          </div>
        </div>
      </section>
    )
  }


  const WhySection = () =>{

    const WhyBox =({index,item}) =>{
      return(
        <div className={`${index %2 ==0?'':''} border-b border-paragraph/20 pb-6 z-30 last:border-none last:pb-0 `}>
          <div className="flex justify-between items-center">
            <div className="">
              <h3 className=" font-heading capitalize font-semibold text-gray-300 text-sm mb-1">{item.sub}</h3>
              <h2 className=" font-heading text-2xl font-semibold capitalize text-gray-300">{item.name}</h2>
            </div>
            <span className=" bg-primary rounded-xl text-white text-3xl p-3">
            <item.icon className=" "/>
            </span>
          </div>
          <div className="mt-5">
            <h5 className=" text-5xl font-black font-heading text-white">{item.value}+</h5>
          </div>
          <div className="content hidden">
            <h4 className=" capitalize text-sm font-medium mb-5">38+ years</h4>
            <p className=" paragraph">Enriching curriculum with dedicated faculties</p>
          </div>
        </div>
      )
    }
    return(
      <section className="py-28 bg-foreground">
        <div className="main space-y-16">
          {/* <div className="header xl:w-1/2">
            <SubTitle name={'why'}/>
            <h1 className="title mb-7">program offered by us</h1>
            <p className="paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati veniam quibusdam quia, accusantium laudantium sapiente illum blanditiis ex est consectetur?</p>
          </div> */}
          <div className="flex flex-col xl:flex-row gap-16">
            <div className="xl:w-[30%]">
              <div className="flex relative bg-secondary rounded-2xl flex-col gap-6 border border-paragraph/20 p-7 h-full justify-between">
                <img src="/nue.png" className=" absolute w-full object-cover left-0 top-0 h-full" alt="" />
                {whySectionData[0].pointList.map((item,index)=>(
                  <WhyBox index={index} item={item} key={index}/>
                ))}
              </div>
            </div>
            <div className="header xl:w-[70%]">
              <ToUp>
                <SubTitle name={whySectionData[0].subTitle}/>
              </ToUp>
              <ToUp delay={.3}>
                <h1 className="title mb-7">{whySectionData[0].title}</h1>
              </ToUp>
              <ToUp delay={.6}>
                <p className="paragraph mb-6">{whySectionData[0].description}</p>
              </ToUp>
              <ToUp delay={.9}>
              <img src="/about.jpg" className=" rounded-2xl w-full object-cover h-[350px] " alt="" />
              </ToUp>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const RaggingSection = () =>{
    return(
      <section className="pt-28 pb-16 relative">
        <div className="main">
          <div className="flex flex-col xl:flex-row gap-16">
            <div className="xl:w-1/2">
            <LeftImage source={'/hero (10).jpeg'}/>
            </div>
            <div className="xl:w-1/2">
              <ToUp>
                <SubTitle name={antiRaggingData[0].subTitle}/>
              </ToUp>
              <ToUp delay={.3}>
                <h1 className="title mb-7">{antiRaggingData[0].title}</h1>
              </ToUp>
              <ToUp delay={.6}>
                <p className="paragraph mb-9">{antiRaggingData[0].description}</p>
              </ToUp>
              <Link to={'/about'} className=" hover:bg-primary hover:text-white duration-300 border border-primary text-primary px-4 py-2 capitalize flex w-fit items-center gap-3">read more <FaAngleRight/>  </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <main>
      <HeroSection/>
      <AboutSection/>
      <ProgramSection/>
      <WhySection/>
      <EventSection/>
      <BlogSection/>
      <RaggingSection/>
    </main>
  )
}

export default Home