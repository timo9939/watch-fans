import React, { useState } from "react";
import "./modal.css"
import {ADD_USER}from"../../utils/mutation"
import AuthService from '../utils/auth'
import { useMutation } from '@apollo/client';

    function Signup() {
        const [modal, setModal] = useState(false);
        const [addSignUp, { error, data }] = useMutation(ADD_USER);

        const toggleModal = () => {
            setModal(!modal)
        }


        const [username, setUsername] = useState('')
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
      
        const updateUsername = e => setUsername(e.target.value)
        const updateEmail=e=>setEmail(e.target.value)
        const updatePassword = e => setPassword(e.target.value)
        
        const handleSignUp = async e => {
          e.preventDefault()
          console.log('Username', username)
          console.log('Email',email)
          console.log('Password', password)

          // call the gql andUser mutations
          try {
            const response = await addSignUp({
              variables: { username: username, email: email, password: password },
            });

            AuthService.login(response.data.addSignUp.token);
        } catch (e) {
          console.error(e);
        }
          // add the token to LS
        }


    return(
        <>
            <button onClick={toggleModal} className="btn">
                login
            </button>
            
            
            <div className="modal">

                <form onSubmit={handleSignUp} className="modalForm">
                    <input type="text" placeholder="username" value={username}onChange={updateUsername}/>
                    <input type="text" placeholder="email" value={email}onChange={updateEmail}/>
                    <input type="password" placeholder="password" value={password} onChange={updatePassword}/>
                    <button>Signup</button>
                </form>
    
            </div>
        </>
    )

}

export default Signup;