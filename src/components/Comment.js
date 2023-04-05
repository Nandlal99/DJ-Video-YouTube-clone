
import React from 'react'
import user from '../img/user.png';

const Comment = ({data}) => {
    const {name,text,replies} = data;
  return (
    <div className='flex    pl-2 mt-2'>
        <img className='h-8' alt='user' src={user} />
        <div className='pl-3'>
            <h1 className='font-semibold'>{name}</h1>
            <h1>{text}</h1>
        </div>
    </div>
  )
}

export default Comment