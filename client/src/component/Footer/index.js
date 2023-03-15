import React from "react";
import "./footer.css";
import gh from "../image/gh.png";

const Footer = () => {

    return(
        <footer className="footer">
            <a href="https://github.com/timo9939/watch-fans"><img src={gh} className="ghLogo"/></a>
        </footer>

    )

}

export default Footer;