import React, { useState } from "react";
import "./nav.css";


const Navigation = () => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    if(modal){
        document.body.classList.add("active-modl")
    }else{
        document.body.classList.remove("active-modl")
    }

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const updateUsername = e => setUsername(e.target.value)
    const updatePassword = e => setPassword(e.target.value)


        const signup = e => {
          e.preventDefault()
          console.log('Username', username)
          console.log('Password', password)
        }


    return(<>

        <div className="nav-container">
            <ul>
                <li className="Home">Home</li>
                <li className="Catagories">Catagories</li>
                <li className="Login" onClick={toggleModal}>Login</li>
            </ul>
        </div>

    {modal && (
 
            <form onSubmit={signup} className="modalForm">
                <input type="text" placeholder="username" value={username}onChange={updateUsername}/>
                <input type="password" placeholder="password" value={password} onChange={updatePassword}/>
                <button>Login</button>
                <button className="close-modal" onClick={toggleModal}>Close</button>
            </form>
        
    )}
        </> )
}

export default Navigation;

