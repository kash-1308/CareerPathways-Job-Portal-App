import React from 'react'
import "./Usercard.css"
import { jobNames } from '../../config/searchData'
import toast from 'react-hot-toast'

const randonJobname =()=>{
     return jobNames[Math.floor(Math.random()*jobNames.length)]
}


const Usercard = ({user}) => {

    const userCircle =({url,first_name,last_name,dob,location,gender,role})=>{
       let USERCIRCLE = JSON.parse(localStorage.getItem("USERCIRCLE")) || []
         USERCIRCLE.unshift({url,first_name,last_name,dob,location,gender,role})
          localStorage.setItem("USERCIRCLE",JSON.stringify(USERCIRCLE)) 
          toast.success(`successfully add in your circle..`)
    }

    const {dob,cell,email,gender,name,login,phone,picture,location} = user
    let role = randonJobname()
  return (
    <div className='user-info-card'>
       <div className='user-card-top'>
          <div className='usercard-image'>
             <img src={picture.medium}></img>
          </div>
          <div className='card-user-info'>
             <span className='user-card-name'>{`${name.first} ${name.last} .`}<span className='user-card-username'>@{login.username}</span></span>
             <span className='job-info'>{role}</span>
          </div>
       </div>
       <div className='user-card-bottom'>
          <div className='card-basic-info'>
             <span> <i class="ri-cake-fill"></i>:{dob.age-10}</span>
             <span><i class="ri-map-pin-2-fill"></i>:{(location.city).split(" ")[0]}</span>
             <span>{gender == "male" ? <i class="ri-men-fill"></i> : <i class="ri-women-fill"></i>}</span>
          </div>
           <div className='card-btn-container'>
              <button className='job-btn' onClick={()=>{
                 userCircle({
                   url:picture.medium,
                   first_name:name.first,
                   last_name:name.last,
                   dob:dob.age-10,
                   location:location.city,
                   gender:gender,
                   role:role
                 })
              }}>add to circle</button>
           </div>
       </div>
    </div>
  )
}

export default Usercard
