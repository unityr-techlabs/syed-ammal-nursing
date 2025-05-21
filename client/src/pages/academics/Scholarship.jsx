import React, { useState, useEffect } from 'react'
import DepartmentQuick from '../../sections/DepartmentQuick'
import { FaGoogleScholar } from 'react-icons/fa6'
import { GoDotFill } from "react-icons/go";
import ToUp from '../../animations/ToUp';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header';

const Scholarship = () => {
  const location = useLocation();

  const { admission, curricullam, name } = location.state?.data[0] || {};

  const [scholarships, setScholarships] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/api/scholarship')
      .then((res) => {
        if (res.status === 200) {
          setScholarships(res.data.data)
        } else {
          console.log('Something went wrong');
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  const ScholarshipSection = ({ scholarship }) => {
    return (
      <div className="space-y-5">
        <h1 className='heading mb-5'>{scholarship.name}</h1>
        <p className='paragraph mb-7'>{scholarship.description}</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {scholarship.variety.map((item, index) => (
            <div key={item._id} className={`shadow-minimal rounded-2xl p-8 ${index % 2 === 0 ? 'bg-primary' : ''}`}>
              <h2 className={`font-heading capitalize font-bold text-2xl mb-5 flex gap-4 ${index % 2 === 0 ? 'text-white' : 'text-heading'}`}>
                <FaGoogleScholar className=' mt-1' /> {item.name} Scholarship
              </h2>
              <ul className={`capitalize paragraph space-y-3 ${index % 2 === 0 ? 'text-white' : ''}`}>
                <li><strong className='mr-5'>Amount:</strong> ${item.amount} per academic year</li>
                <li><strong className='mr-5'>Eligibility:</strong> {item.eligibility}</li>
                <li><strong className='mr-5'>Application Process:</strong> {item.process}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const RequirmentSection = () => {
    return (
      <section>
        <div className="">
          <h1 className='heading mb-5'>Scholarship Requirements at Syed Ammal</h1>
          <p className='paragraph mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci id eveniet eum expedita asperiores soluta sequi recusandae similique aliquid minus.</p>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <ul className='paragraph space-y-2'>
              {Array.from({ length: 5 }).map((_, index) => (
                <li key={index} className='flex gap-3 items-center'>
                  <GoDotFill className='text-primary' /> Outstanding academic achievements.
                </li>
              ))}
            </ul>
            <ul className='paragraph space-y-2'>
              {Array.from({ length: 5 }).map((_, index) => (
                <li key={index} className='flex gap-3 items-center'>
                  <GoDotFill className='text-primary' /> Outstanding academic achievements.
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    )
  }

  return (
    <main className=''>
      <Header/>
      <div className="main py-10 flex flex-col xl:flex-row gap-10">
        <div className="xl:w-[70%]">
          <div className="space-y-7 mb-10">
            <img src="/dummy.jpg" className='h-[400px] rounded-2xl w-full object-cover' alt="Scholarships" />
            <div className="">
              <ToUp>
                <h1 className='heading mb-5'>Scholarship Opportunities at Syed Ammal</h1>
              </ToUp>
              <ToUp delay={.3}>
                <p className='paragraph'>Tuition rates for the Fall and Spring semesters are approved at the Board of Trustees meeting in July prior to the beginning of the academic year. Summer tuition rates are approved at the Board of Trustees meeting in February before the term begins. Course registration dates can be found on the. See Important Dates for payment due dates and other deadlines.</p>
              </ToUp>
            </div>

            <div className="space-y-10">
              {scholarships.length > 0 ? scholarships.map((scholarship) => (
                <ScholarshipSection key={scholarship._id} scholarship={scholarship} />
              )) : <p>Loading Scholarships...</p>}
            </div>
          </div>
        </div>
        <div className="xl:w-[30%]">
          <DepartmentQuick name={name} admission={admission} curricullam={curricullam}/>
        </div>
      </div>
    </main>
  )
}

export default Scholarship
