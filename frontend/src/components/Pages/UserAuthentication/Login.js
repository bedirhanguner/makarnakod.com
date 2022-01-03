import React, { useContext, useState } from "react"
import { useHistory } from 'react-router';

import { UserContext } from "../../../context/UserContext"
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import getBackendURL from '../../../helpers/getURL';


function Login() {
    const routerHistory = useHistory();


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userContext, setUserContext] = useContext(UserContext)


    function log_in() {
        fetch(getBackendURL() + "/users/login", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        })
            .then(async response => {
                const data = await response.json()
                console.log(data);
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
            <div>
                {/* login form */}
                <h1>Login</h1>
                <label>
                    Email:
                    <input type="text" name="email" onChange={e => setEmail(e.target.value)} required />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" onChange={e => setPassword(e.target.value)} required />
                </label>
                <input type="submit" onClick={log_in} value="Submit" />
            </div>
            {/*<Transition />*/}
            <Footer />
        </>
    );
}

export default Login;