import React from 'react';
import './App.css';
import PostForm from './Components/PostForm.jsx';
import PostLists from './postLists';

function App() {
  return (
    <div className="App">
    <PostForm />
    <PostLists />
    </div>
  );
}

export default App;
