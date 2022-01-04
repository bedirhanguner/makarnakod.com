import React, { useContext, useState } from "react"
import { useHistory } from 'react-router';
import { UserContext } from "../../../context/UserContext"
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import getBackendURL from '../../../helpers/getURL';
import './UserAuthentication.css'

function Register() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const [, setUserContext] = useContext(UserContext)

    const routerHistory = useHistory();

    function register_user(event) {
        event.preventDefault();

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: 'include',
            body: JSON.stringify({
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName
            }),
        };
        fetch(getBackendURL() + "/users/register", requestOptions)
            .then(async response => {
                const data = await response.json()
                setUserContext({ loggedIn: true, email: data.email })
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
                            <form onSubmit={register_user}>
                                <div className='user_auth_inputs'>
                                    <input className='user_auth_form_element' onChange={e => setFirstName(e.target.value)} type="text" name="firstName" placeholder='isim' required />
                                    <input className='user_auth_form_element' onChange={e => setLastName(e.target.value)} type="text" name="lastName" placeholder='soyisim' required />
                                    <input className='user_auth_form_element' onChange={e => setEmail(e.target.value)} type="text" name="email" placeholder='e-posta adresi' required />
                                    <input className='user_auth_form_element' onChange={e => setPassword(e.target.value)} type="password" name="password" placeholder='parola' required />
                                    <input className='user_auth_form_element' type="password" name="confirmPassword" placeholder='parolayı doğrula' required />
                                    <input className='user_auth_form_button' type="submit" value="kayıt ol" />
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

export default Register;