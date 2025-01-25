import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
import './jobinfo.css'
import toast from 'react-hot-toast'

function Jobinfo() {
 

  
 const navigate = useNavigate()


 const savejob =()=>{
    try {
           let savedjobs = JSON.parse(localStorage.getItem('appliedjobs')) || []
           savedjobs.unshift(result)
           localStorage.setItem('appliedjobs',JSON.stringify(savedjobs))
           toast.success('applied successfully...')
           navigate('/search')
    } catch (error) {
       toast.error(error)
    }
 }


  // get date
  const getaddDate = (date) => {
    let adddate = date.split("T")
    return (adddate[0])
  }

  // finding job on local storaeg
  const ALL_JOBS = JSON.parse(localStorage.getItem('searchedJobs'))
  const { id } = useParams()
  let result = ALL_JOBS.filter((JOB) => { return (JOB.id === id) });
  result = result[0]
  console.log(result)


  return (<>
    <Sidebar />
    <div className='back-arrow'>
    <Link to='/search' className='link'><span className='back-btn'><i class="ri-arrow-left-line"></i></span></Link>
    </div>
    <div className='jobs-info-container'>
      <div className='job-tittle-info'>
        <h2 className='liner-text job-tittle'>{result.company.display_name}</h2><br/>
        <span>#{result.category.tag}</span>
      </div>
      <div className='job-discription-info'>
        {result.description}
      </div>
      <div className='company-info'>
        <h4 className='liner-text'>know more</h4><br/>
        <div className='job-all-info'>
          <span className='card-info'><i class="ri-map-pin-add-fill"></i> Location : {result.location.area[0]}</span><br/>
          <span className='card-info'><i class="ri-time-fill"></i> Add on : {getaddDate(result.created)}</span><br/>
          <span className="card-info"><i class="ri-currency-fill"></i> MIN-SALARAY : {result.salary_min} $</span><br/>
          <span className="card-info"><i className="ri-arrow-right-up-line"></i> MAX-SALARAY : {result.salary_max} $</span><br/>
          <span className="card-info"><i className="ri-arrow-right-up-line"></i> MAX-SALARAY : {result.salary_max} $</span><br/><br/>
          <span className='card-info'><a target='__blank' href={`${result.redirect_url}`}>check more</a></span>
        </div>
      </div>
      <div className='apply'>  
      <button className="apply-btn" onClick={()=>{savejob(result)}}>Apply Now</button><br/>
      <span className='note'><i class="ri-alarm-warning-fill"> </i> please read all information before apply.</span>
      </div>
    </div>
    <div className='Show'></div>
  </>
  )
}

export default Jobinfo 