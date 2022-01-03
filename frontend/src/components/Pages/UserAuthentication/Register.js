import React from 'react'
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import getBackendURL from '../../../helpers/getURL';
import './UserAuthentication.css'

function Register() {
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
                            <form action={getBackendURL() + '/users/register'} method='POST'>
                                <div className='user_auth_inputs'>
                                    <input className='user_auth_form_element' type="text" name="email" placeholder='e-posta adresi' required />
                                    <input className='user_auth_form_element' type="password" name="password" placeholder='parola' required />
                                    <input className='user_auth_form_element' type="password" name="confirmPassword" placeholder='parolayı doğrula'  required />
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