
// import React, { useState } from 'react'
import Comment from './Comment'

const CommentList = ({comments}) => {

  // const [showReplies,setShowReplies] = useState(false);

  return (
    comments.map((comment,index) =>
        <div key={index}>
            <Comment  data={comment} />
            <button 
              className='text-blue-700 px-3 mx-12 hover:bg-blue-100 rounded-xl'>
                {comment.replies?.length} replies
            </button>
             
              <div className='px-5  ml-5'>
                <CommentList comments={comment.replies} />
              </div>
        </div>
     )
  )
}

export default CommentList