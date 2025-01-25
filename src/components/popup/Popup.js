import React, { useState } from 'react'
import "./popup.css"
import toast from 'react-hot-toast'


const USERS = JSON.parse(localStorage.getItem("users")) || []

const Passpopup = ({ user, popUp }) => {

  const [newpass, setnewpass] = useState('')
  const [oldpass, setoldpass] = useState('')

  const updatepass = (ind) => {
    if (! (user.password === oldpass)) {
      toast.error("password dosn't match")
    } else {
      let LOGINUSER = JSON.parse(localStorage.getItem("LOGINUSER"))
      LOGINUSER = {
        ...LOGINUSER,
        password:newpass
      }
      localStorage.setItem("LOGINUSER", JSON.stringify(LOGINUSER))
      USERS[ind] = LOGINUSER
      toast.success("update successfully...")
      popUp(false)
      localStorage.setItem("users", JSON.stringify(USERS))
    }
  }

  return (
    <div className='pop-body'>
      <span className='popup-text'>update your password</span>
      <input type='text' placeholder='enter your password' className='seting-in' value={oldpass} onChange={(e) => setoldpass(e.target.value)}></input>
      <input type='text' placeholder='set new password' className='seting-in' value={newpass} onChange={(e) => { setnewpass(e.target.value) }}></input>
      <button className='job-btn' onClick={() => { updatepass(user.index) }}>update password</button>
      <span className=' chng-note note'><i class="ri-alarm-warning-fill"></i> next time login with new password</span>
    </div>
  )
}

const Profilepopup = ({ user, popUp }) => {

  const [useremail, setemail] = useState(user.email)
  const [userusername, setusername] = useState(user.username)
  const updateinfo = (ind) => {

    if (!useremail.includes("@") && useremail.includes("")) {
      toast.error("please enter valid information")
    } else {
      let LOGINUSER = JSON.parse(localStorage.getItem("LOGINUSER"))
      LOGINUSER = {
        ...LOGINUSER,
        email: useremail,
        username: userusername
      }
      localStorage.setItem("LOGINUSER", JSON.stringify(LOGINUSER))
      USERS[ind] = LOGINUSER
      toast.success("update successfully...")
      popUp(false)
      localStorage.setItem("users", JSON.stringify(USERS))
    }
  }


  return (
    <div className='pop-body'>
      <span className='popup-text'>update name & username</span>
      <input type='text' value={useremail} className='seting-in' placeholder='edit your email' onChange={(e) => { setemail(e.target.value) }}></input>
      <input type='text' value={userusername} className='seting-in' placeholder='username' onChange={(e) => { setusername(e.target.value) }}></input>
      <button className='job-btn' onClick={() => { updateinfo(user.index) }}>update </button>
      <span className=' chng-note note'><i class="ri-alarm-warning-fill"></i> next time login with updated data</span>
    </div>
  )
}


export { Passpopup, Profilepopup }
