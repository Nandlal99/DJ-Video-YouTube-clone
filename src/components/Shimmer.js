
import React from 'react'

const Shimmer = () => {
  return (
    <div className='flex flex-wrap'>
        { Array(50).fill("").map((e,index) =>(
            <div className='p-3 m-3 w-64 h-64 shadow-lg' key={index} >
            <div  className='w-56 h-32 bg-gray-300 rounded-xl'></div>
            <ul className='my-5'>
                <li className='w-52 h-4 bg-gray-300 mt-4 mb-3'></li>
                <li className='w-40 h-4 bg-gray-300 my-3'></li>
                <li className='w-36 h-4 bg-gray-300 my-3'></li>
            </ul>
        </div>
        ))}
        {/* <div className='p-3 m-3 w-64 h-60 shadow-lg ' >
            <div  className='w-56 h-32 bg-gray-300 rounded-xl'></div>
            <ul className='my-3 '>
                <li className='w-52 h-3 bg-gray-300 mt-4 mb-3'></li>
                <li className='w-44 h-3 bg-gray-300 my-3'></li>
                <li className='w-40 h-3 bg-gray-300 my-3'></li>
            </ul>
        </div> */}
    </div>
  );
};

export default Shimmer;