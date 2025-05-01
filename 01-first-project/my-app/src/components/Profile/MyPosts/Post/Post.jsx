import React from "react";
import style from './Post.module.css';
import avatarImage from './avatar.jpg';

const Post = () => {
    return (
        <div>
            <div>Post 1</div>
            <div className={style.item}>
                <img src={avatarImage} alt="avatar"/>
                <p>post 1 text</p>
            </div>
            <div>like</div>
        </div>
    )
}
export default Post;