import React, { useState } from "react";
import "./nav.css";
import { ADD_USER } from "../../utils/mutation";
import AuthService from "../../utils/auth";
import { useMutation } from '@apollo/client';


const Navigation = ({ currentPage, handlePageChange }) => {

    const [modal, setModal] = useState(false);
    const [addSignUp, { error, data }] = useMutation(ADD_USER);


    const toggleModal = () => {
        setModal(!modal)
    }

    if (modal) {
        document.body.classList.add("active-modl")
    } else {
        document.body.classList.remove("active-modl")
    }

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginMessage,setLoginMessage]=useState('')

    const updateUsername = e => setUsername(e.target.value)
    const updateEmail = e => setEmail(e.target.value)
    const updatePassword = e => setPassword(e.target.value)


    const signup = async e => {
        e.preventDefault()

        try {
            const response = await addSignUp({
                variables: { username, email, password },
            });
            AuthService.login(response.data.addUser.token);
            console.log("account created successfuly")
            setLoginMessage("Sign up Successfully!")
        } catch (e) {
            console.error(e);
        }
    }
    console.log(`Username is ${AuthService.getProfile().data.username}`)

    return (
        <>
            <div className="nav_body">

                <div className="nav-container">
                    <ul>
                        <li className={currentPage === "Home" ? 'nav-item-active' : 'nav-item'}>
                            <a href="#Home" onClick={() => handlePageChange("Home")}>
                                Home
                            </a>
                        </li>

                        <li className={currentPage === "Catagories" ? 'nav-item-active' : 'nav-item'}>
                            <a href="#Catagories" onClick={() => handlePageChange("Catagories")}>
                                Catagories
                            </a>
                        </li>

                        <li className="Login" onClick={toggleModal}>Login</li>
                    </ul>
                </div>
                <div>{AuthService.loggedIn() ? `Welcome ${AuthService.getProfile().data.username}` : ""}</div>

                {modal && (

                    <form onSubmit={signup} className="modalForm">
                        <input type="text" className="modalInput" placeholder="username" value={username} onChange={updateUsername} />
                        <input type="email" className="modalInput" placeholder="email" value={email} onChange={updateEmail} />
                        <input type="password" className="modalInput" placeholder="password" value={password} onChange={updatePassword} />
                        <button>Sign up</button>
                        <button className="close-modal" onClick={toggleModal}>Close</button>
                    </form>

                )}
            </div>
        </>
    )
}

export default Navigation;
