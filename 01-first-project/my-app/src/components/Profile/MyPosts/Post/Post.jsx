import React from "react";
import style from './Post.module.css';
import avatarImage from './avatar.jpg';

const Post = (props) => {
    return (
        <div className={style.post}>
            <div>Post 1</div>
            <div className={style.item}>
                <img src={avatarImage} alt="avatar"/>
                <p>{props.message}</p>
            </div>
             <div>like ({props.likeCounts})</div>
        </div>
    )
}
export default Post;