import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={style.posts}>my posts
            <div>
                <textarea name="newPostText" id="" cols="120" rows="10"></textarea>
                <button className={style.addPost__btn}>Add post</button>
            </div>
           <Post message='Hi, how are you?' likeCounts={15}/>
           <Post message="It's, my first post" likeCounts={20}/>
        </div>
    )
}
export default MyPosts;