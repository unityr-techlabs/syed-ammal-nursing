import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import ContactBox from '../components/ContactBox'

const DepartmentQuick = ({name,admission,curricullam}) => {
  
      const Departmentlist = [
        {
          name:'course curriculam',
          path:`/department/${name}/curriculam`
        },
        {
          name:'scholarship',
          path:`/department/${name}/scholarship`
        },
        {
          name:'admission',
          path:`/department/${name}/admission`
        },
        
      ]
      return(
        <section className=' space-y-8'>
          <div className="  shadow-minimal p-6 flex rounded-2xl justify-center items-center flex-col relative">
            <h3 className=' capitalize font-heading mb-7 rounded-2xl bg-primary w-full text-white p-2 text-center font-bold text-xl'>quick links</h3>
            <div className="  space-y-3 w-full">
              {Departmentlist.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      to={item.path}
                      state={{
                        data: [{
                          admission:admission,
                          curricullam:curricullam,
                          name:name
                        }]
                      }}
                      className=' text-paragraph w-full capitalize flex items-center justify-between'
                    >
                      {item.name} <FaArrowRightLong />
                    </Link>
                  );
                })}

            </div>
          <div className=" bg-secondary p-[2px]  main absolute bottom-0 mx-auto"></div>
          </div>
          <ContactBox/>
        </section>
      )
    }

export default DepartmentQuick