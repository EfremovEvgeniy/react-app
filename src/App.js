import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQRD9watd98GuxuplYkqW5OizlYfQa_Iy4_3g&usqp=CAU" alt=""/></header>
      <nav className='nav'>
        <div><a href="#">Profile</a></div>
        <div><a href="#">Messages</a></div>
        <div><a href="#">News</a></div>
        <div><a href="#">Music</a></div>
        <div><a href="#">Settings</a></div>
      </nav>
      <div className='content'>
        <div>
          <img src="https://blog.iese.edu/cities-challenges-and-management/files/2019/05/hong-kong-1990268_960_720.jpg" alt=""/>
        </div>
        <div>
           ava + desc
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div>
            <div>
              Post 1
            </div>
            <div>
              Post 2
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
