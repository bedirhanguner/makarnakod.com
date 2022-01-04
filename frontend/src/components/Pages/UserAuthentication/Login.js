import React, { useContext, useState } from "react"
import { useHistory } from 'react-router';
import { UserContext } from "../../../context/UserContext"
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import getBackendURL from '../../../helpers/getURL';
import './UserAuthentication.css'

function Login() {
    const routerHistory = useHistory();


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [, setUserContext] = useContext(UserContext)


    function log_in(event) {
        event.preventDefault();

        const requestOptions = {
            method: "POST",
            credentials: 'include',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        };

        fetch(getBackendURL() + "/users/login", requestOptions)
            .then(async response => {
                const data = await response.json()
                setUserContext({ loggedIn: true, email: data.email, userInfo: data.user })
            })
            .then(() => {
                routerHistory.push('/');
                // window.location.href = "/"
            }
            )
    }

    return (
        <>
            <Navbar />
            <div className='user_auth_main'>
                <div className='user_auth_wrapper'>
                    <div className='user_auth_container'>
                        <div className='user_auth_signature'>
                            <div className='user_auth_logo'>
                                <i className="fas fa-pastafarianism" />
                            </div>
                            makarnakod
                        </div>
                        <div className='user_auth_form'>
                            <form onSubmit={log_in}>
                                <div className='user_auth_inputs'>
                                    <input className='user_auth_form_element' type="text" name="email" placeholder='e-posta adresi' onChange={e => setEmail(e.target.value)} required />
                                    <input className='user_auth_form_element' type="password" name="password" placeholder='parola' onChange={e => setPassword(e.target.value)} required />
                                    <input className='user_auth_form_button' type="submit" value="giriş yap" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Login;