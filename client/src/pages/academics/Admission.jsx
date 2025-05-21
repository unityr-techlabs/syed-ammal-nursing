import React from 'react'
import DepartmentQuick from '../../sections/DepartmentQuick'
import { GoDotFill } from 'react-icons/go'
import ToUp from '../../animations/ToUp'
import { useLocation } from 'react-router-dom'
import Header from '../../components/Header'

const Admission = () => {
const location = useLocation();
  const { admission, curricullam, name } = location.state?.data[0] || {};
  console.log(admission)
  const DetailCol = () =>{

const RequirmentSection = () => {
  const points = admission.requirements.points;
  const firstCol = points.slice(0, Math.ceil(points.length / 2));
  const secondCol = points.slice(Math.ceil(points.length / 2));

  return (
    <section>
      <div>
        <ToUp>
          <h1 className='heading mb-5'>Requirements and Deadlines</h1>
        </ToUp>
        <ToUp delay={0.3}>
          <p className='paragraph mb-7'>{admission.requirements.description}</p>
        </ToUp>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ul className='paragraph space-y-2'>
            {firstCol.map((point, index) => (
              <ToUp key={index} delay={index / 10}>
                <li className='flex gap-3'>
                  <GoDotFill className='text-primary mt-1' />
                  {point}
                </li>
              </ToUp>
            ))}
          </ul>
          <ul className='paragraph space-y-2'>
            {secondCol.map((point, index) => (
              <ToUp key={index} delay={(index + firstCol.length) / 10}>
                <li className='flex gap-3'>
                  <GoDotFill className='text-primary mt-1' />
                  {point}
                </li>
              </ToUp>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};



        const FeeSection = () =>{
          const TableSection = () =>{
            return(
              <table className=" w-full text-left">
                <thead>
                  <tr className=" bg-primary text-white capitalize">
                    <th className=" p-4">admission</th>
                    <th className=" p-4">tution fee</th>
                    <th className=" p-4">bus fee</th>
                    <th className=" p-4">hostel fee</th>
                  </tr>
                </thead>
                <tbody className=" capitalize border  paragraph">
                  <tr className=" border-gray-200 border">
                    <td className=" p-4 text-heading font-medium">
                      management
                    </td>
                    <td className=" p-4">
                      20000
                    </td>
                    <td className=" p-4">
                      20000
                    </td>
                    <td className=" p-4">
                      20000
                    </td>
                  </tr>
                  <tr className=" border-gray-200 border">
                    <td className=" p-4  text-heading font-medium">
                      counseling
                    </td>
                    <td className=" p-4">
                      20000
                    </td>
                    <td className=" p-4">
                      20000
                    </td>
                    <td className=" p-4">
                      20000
                    </td>
                  </tr>
                </tbody>
              </table>
            )
          }
          return(
            <section className="py-12">
              <div className="">
                <ToUp>
                  <h1 className='heading mb-7'>First-Year Applicants</h1>
                </ToUp>
                  <TableSection/>
                  <ToUp delay={.3}>
                  <p className=" mt-6 paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi repellendus pariatur dolores consequuntur debitis molestiae a nulla recusandae aperiam dolorum assumenda alias harum tempora repudiandae, rem dignissimos maiores enim reprehenderit nisi maxime magnam vero. Maxime eaque illum repellat et?</p>
                  </ToUp>
              </div>
            </section>
          )
        }


      return(
        <section>
          <div className="">
            <img src="/dummy.jpg" alt="" className='h-[400px] rounded-2xl object-cover w-full shadow-minimal mb-9' />
            <ToUp>
              <h1 className='heading mb-5'>First-Year Applicants</h1>
            </ToUp>
            <div className="content paragraph space-y-4 mb-7">
              {admission.description.map((para,index)=>(
                <ToUp key={index} delay={index/10}>
                  <p key={index}>{para}</p>
                </ToUp>
              ))}
            </div>

            <RequirmentSection/>
            <FeeSection/>
          </div>
        </section>
      )
    }

  return (
    <main className=' '>
      <Header/>
        <div className="main py-10">
          <div className="flex flex-col xl:flex-row gap-10">
            <div className="xl:w-[70%]">
              {admission != null?(
                <DetailCol />
              ):(
                <h1>no data</h1>
              )}
            </div>
            <div className="xl:w-[30%]">
              <DepartmentQuick name={name} admission={admission} curricullam={curricullam}/>
            </div>
          </div>
        </div>
    </main>
  )
}

export default Admission