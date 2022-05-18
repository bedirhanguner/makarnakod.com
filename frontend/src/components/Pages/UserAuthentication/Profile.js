import React, { useContext, useState } from "react"
import Navbar from '../../Navbar/Navbar';
import './UserAuthentication.css'

function Profile() {
    return (
        <>
            <Navbar />
            <div className='user_auth_main'>
                <div className='user_auth_wrapper'>
                    <div className='user_profile_container'>
                        <div className="user_profile">
                            <div className='user_profile_left'>
                                <img className ='user_pic'src="https://cutewallpaper.org/22/meme-profile-picture-wallpapers/76516251.jpg"></img>
                            </div>
                            <div className='user_profile_right'>
                                <p className='user_name'> Alberen Pirol </p>
                                <p className='user_username'> @alberenpirol </p>
                            </div>
                        </div>
                            <p className='user_bio'> i love coding in general. challenge accepted </p>
                            <p className='user_stat'> Problems Solved: 10/100 </p>
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