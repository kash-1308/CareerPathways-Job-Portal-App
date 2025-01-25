import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import './search.css'
import { jobNames } from '../../config/searchData'
import axios from 'axios'
import toast from 'react-hot-toast'
import serchimg from './searchImg.png'
import Jobcard from '../../components/Jobcard/Jobcard'

const Search = () => {

  useEffect(()=>{
    if(! JSON.parse(localStorage.getItem('LOGINUSER'))){
      window.location.href="/"
      toast.error("login is required...",{duration: 7000})
    }
 },[])
  
  const [jobTittle, setjobTittle] = useState('')
  const [jobs, setjobs] = useState([])

  const serchNum = localStorage.getItem("RESULTNUMBER") || 18

  const searchJob = async (jobname) => {
    if(!jobname)return(toast.error('please enter job tittle..'))
      
    jobname = jobname.replace(" ", "%20")
    const URL = `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=02117e2a&app_key=b73e530e58b3da362a5bfe0f0ce5f79e&results_per_page=${serchNum}&what=${jobname}&where=london&content-type=application/json`

    let tid = toast.loading('loading.....')

    try {
      let responce = await axios.request(URL)
      setjobs(responce.data.results)
      localStorage.setItem("searchedJobs",JSON.stringify(responce.data.results))
     // console.log(responce.data.results)
      toast.dismiss(tid)
      toast.success('jobs load sucessfully')
      setjobTittle('')
    } catch (error) {
     // console.log(error)
      toast.dismiss(tid)
      toast.error(error.message)
    }
  }

  //set jobs in local storage after load the jobs....
    
  useEffect(()=>{
     let localSToragesaveJobs= JSON.parse(localStorage.getItem("searchedJobs"))
      if(!localSToragesaveJobs){
        return
      }else{
        setjobs(localSToragesaveJobs)
      }
  },[])
  

  // return the component....

  return (
    <div>
      <Sidebar />
      <div className='search-container'>
        <div className='search-input-container'>
          <input
            className='search-input'
            type='text'
            placeholder='enter the job tittle'
            value={jobTittle}
            onChange={(e) => { setjobTittle(e.target.value) }}>
          </input>
          <button className='search-btn' onClick={() => searchJob(jobTittle)}><i className="ri-find-replace-line"></i></button>
        </div>
        <div className='job-types-container'>
          {jobNames.map((jobTitle, index) => (
            <span className='job-titles' key={index} onClick={() => { 
              setjobTittle(jobTitle) 
              searchJob(jobTitle)
             }}>{jobTitle} <i className="ri-arrow-right-up-line"></i></span>
          ))}
        </div>
        <div className='cards-cobtainer'>
         {!jobs.length ? <span className='search-img-container'><img src={serchimg} alt='searcing img'></img></span>: jobs.map((job,index)=>(
          <Jobcard  jobInfo={job} />
         ))}
         </div>
      </div>
      <div className='Show'></div>
    </div>
  )
}

export default Search
