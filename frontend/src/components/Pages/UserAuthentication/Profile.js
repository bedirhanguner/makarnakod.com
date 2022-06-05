import React, { useContext, useEffect, useState } from "react"
import Navbar from '../../Navbar/Navbar';
import './UserAuthentication.css'
import getBackendURL from '../../../helpers/getURL.js';

function Profile() {
    const [profile, setProfile] = useState({
        userName: "",
        firstName: "",
        lastName: "",
        about: "",
        profilePictureURL: "https://cutewallpaper.org/22/meme-profile-picture-wallpapers/76516251.jpg",
    });

    useEffect(() => {
        const requestOptions = {
            method: "GET",
            credentials: 'include',
            headers: { "Content-Type": "application/json" },
        };
        return fetch(`${getBackendURL()}/users/profile`, requestOptions).then(response => response.json()).then(data => {
            setProfile(
                {
                    about: data.userInfo.About,
                    firstName: data.userInfo.FirstName,
                    lastName: data.userInfo.LastName,
                    profilePictureURL: data.userInfo.ProfilePictureURL == "" || data.userInfo.ProfilePictureURL == null
                        ? "https://cutewallpaper.org/22/meme-profile-picture-wallpapers/76516251.jpg" : data.userInfo.ProfilePictureURL,
                    userName: data.userInfo.UserName,
                }
            )
        })
    }, [])

    return (
        <>
            <Navbar />
            <div className='user_auth_main'>
                <div className='user_auth_wrapper'>
                    <div className='user_profile_container'>
                        <div className="user_profile">
                            <div className='user_profile_left'>
                                <img className='user_pic' src={profile.profilePictureURL}></img>
                            </div>
                            <div className='user_profile_right'>
                                <p className='user_name'> {profile.firstName + " " + profile.lastName} </p>
                                <p className='user_username'> @{profile.userName} </p>
                            </div>
                        </div>
                        <p className='user_bio'> {profile.about} </p>
                        {/* <p className='user_stat'> Problems Solved: 10/100 </p> */}
                        <div className="user_profile">
                            <div className='user_profile_update'>
                                <input className='user_update_button' type="submit" value="profili güncelle" />
                            </div>
                            <div className='user_pass_update'>
                                <input className='user_update_button' type="submit" value="şifreyi güncelle" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;