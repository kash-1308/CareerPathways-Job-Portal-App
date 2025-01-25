import React from 'react'
import "./Msgstyles.css"

const Usermsg = ({text}) => {
  return (
    <div className='user-msg-container'>
              <span className='user-msg'>{text}</span>
    </div>
  )
}


const Recmsg =({text})=>{
    return(
      <div className='rec-msg-container'>
               <span className='rec-msg'>{text}</span>
    </div>
    )
}

export {Usermsg,Recmsg}
