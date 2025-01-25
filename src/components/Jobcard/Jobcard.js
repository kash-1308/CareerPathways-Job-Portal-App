import React from 'react'
import './jobcard.css'
import { Link } from 'react-router-dom'

const Jobcard = ({jobInfo}) => {

  const getaddDate = (date)=>{
    let adddate  = date.split("T")
    return(adddate[0])
  }

  return (
    <div className='job-card-body'>
       <div className='job-headings'>
          <span className='job-intial-logo'>{jobInfo.company.display_name[0]}</span>
          <div className='company-name'>{jobInfo.company.display_name.split("-","1")}</div>
       </div>
       <div className='info-container'>
        <span className='job-info '><i className="ri-bard-fill star"></i> ROLE : {jobInfo.title}</span>
        <span className='job-info'><i class="ri-map-pin-fill"></i> LOCATION : {jobInfo.location.area[0]}</span>
        <span className='job-info'><i class="ri-calendar-2-fill"></i> ADD ON : {getaddDate(jobInfo.created)}</span>
        <spam className="job-info"><i className="ri-arrow-right-down-line"></i> MIN-SALARAY : {jobInfo.salary_min} $</spam>
        <spam className="job-info"><i className="ri-arrow-right-up-line"></i> MAX-SALARAY : {jobInfo.salary_max} $</spam>
      <Link to={`/job/${jobInfo.id}`}><button className='job-btn'>know more</button></Link>
       </div>
    </div>
  )
}
//jobInfo.company.display_name


export default Jobcard
