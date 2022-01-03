import React from 'react'
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import getBackendURL from '../../../helpers/getURL';

function Register() {
    return (
        <>
            <Navbar />
            <div>
                {/* Register form */}
                <h1>Register</h1>
                <form action={getBackendURL() + '/users/register'} method='POST'>
                    <label>
                        Email:
                        <input type="text" name="email" required />
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" required />
                    </label>
                    <label>
                        Confirm Password:
                        <input type="password" name="confirmPassword" required />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            {/*<Transition />*/}
            <Footer />
        </>
    );
}

export default Register;