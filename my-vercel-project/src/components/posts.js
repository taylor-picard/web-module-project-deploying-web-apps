import React from 'react';
import Post from './post';
import './Posts.css';

const Posts = (props) => {
  const { likePost, posts } = props;

  return (
    <div className='posts-container-wrapper'>
      {posts.map(post => {
        return <Post post = {post} likePost = {likePost} key = {post.id}/>
      })}
    </div>
  );
};

export default Posts;
