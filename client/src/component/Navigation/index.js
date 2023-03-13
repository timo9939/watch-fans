import React, { useState } from "react";
import "./nav.css";


const Navigation = ({currentPage, handlePageChange}) => {

//////// modal stuff ////////////////   

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    if(modal){
        document.body.classList.add("active-modl")
    }else{
        document.body.classList.remove("active-modl")
    }

////////////////////////////////////////

/////////// login stuff ///////////////////

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const updateUsername = e => setUsername(e.target.value)
    const updatePassword = e => setPassword(e.target.value)


        const signup = e => {
          e.preventDefault()
          console.log('Username', username)
          console.log('Password', password)
        }
////////////////////////////////

    return(<>

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

