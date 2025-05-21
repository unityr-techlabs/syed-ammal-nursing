import React from 'react'
import Header from '../../components/Header'
import { GoDotFill } from 'react-icons/go'
import { FaCheck, FaMailchimp } from 'react-icons/fa6'
import ContactBox from '../../components/ContactBox'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const FacultyDetail = () => {
  const{name}=useParams()
  const [faculty,setFaculty] = useState(null)
      useEffect(()=>{
        try {
          axios.get(`http://localhost:3000/api/faculty/${name}`).then((res)=>{
            if (res.status != 200){
              console.log('something went wrong')
              return 0
            }
            setFaculty(res.data.data)
          })
        } catch (error) {
          console.log(error)
        }
      },[])

  const DetailSection = () =>{
    return(
      <div className="mb-8">
          <h3 className='text-white capitalize mb-5 bg-primary px-4 py-1 rounded-lg font-semibold text-sm w-fit'>professor</h3>
          <h1 className='title mb-5'>{faculty.name}</h1>
          <div className="space-y-3">
            {/* {faculty.bio.map((para,index)=>( */}
              <p className='paragraph'>{faculty.bio}</p>
            {/* ))}           */}
          </div>
      </div>
    )
  }

  const Area = () =>{
    return(
      <div className="">
        <h1 className=' heading mb-5'>area of expertise</h1>
        <ul className=' paragraph space-y-2'>
          {faculty.area.map((point,index)=>(
            <li key={index} className=' flex gap-3 items-center'><FaCheck className=' text-primary'/> {point}</li>
          ))}
        </ul>
      </div>
    )
  }

  const ContactSection = () =>{
    const ContactBox = () =>{
      return(
        <div className="flex gap-3">
          <span className=' border border-primary p-3 rounded-xl text-primary text-xl flex justify-center items-center'><FaMailchimp/></span>
          <div className="">
            <h4 className=' paragraph text-sm font-heading font-semibold'>mail</h4>
            <h2 className=' text-paragraph text-sm'>ssnowfalkdnk@gmail.com</h2>
          </div>
        </div>
      )
    }
    return(
      <section className='my-8'>
        <div className="flex flex-col lg:flex-row items-center gap-5">
          <ContactBox/>
          <ContactBox/>
          <ContactBox/>
        </div>
      </section>
    )
  }
  return (
    <main>
        {faculty != null?(
          <>
          <Header/>
          <div className="py-10 main flex flex-col xl:flex-row gap-10">
            <div className="xl:w-[30%] space-y-9">
              <img src={`http://localhost:3000/api/${faculty.profilePicture}`} className=' object-cover rounded-2xl w-full h-[400px]' alt="" />
              <ContactBox/>
            </div>
            <div className="xl:w-[70%]">
              <DetailSection/>
              {/* <ContactSection/> */}
              <Area/>
            </div>
          </div>
        </>
        ):(
          <h1>loading</h1>
        )}
    </main>
  )
}

export default FacultyDetail