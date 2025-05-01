import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={style.posts}>my posts
            <div>
                <textarea name="newPostText" id="" cols="30" rows="10"></textarea>
                <button>Add post</button>
            </div>
           <Post/>
        </div>
    )
}
export default MyPosts;