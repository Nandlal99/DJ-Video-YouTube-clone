
import React from 'react'
import user from '../img/user.png';

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex p-2 text-center shadow-sm '>
        <img className='h-6' alt='user' src={user} />
        <span className='px-2 font-semibold'>{name}</span>
        <span className='content-around'>{message}</span>
    </div>
  )
};

export default ChatMessage;