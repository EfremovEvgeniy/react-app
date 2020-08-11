import React from "react";
import s from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <span>My posts</span>
      </div>
      <div className={s.new}>
        <textarea></textarea>
        <button>Add posts</button>
      </div>
      <div className={s.posts}>
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;
