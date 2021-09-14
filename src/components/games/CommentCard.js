import React from 'react'

function CommentCard({ comment }) {





  return (
    <div>
      <p>{comment.owner.username}</p>
      <p>{comment.text}</p>
    </div>
  )
}

export default CommentCard