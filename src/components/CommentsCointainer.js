
import React from 'react'
import { commentData } from '../utils/constant';
import CommentList from './CommentList';

const CommentsCointainer = () => {
  return (
    <div>
        <h1 className='text-xl font-bold'>Comments :</h1>
        <CommentList comments={commentData} />
    </div>
  )
}

export default CommentsCointainer;