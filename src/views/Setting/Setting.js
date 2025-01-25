import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import './setting.css'
import BoyProfileImg from './user.svg'
import './toggle.css'
import { Passpopup ,Profilepopup} from '../../components/popup/Popup'
import toast from 'react-hot-toast'


const Setting = () => {

  useEffect(()=>{
     if(! JSON.parse(localStorage.getItem('LOGINUSER'))){
      toast.error("login is required...")
       window.location.href('/')
     }
  },[])

  const [popup,setpopup] = useState(false)
  const [opration , setopration] = useState(``)
  const serchNum = localStorage.getItem("RESULTNUMBER")
  const [serchresultNumber,setSerchresultNumber] = useState(serchNum || 18)
  const [githuburl,setgithuburl] = useState("")
  const [instaurl,setinstaurl] = useState("")
  const [linkdinurl,setlinkdinurl] = useState("")
  const [facebookurl,setfacebookurl] = useState("")
  
  const USER =  JSON.parse(localStorage.getItem("LOGINUSER"))


 const saveaccounts =()=>{
    if(instaurl.includes("https://www.instagram.com/") && githuburl.includes("https://github.com/") && linkdinurl.includes("https://www.linkedin.com/") && facebookurl.includes("https://www.facebook.com/")){
      toast.success("saved successfully")
      const socialAccount = {instaurl,githuburl,linkdinurl,facebookurl}
      //console.log(socialAccount)
      localStorage.setItem("SOCIALMEDIA",JSON.stringify(socialAccount))

    }else{
      toast.error("please enter valid url")
    }
 }


  return (
    <>
      <Sidebar/>
      <div className='setting-container'>
      <span className='liner-text set-txt' >Settings</span>
      <div className='setting-user-profile'>
          <span className='setting-profile-pic'>
             <img src={BoyProfileImg}></img>
          </span>
        <span className='user-info'>
             <div>{USER.email}<i class="ri-arrow-right-s-line"></i></div>
             <div className='setting-user-name'>@{USER.username}</div>
        </span>
      </div>

      
      <div className='setting-box'>
           <span className='setting-heading'>profile</span>
           <div className='user-set-box'>
             <div className='seting-name' onClick={()=>{
              setpopup(true) 
              setopration("chng-profile")
              }}><i className="ri-group-fill"></i> edit profile  <i class="ri-arrow-drop-right-line"></i></div>
             <div className='seting-name' onClick={()=>{setpopup(true)
              setopration("chng-passs")
             }}><i class="ri-key-2-fill"></i> change password  <i class="ri-arrow-drop-right-line"></i></div>
           </div>
      </div>

      <div className='setting-box'>
           <span className='setting-heading'>searches</span>
           <div className='them-btn-container'>
             <span className='seting-name'> <i class="ri-notification-fill"></i> result no.</span>
                  <div>
                      <input type='number' className='serhces-res-box'  value={serchresultNumber} onChange={(e)=>{setSerchresultNumber(e.target.value)}} ></input>
                      <span className='savebtn' onClick={()=>{
                          if(serchresultNumber<0 || serchresultNumber >20){
                            toast.error('value must be between 10 to 20')
                            setSerchresultNumber(18)
                          }else{
                            localStorage.setItem("RESULTNUMBER",serchresultNumber)
                            setSerchresultNumber(serchresultNumber)
                            toast.success("saved")
                          }
                      }}>save</span>
                  </div>
           </div>
      </div>


            
      <div className='setting-box'>
           <span className='setting-heading'>link social media</span>
           <div className='user-set-box socialmedias'>
              <span><i class="ri-github-fill"></i> <input type='text' className='seting-in' value={githuburl} placeholder='enter your github profile url'  onChange={(e)=>setgithuburl(e.target.value)}></input></span> 
              <span><i class="ri-linkedin-box-fill"></i> <input type='text' className='seting-in' value={linkdinurl} placeholder='enter your linkdin profile url' onChange={(e)=>setlinkdinurl(e.target.value)}></input></span>
              <span><i class="ri-instagram-fill"></i> <input type='text' className='seting-in' value={instaurl} placeholder='enter your instagram profile url' onChange={(e)=>setinstaurl(e.target.value)}></input></span> 
              <span><i class="ri-facebook-box-fill"></i> <input type='text' className='seting-in' value={facebookurl} placeholder='enter your facebook profile url' onChange={(e)=>setfacebookurl(e.target.value)}></input></span>    

           </div>
           <div className='save-btn-div'>
           <button className='job-btn save-btn' onClick={()=>saveaccounts()}>save</button>
           </div>
      </div>
    
      <div className='setting-box'>
            <span className='log-out' onClick={()=>{
              window.location.href="/"
               localStorage.removeItem("LOGINUSER")
               localStorage.removeItem("searchedJobs") 
            }}><i class="ri-arrow-left-fill"></i> log out</span>
      </div>

          {popup ? <div className='overlay'>
              { opration === "chng-passs" ? <Passpopup user={USER} popUp={setpopup}/> : <Profilepopup user={USER} popUp={setpopup}/>}
        <span className='close-popup' onClick={()=>{setpopup(false)}}><i class="ri-close-line"></i></span>
        </div>:null}
        <div className='Show'></div>
    </div>
  </>
  )
}

export default Setting
