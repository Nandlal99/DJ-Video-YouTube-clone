import React from 'react'

const Button = ({name}) => {
  return (
    <div className='m-1 mt-3' >
        <button className='px-3 py-2 bg-gray-200 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button