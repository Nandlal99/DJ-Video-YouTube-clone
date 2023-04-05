import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { QUERY_KEY, VIDEO_API, YOUTUBE_VIDEO_API } from '../utils/constant';
import Shimmer from './Shimmer';
import Video from './Video';
import { useSelector } from 'react-redux';

const VideoContainer = () => {
    const [videos,setVideos] = useState([]);

    const change = useSelector(store => store.searchVideo.text);
    // console.log(change);


    useEffect(() => {
        getVideos();
    },[change]);

    const getVideos = async () => {
      // const data = await fetch(YOUTUBE_VIDEO_API);
      //   const json = await data.json();
      //   console.log(json.items);
      //   setVideos(json.items);
      if(change === "" || change==="home"){
        const data = await fetch(YOUTUBE_VIDEO_API);
        const json = await data.json();
        console.log(json.items);
        setVideos(json.items);
      }
      else{
        const data = await fetch(VIDEO_API+change+QUERY_KEY);
        const json = await data.json();
        console.log(json.items);
        setVideos(json.items);
      }
    };

  return (videos?.length === 0) ? (<Shimmer/>) : (
    <div className='flex flex-wrap'>
      { (change === "" || change === "home") ?
          (videos?.map(video => 
            <Link to={"/watch?v="+video?.id} key={video?.id} ><Video  info={ video } /></Link>
          )) : (videos?.map(video => 
            <Link to={"/watch?v="+video?.id?.videoId} key={video?.id?.videoId} ><Video  info={ video } /></Link>
          ))
      }
    </div>
  );
};

export default VideoContainer;