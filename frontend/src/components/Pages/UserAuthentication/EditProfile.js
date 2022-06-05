import React, { useContext, useEffect, useState } from "react"
import { useHistory } from 'react-router';
import Navbar from '../../Navbar/Navbar';
import './UserAuthentication.css'
import getBackendURL from '../../../helpers/getURL.js';

function Profile() {
	const routerHistory = useHistory();


	const [profile, setProfile] = useState({
		userName: "",
		firstName: "",
		lastName: "",
		about: "",
		profilePictureURL: "https://cutewallpaper.org/22/meme-profile-picture-wallpapers/76516251.jpg",
	});

	const getPicture = () => {
		return profile.profilePictureURL == "" || profile.profilePictureURL == null
			? "https://cutewallpaper.org/22/meme-profile-picture-wallpapers/76516251.jpg" : profile.profilePictureURL;
	};

	let submitUpdateProfile = (event) => {
		event.preventDefault();

		let requestOptions = {
			method: "POST",
			credentials: 'include',
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				userName: profile.userName,
				firstName: profile.firstName,
				lastName: profile.lastName,
				about: profile.about,
				profilePictureURL: profile.profilePictureURL,
			})
		};

		fetch(getBackendURL() + "/users/updateProfile", requestOptions)
			.then(() => {
				routerHistory.push('/profil')
			}
			)
	}

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
						<form onSubmit={submitUpdateProfile}>
							<div className="user_profile">
								<div className='user_profile_left'>
									<img className='user_pic' src={getPicture()}></img>
								</div>
								<div className='user_profile_right'>
									<input className='user_name profile_input' value={profile.firstName} onChange={(val) => setProfile(
										prevState => {
											return { ...prevState, firstName: val.target.value }
										}
									)} />
									<input className='user_lastName profile_input' value={profile.lastName} onChange={(val) => setProfile(
										prevState => {
											return { ...prevState, lastName: val.target.value }
										}
									)} />
									<input className='user_username profile_input' value={profile.userName} onChange={(val) => setProfile(
										prevState => {
											return { ...prevState, userName: val.target.value }
										}
									)} />
								</div>
							</div>
							<textarea className='user_bio profile_input bio_input' value={profile.about} onChange={(val) => setProfile(
								prevState => {
									return { ...prevState, about: val.target.value }
								}
							)} />
							{/* <p className='user_stat'> Problems Solved: 10/100 </p> */}
							<div className="user_profile">
								<div className='user_profile_update'>
									<input className='user_update_button profile_input_submit' type="submit" value="güncelle" />
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default Profile;