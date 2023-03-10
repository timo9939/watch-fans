import React from "react";
import "./content.css";
import img01 from "../image/watch01.jpg";
import img02 from "../image/watch02.jpg";
import img03 from "../image/watch03.jpg";

function Content() {
  return (
    <section className="contentSection">

        <figure className="figure1">
          <img src={img01} className="thumbnail"></img>
          <figcaption>Description:This is a 1920s watch</figcaption>
          <figcaption className="price">£20</figcaption>
        </figure>

        <figure className="figure2">
          <img src={img02} className="thumbnail"></img>
          <figcaption>Description:This is a 1930s watch</figcaption>
          <figcaption className="price">£20</figcaption>
        </figure>

        <figure className="figure3">
          <img src={img03} className="thumbnail"></img>
          <figcaption>Description:This is a 1940s watch</figcaption>
          <figcaption className="price">£20</figcaption>
        </figure>

    </section>
  );
}

export default Content;
