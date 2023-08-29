import React from 'react';
import Comment from './comment';
import './Comments.css';

const Comments = props => {
  const { comments } = props;

  return (
    <div>
      {comments.map(comment => {
        return <Comment comment = {comment} key = {comment.id}/>
      })}
    </div>
  );
};

export default Comments;
