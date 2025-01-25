import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import "./Chat.css"
import serchImg from "./searchImg.png"
import Chatprofile from '../../components/Chatprofile/Chatprofile'
import Chatscreen from '../../components/Chatscreen/Chatscreen'

const Chat = () => {

  const USERCIRCLE = JSON.parse(localStorage.getItem("USERCIRCLE")) || []
  const [chatUser ,setChtauser] = useState({})
  const [chatScreen,setchatSCreen] = useState(false)
  return (
    <div className='all-chats-wrap'>
    <Sidebar/>
    <div className='chats-container'>
        <h1 className='liner-text user-heading'>my circle</h1>
      <div className='all-chats'>
      {USERCIRCLE.length==0?<span className='user-serch-img'><img src={serchImg}></img></span>:
                       USERCIRCLE.map((user ,index)=>(
                            <Chatprofile key={index} user={user} setUser={setChtauser} chatscreen={setchatSCreen}/> 
                       ))
                }
      </div>
      {chatScreen ? <Chatscreen user={chatUser} chatscreen={setchatSCreen} />  : null}
      <div className='Show'></div>
    </div>
    </div>
  )
}

export default Chat
