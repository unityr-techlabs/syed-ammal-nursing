import React from 'react'
import PropTypes from 'prop-types'
const SubTitle = ({name}) => {
  return (
    <div className="flex items-center gap-3">
        <h3 className="sub-title mb-2">{name}</h3>
        <div className=" px-5 h-[3px] bottom-1 relative bg-secondary"/>
    </div>
  )
}

SubTitle.propType = {
    name:PropTypes.string
}

export default SubTitle