import React from 'react';
import Comments from './comments';
import LikeSection from './likeSection';
import PostHeader from './postHeader';

const Post = props => {

  const { post, likePost } = props;

  return (
    <div className='post-border'>
      <PostHeader
        username={post.username}
        thumbnailUrl={post.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={post.imageUrl}
        />
      </div>
      <LikeSection likePost={() => likePost(post.id)} numberOfLikes = {post.likes} />
      <Comments comments = {post.comments}/>
    </div>
  );
};

export default Post;
