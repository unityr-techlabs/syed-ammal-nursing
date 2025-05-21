import PropTypes from 'prop-types'
import React, { useRef, useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import DepartmentQuick from '../../sections/DepartmentQuick'
import ToUp from '../../animations/ToUp'
import { useLocation } from 'react-router-dom'
import Header from '../../components/Header'

const Curriculam = () => {
  const [open, setOpen] = useState(false)
  const location = useLocation();
  const { admission, curricullam, name } = location.state?.data[0] || {};

const TableSection = ({ subject }) => {
  return (
    <div className="rounded-2xl overflow-hidden border mb-5 border-primary">
      <table className="c-table w-full">
        <thead className="bg-primary text-white capitalize">
          <tr>
            <th className="w-[70%] text-left p-5 c-th">subject name</th>
            <th className="w-[30%] text-left p-5">credits</th>
          </tr>
        </thead>
        <tbody>
          {subject.name.map((name, idx) => (
            <tr key={idx}>
              <td className="p-5 c-td">{name}</td>
              <td className="p-5">{subject.credit[idx]} credits</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}


  TableSection.propTypes = {
    subject: PropTypes.shape({
      name: PropTypes.array,
      credit: PropTypes.array,
      code: PropTypes.array,
    }),
  }

  const CurriculamBox = ({ yearLabel, subject }) => {
    const [open, setOpen] = useState(false)
    const contentRef = useRef(null)

    return (
      <div className={`relative space-y-3 transition-all duration-300 `}>
        <button
          onClick={() => setOpen(!open)}
          className={`capitalize p-5 w-full flex justify-between rounded-2xl items-center ${open ? 'bg-primary text-white' : 'border border-primary'}`}
        >
          <span className="!font-heading text-xl">{yearLabel}</span>
          <BsPlus className={`text-3xl rounded-full  transition-transform ${open ? 'rotate-45' : 'rotate-0'} border`} />
        </button>
        <div
          ref={contentRef}
          style={{ maxHeight: open ? `${contentRef.current?.scrollHeight}px` : '0px' }}
          className="transition-all duration-500 overflow-hidden space-y-8"
        >
          <TableSection subject={subject} />
        </div>
      </div>
    )
  }

  CurriculamBox.propTypes = {
    yearLabel: PropTypes.string,
    subject: PropTypes.shape({
      name: PropTypes.array,
      credit: PropTypes.array,
      code: PropTypes.array,
    }),
  }

  const DetailSection = () => {
    return (
      <div className="space-y-7 mb-10">
        <img src="/dummy.jpg" className='h-[400px] rounded-2xl w-full object-cover' alt="" />
        <div>
          <ToUp>
            <h1 className='heading mb-5'>diploma in nursing and midwifery</h1>
          </ToUp>
          <div>
            {curricullam.description.map((para, index) => (
              <ToUp delay={.3} key={index}>
                <p className='paragraph'>{para}</p>
              </ToUp>
            ))}
          </div>
        </div>
        <div>
          <ToUp delay={0}>
            <h1 className='heading mb-5'>course curriculum</h1>
          </ToUp>
          <div className="space-y-3">
            {curricullam.curriculam_detail.map((para, index) => (
              <ToUp delay={.3} key={index}>
                <p className='paragraph'>{para}</p>
              </ToUp>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const CurriculamSection = () => {
    return (
      <div>
        {curricullam.year.map((item, index) => (
          <CurriculamBox
            key={item._id}
            yearLabel={item.year_label}
            subject={item.subject}
          />
        ))}
      </div>
    )
  }

  return (
    <main className=''>
      <Header/>
      <div className="main flex flex-col py-10 xl:flex-row gap-10">
        <div className="xl:w-[70%]">
          <DetailSection />
          <CurriculamSection />
        </div>
        <div className="xl:w-[30%]">
          <DepartmentQuick name={name} admission={admission} curricullam={curricullam}/>
        </div>
      </div>
    </main>
  )
}

export default Curriculam
