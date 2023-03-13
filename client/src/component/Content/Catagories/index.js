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
            <figcaption>Rolex Watch</figcaption>
            
            </figure>

            <figure className="figure2">
            <img src={img02} className="thumbnail"></img>
            <figcaption>Lady watch</figcaption>
            
            </figure>

            <figure className="figure3">
            <img src={img03} className="thumbnail"></img>
            <figcaption>Male watch</figcaption>
            
            </figure>

        </section>

    )
}

export default Catagories;