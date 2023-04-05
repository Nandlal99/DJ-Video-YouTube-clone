import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { API_KEY, YOUTUBE_VIDEO_API_BY_ID } from "../utils/constant";
import { closeMenu } from "../utils/sideMenuSlice";
import user from '../img/user.png';
import CommentsCointainer from "./CommentsCointainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {

    const [watchVideo,setWatchVideo] = useState([]);
    const [searchParams] = useSearchParams();
    // console.log(searchParams.get("v"));
    // console.log(searchParams);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu());
        // getWatchvideo();
        getWatchVideo();
    },[]);

    const getWatchVideo = async () =>{
        const data = await fetch(YOUTUBE_VIDEO_API_BY_ID + searchParams.get("v") + API_KEY);
        const json = await data.json();
        setWatchVideo(json?.items[0]);
        // console.log(json?.items[0]);
    };

    return (
        <div className="px-5 m-5">
            <div className="flex w-full">
                <iframe 
                    width="810" 
                    height="450" 
                    src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen>
                </iframe>
                <div className="mx-5" >
                    <LiveChat />
                </div>
            </div>
            <div>
                <ul>
                    <li className="my-2 font-bold text-xl w-2/4">{watchVideo?.snippet?.title}</li>
                    <div className="my-2 flex gap-2 ">
                        <img 
                            className="h-6 "
                            alt="logo"
                            src={user}
                        />
                        <li className="font-bold">{watchVideo?.snippet?.channelTitle}</li>
                    </div>
                    <div className="flex gap-5 my-2">
                        <li>{watchVideo?.statistics?.viewCount} views</li>
                        <li className="h-8">|</li>
                        <li>{watchVideo?.statistics?.likeCount} likes</li>
                        <li className="h-8">|</li>
                        <li>{watchVideo?.statistics?.commentCount} comments</li>
                    </div>
                </ul>
            </div>
            <CommentsCointainer />
        </div>
    );
};

export default WatchPage;