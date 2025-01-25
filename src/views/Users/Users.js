import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import "./User.css"
import axios from 'axios'
import toast from 'react-hot-toast'
import serchImg from "./serch.png"
import Usercard from '../../components/Usercard/Usercard'

const Users = () => {

  const URL = `https://randomuser.me/api/?results=25&nat=IN`
  const [users, setuser] = useState([])


  const loadusers = async () => {
    try {
      let tid = toast.loading('loding users...')
      const responce = await axios.request(URL)
      //console.log(responce.data.results)
      setuser(responce.data.results)
      if (responce) { toast.dismiss(tid) }
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    loadusers()
  }, [])

  return (
    <>
      <Sidebar />
      <div className='user-container'>
        <h1 className='liner-text user-heading'>create your circle</h1>
        <div className='users-div'>
          {users.length == 0 ? <span className='user-serch-img'><img src={serchImg}></img></span> :
            users.map((user, index) => (
              <Usercard index={index} user={user} />
            ))
          }
        </div>
        <div className='Show'></div>
      </div>
    </>
  )
}

export default Users
