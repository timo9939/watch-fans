import React, { useState } from "react";
import "./modal.css"

    function Signup() {

        const [modal, setModal] = useState(false);

        const toggleModal = () => {
            setModal(!modal)
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


    return(
        <>
            <button onClick={toggleModal} className="btn">
                login
            </button>
            
            
            <div className="modal">

                <form onSubmit={signup} className="modalForm">
                    <input type="text" placeholder="username" value={username}onChange={updateUsername}/>
                    <input type="password" placeholder="password" value={password} onChange={updatePassword}/>
                    <button>Login</button>
                </form>
    
            </div>
        </>
    )

}

export default Signup;