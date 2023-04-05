
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import ChatMessage from './ChatMessage';
import store from '../utils/store';
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {

    const dispatch = useDispatch();
    
    const [liveMessage,setLiveMessage] = useState("");

    const chatMessages = useSelector((store) => store.chat.messages);

    useEffect(() => {
        const i = setInterval(() => {
            //API polling
            // console.log("API polling");

            dispatch(
                addMessage({
                name:generateRandomName(),
                message:makeRandomMessage(20),
            })
            );
        },1500);

        return () => clearInterval(i);

    },[]);

  return (
    <>
      <h1 className='px-3 border border-black rounded-t-lg font-bold bg-gray-100'>Live Chat</h1>
      <div className=" w-96  h-[400px] border border-black bg-gray-100  overflow-y-scroll flex flex-col-reverse">
        
        {
          chatMessages.map((c, i) => <ChatMessage key={i} name={c.name} message={c.message} />)
        }
      </div>
      <form className=' p-2 w-full border border-black rounded-b-lg bg-gray-100'
        onSubmit={(e) => {
          e.preventDefault();
          // console.log("On form submit",liveMessage);
          dispatch(addMessage({
            name:"Nandlal Jaiswal",
            message:liveMessage,
          }));
          setLiveMessage("");
        }}>
        <input 
          type='text'
          className='border border-black rounded-lg w-72 px-2' 
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }} />
        <button className='mx-2 px-3 bg-green-100 border border-green-400 rounded-xl hover:bg-green-300'>Send</button>
      </form>
    </>
  )
}

export default LiveChat