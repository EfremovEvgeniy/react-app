import React from 'react';
import s from './Profile.module.scss'

const Profile = () => {
    return (
        <main className={s.content}>
            <div className={s.ava}>
                <img src="https://avatarfiles.alphacoders.com/693/69306.jpg" alt=""/>
            </div>
            <div className={s.description}>
                <p>Мой профиль</p>
            </div>
            <div className={s.title}>
                <span>My posts</span>
            </div>
            <div className={s.new}>
                New post
            </div>
            <div className={s.posts}>
                <div className={s.post}>
                    Post 1
                </div>
                <div className={s.post}>
                    Post 2
                </div>
            </div>
        </main>
    );
}

export default Profile;