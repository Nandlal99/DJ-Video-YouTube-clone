import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/sideMenuSlice";
import youtube from '../img/youtube.jpg';
import user from '../img/user.png';
import hamburger from '../img/hamburger.png';
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";

const Head = () => {

    const dispatch = useDispatch();

    const [searchQuery,setSearchQuery] = useState("");

    const [suggestion,setSuggestion] = useState([]);

    const [showSuggestion,setShowSuggestion] = useState(false);

    const searchCache = useSelector((store) => store.search);

    useEffect(() => {

        const timer = setTimeout(() =>
            { if(searchCache[searchQuery]){
                setSuggestion(searchCache[searchQuery]);
                } 
                else {
                    getSearchSuggestion();
                }} , 200);

        return () => {
            clearTimeout(timer);
        };
    },[searchQuery]);

    const getSearchSuggestion = async () => {
        // console.log('API call -'+ searchQuery);
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        // console.log(json[1]);
        setSuggestion(json[1]);
        dispatch(cacheResults({
            [searchQuery]:json[1],
        })
        );
        
    };
 
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    return (
        <div className="grid grid-flow-col p-4  shadow-md ">
            <div className="flex gap-4 col-span-1">
                <img
                    onClick={() => toggleMenuHandler()}
                    className="h-9 pt-3 cursor-pointer" alt="hamburger-logo" 
                    src={hamburger} />
                <div className="flex">
                    <a href="/"><img 
                        className="h-12 cursor-pointer" 
                        alt="logo" 
                        src={youtube} /></a>
                    <div className="font-bold py-3 px-1">DJ Video</div>
                </div>
            </div>
            <div className="col-span-10 ml-14">
                <div>
                    <input 
                        type="text" 
                        className="border border-gray-400 w-1/2 py-2 px-5 rounded-l-full " 
                        placeholder="Search"
                        value={searchQuery} 
                        onChange={ (e) => {
                            setSearchQuery(e.target.value);
                        }}
                        onFocus={() => setShowSuggestion(true)}
                        onBlur={ () => setShowSuggestion(false)}
                        />
                    <button 
                        className="border border-gray-400 p-2 rounded-r-full bg-gray-300">
                            Search
                    </button>
                </div>
                {showSuggestion && (<div className="my-1  bg-white absolute w-[27rem] rounded-xl border border-l-solid">
                    <ul className="my-2">
                        {suggestion.map(s =>
                            <li 
                                key={s} 
                                className="shadow-sm hover:bg-gray-100 px-5 py-1"
                                >
                                    {s}
                            </li>
                        )}                        
                    </ul>
                </div>)}
            </div>
            <div className="col-span-1">
                <img className="h-9 cursor-pointer pt-1" alt="user-logo" 
                    src={user} 
                />
            </div>
        </div>
    );
};

export default Head;