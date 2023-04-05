import React from 'react'

const Video = ({info}) => {
    // console.log(info);
    // const {snippet,statistics} = info;
    // const {channelTitle,title,thumbnails}= snippet;
  return (
    <div className='p-3 m-3 w-64  shadow-lg'>
        <img className='rounded-xl' alt='thumnail' src={info?.snippet?.thumbnails?.medium?.url} />
        <div>
            <ul>
                <li className='font-bold py-2 h-14 overflow-hidden '>{info?.snippet?.title}</li>
                <li className='text-gray-600 py-1'>{info?.snippet?.channelTitle}</li>
                <li className='text-gray-600'>{info?.statistics?.viewCount} views</li>
            </ul>
        </div>
        
    </div>
  )
}

export default Video