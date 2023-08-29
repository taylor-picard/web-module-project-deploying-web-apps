import React from 'react';


const LikeSection = props => {

  const { likePost, numberOfLikes } = props;

  return (
    <div>
      <div
        className='like-section'
        key='likes-icons-container'
      >
        <div className='like-section-wrapper' onClick = {likePost}>
        </div>
        <div className='like-section-wrapper'>
        </div>
      </div>
      <p className='like-number'> {numberOfLikes} likes</p>
    </div>
  );
};

export default LikeSection;
