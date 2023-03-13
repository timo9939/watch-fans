import React from "react";
import "./catagories.css";


import img01 from "../../image/watch01.jpg";
import img02 from "../../image/watch02.jpg";
import img03 from "../../image/watch03.jpg";

const Catagories = () => {

    return(
        <section className="contentSection">

            <figure className="figure1">
            <img src={img01} className="thumbnail"></img>
            <figcaption>1920s watch</figcaption>
            
            </figure>

            <figure className="figure2">
            <img src={img02} className="thumbnail"></img>
            <figcaption>1930s watch</figcaption>
            
            </figure>

            <figure className="figure3">
            <img src={img03} className="thumbnail"></img>
            <figcaption>1940s watch</figcaption>
            
            </figure>

        </section>

    )
}

export default Catagories;