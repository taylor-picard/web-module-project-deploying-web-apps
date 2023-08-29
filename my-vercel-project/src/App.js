import React, {useState} from 'react';
import Posts from './components/posts';
import SearchBar from './components/searchBar'
import dummyData from './dummyData';

const App = () => {
  const [posts, setPosts] = useState(dummyData); 

  const likePost = postId => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId){
        return {...post, likes: post.likes + 1};
      }else{
        return post;
      }
    })

    setPosts(updatedPosts);
  };

  return (
    <div className='App'>
      <SearchBar />
      <Posts posts = {posts} likePost = {likePost}/>

    </div>
  );
};

export default App;
