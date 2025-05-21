import React from 'react'
import Header from '../../components/Header'
import SubTitle from '../../components/SubTitle'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { GoSearch } from 'react-icons/go'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const FacultyList = () => {

   const [faculty,setFaculty] = useState(null)
    useEffect(()=>{
      try {
        axios.get(`${import.meta.env.VITE_API_URL}/faculty`).then((res)=>{
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

  const ListSection = () =>{
    
    const FacultyBox = ({item}) =>{
      return(
        <div className="  bg-background relative flex flex-col items-center overflow-hidden border rounded-2xl border-paragraph/20">
            <div className=" relative h-[250px] w-full">
                <img src={`${import.meta.env.VITE_API_URL}/${item.profilePicture}`}className=' h-full w-full object-cover absolute' alt="" />
            </div>
            <div className="p-5 pt-6 relative w-full">
               <h3 className=' bg-primary rounded-xl absolute !-top-6 w-fit text-xs font-semibold tracking-wide px-4 py-3 text-white capitalize'>{item.disignation}</h3>
                <h1 className=' font-heading text-heading capitalize text-xl font-bold mb-4'>{item.name}</h1>
                <Link to={`/faculty/${item.name}`} className='  capitalize text-sm text-primary flex gap-3 items-center '>read more <FaArrowRightLong/> </Link>
            </div>
          {/* <div className=" bg-secondary/50 p-[2px]  main absolute bottom-0 mx-auto rounded-full"></div> */}
        </div>
      )
    }
    return(
      <section className="py-28">
        <div className="main">
          <div className="header flex justify-between items-center mb-9">
            <div className="">
              <SubTitle name={'faculty'}/>
              <h1 className='heading'>list of faculty</h1>
            </div>
            {/* <div className="flex gap-3">
              <input type="text" className=' bg-foreground p-3 rounded-2xl placeholder:font-semibold' placeholder='Search Faculty Here...' />
              <button className=' bg-primary text-white p-4 rounded-2xl'><GoSearch/></button>
            </div> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {faculty !=null ?(
              faculty.map((item,index)=>(
                <FacultyBox item={item} key={index}/>
              ))
            ):(
              <h1>loading</h1>
            )}
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

export default FacultyList