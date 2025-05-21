import React from 'react'
import Header from '../components/Header'
import LeftImage from '../components/LeftImage'
import ToUp from '../animations/ToUp'
import SubTitle from '../components/SubTitle'
import { useParams } from 'react-router-dom'
import { documentData } from '../../utils/staticData'

const DocumentDetail = () => {

   const { name } = useParams();
    const documentList = documentData[0];
    const document = Object.entries(documentList).find(([key, value]) => key === name)[1];

    const DetailSection = () =>{
        return(
            <section className='py-28'>
                <div className="main flex flex-col xl:flex-row gap-16">
                    <div className="xl:w-1/2">
                        <div className={`relative`}>
                            <div className=" bg-foreground w-[95%] min-h-[350px] flex justify-center items-center rounded-2xl ms-auto">
                                <img src={document.image} className={` rounded-2xl  object-cover z-20 w-[50%] m-auto`} alt="" />
                            </div>
                            <div className=" p-10 border-[10px] rounded-2xl absolute -bottom-6 -z-10 border-primary w-fit"></div>
                        </div>
                    </div>
                    <div className="xl:w-1/2">
                    <ToUp>
                        <SubTitle name={'about us'}/>
                    </ToUp>
                    <ToUp delay={.3}>
                        <h1 className="title mb-7">{document.name}</h1>
                    </ToUp>
                    <ToUp delay={.6}>
                        <p className="paragraph mb-9">Amrita Vishwa Vidyapeetham is a multi-disciplinary, research-intensive, private university, educating a vibrant student population of over 24,000 by 1700+ strong faculty. Accredited with the highest possible ‘A++’ grade by NAAC, Amrita offers more than 250 UG, PG, and Ph.D. programs in Engineering, Management, and Medical Sciences including Ayurveda, Life Sciences, Physical Sciences, Agriculture Sciences, Arts & Humanities, and Social & Behavioral Sciences.</p>
                    </ToUp>
                    </div>
                </div>
            </section>
        )
    }

    const PointList =()=>{
        return(
            <section className=''>
                <div className="main space-y-5">
                    {document.paraList.map((para,index)=>(
                        <p className='paragraph' key={index}>{para}</p>
                    ))}
                </div>
            </section>
        )
    }
  return (
    <main>
        <Header/>
        <div className="">
            <DetailSection/>
            <PointList/>
        </div>
    </main>
  )
}

export default DocumentDetail