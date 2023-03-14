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
            <p figure1>Description: Second Hand Luxury Rolex Watch</p>
            <p figure1>Price:£ 1500</p>
            
            </figure>

            <figure className="figure1">
            <img src={img02} className="thumbnail"></img>
            <figcaption>Lady watch</figcaption>
            <p className="figure1">Description:Fashionable Lady Watch</p>
            <p className="figure1">Price £200</p>
            
            </figure>

            <figure className="figure1">
            <img src={img03} className="thumbnail"></img>
            <figcaption>Male watch</figcaption>
            <p figure1>Description: Multifunctional male watch that is worth to buy it</p>
            <p figure1>Price:£ 800</p>
            </figure>

        </section>

    )
}

export default Catagories;