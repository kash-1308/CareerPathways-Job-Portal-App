import React, { useEffect, useState } from 'react'
import "./Chatscreen.css"
import { Usermsg, Recmsg } from '../MsgStyles/Msgstyle'
//import { ANSWERS } from '../../config/ChatsData'
import axios from 'axios'



const Chatscreen = ({ user, chatscreen }) => {



  const [Message, setmsg] = useState("")
  const [chat, setchat] = useState([])
  const [chatState, setchatState] = useState(`${user.role}`)

  const handleinput = (e) => {
    setmsg(e.target.value)
  }

  const addmessages = (msg, type) => {
    setchat(prevChat => [...prevChat, { Message: msg, sender: type }])
    //console.log(chat)
    setmsg('')
  }


  const answer = async () => {
    setchatState('typing..')
    let QUE = Message.replace(" ", "_")
    let responce = "i cant any thing about that."
    let URL = `https://telesevapi.vercel.app/gpt-web?question=${QUE}`;
    try {
      let res = await axios.get(URL)
      if (res) { setchatState(`${user.role}`) }
      responce = res.data.message
    } catch (error) {
      console.log(error)
    }

    addmessages(responce, "reciever")
  }



  /*
  
      const answer =()=>{
            let replyed=""
             let msg = Message.toLowerCase()
             let ans = ANSWERS.filter((anser)=>{
                return(anser.que.includes(msg))
             })
             console.log(ans)
             if(ans.length===0){
              replyed="i cant understant "
             }else{
             replyed=ans[0].reply
             }
        addmessages(replyed,"reciever")
      }
  
      */
  useEffect(() => {
    const chatDiv = document.getElementById('chat-container');
    if (chatDiv) {
      chatDiv.scrollTop = 0; 
    }
  }, [chat]);



  return (
    <div className='main-chat-container'>
      <div className='chat-screen'>
        <div className='chat-user-info'>
          <span className='back-arrow' onClick={() => chatscreen(false)}><i class="ri-arrow-left-line"></i></span>
          <div className='user-pic usercard-image'>
            <img src={user.url}></img>
          </div>
          <div className='chat-open-user-info'>
            <span className='chat-open-user-name chat-name'>{`${user.first_name} ${user.last_name}`}</span>
            <span className='user-work user-work-info'>{chatState}</span>
          </div>

        </div>
        <div className='main-chat-div' id='chat-container' >
          {/*add chaing here.....*/}

          {
            chat.map((msg, index) => (
              <>
                {msg.sender === "user" ? <Usermsg text={msg.Message} key={index} /> : <Recmsg key={index} text={msg.Message} />}
              </>
            ))
          }

        </div>
        <div className='input-div'>
          <input
            className='search-input'
            type='text'
            value={Message}
            onChange={handleinput}
          >
          </input>
          <button className='send-btn search-btn' disabled={!Message.trim()} onClick={() => {
            addmessages(Message, "user")
            answer()
          }} ><i class="ri-send-plane-fill"></i></button>
        </div>
      </div>
      <div className='Show'></div>
    </div>
  )
}

export default Chatscreen