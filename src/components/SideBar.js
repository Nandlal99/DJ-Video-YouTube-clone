import {  useDispatch, useSelector } from "react-redux";
import {useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import home from '../img/home.png';
import music from '../img/music.png';
import movie from '../img/movie.png';
import game from '../img/Game.png';
import { addText } from "../utils/searchVideoSlice";
// import { useEffect, useState } from "react";
// import { YOUTUBE_VIDEO_API_BY_TEXT } from "../utils/constant";

const SideBar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    const [text,setText] = useState("");
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addText(text));
    },[text]);

    // const [musicVideos,setMusicVideos] = useState([]);

    // useEffect(()=> {
    //     getMusicVideos();
    // })

    // const getMusicVideos = async () => {
    //     const data = await fetch(YOUTUBE_VIDEO_API_BY_TEXT + "music");
    //     const json = await data.json();
    //     console.log(json);
    // }
    // Early return pattern
    if(!isMenuOpen) return null;

    return (
        <div className="p-2  shadow-md w-24 pt-3">
            <ul >
                <div className="p-3">
                    <img 
                        className="h-8 cursor-pointer" 
                        alt="home-logo" 
                        src={home} 
                        onClick={() => setText("home")}
                        />
                    
                    <li className="text-xs">Home</li>
                </div>
                <div className="p-3">
                    <img 
                        className="h-8 cursor-pointer" 
                        alt="music-logo" 
                        src={music}
                        onClick={() => setText("music")}
                         />
                    <li className="text-xs">Music</li>
                </div>
                <div className="p-3">
                    <img 
                        className="h-8 cursor-pointer" 
                        alt="game-logo" 
                        src={game}
                        onClick={() => setText("game")}
                         />
                    <li className="text-xs">Game</li>
                </div>
                <div className="p-3">
                    <img 
                        className="h-8 cursor-pointer" 
                        alt="movie-logo" 
                        src={movie}
                        onClick={() => setText("movie")}
                        />
                    <li className="text-xs">Movie</li>
                </div>
            </ul>
        </div>
    );
};

export default SideBar;