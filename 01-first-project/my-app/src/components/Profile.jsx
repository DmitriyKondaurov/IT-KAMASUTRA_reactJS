import React from "react";
import './Profile.module.css';

const Profile = () => {
    return (
        <div className="app-content">
            <img src='https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='image'/>
            <div>ava + description</div>
            <div>my posts
                <div>New post</div>
                <div className="posts">
                    <div className="item">post 1</div>
                    <div className="item">post 2</div>
                </div>
            </div>
        </div>
    )
}
export default Profile;