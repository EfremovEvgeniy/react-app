import React from 'react';

const Profile = () => {
    return (
        <div className='content'>
            <div className='ava-container clearfix'>
                <div className='ava'>
                    <img src="https://avatarfiles.alphacoders.com/693/69306.jpg" alt=""/>
                </div>
                <div className="description">
                    <p>Мой профиль</p>
                </div>
            </div>
            <div className='posts-container'>
                <div className="post-title"><p>My posts</p></div>
                <div className='new-post'>
                    New post
                </div>
                <div className='all-posts'>
                    <div className='post'>
                        Post 1
                    </div>
                    <div className='post'>
                        Post 2
                    </div>
                </div>
            </div>
      </div>
    );
}

export default Profile;