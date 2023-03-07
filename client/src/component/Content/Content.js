import React from "react"
import "./content.css"
import img01 from "../image/watch01.jpg"
import img02 from "../image/watch02.jpg"
import img03 from "../image/watch03.jpg"

function Content(){

    return(
        <section>
            <div className="box">
        
        <article className=" title">
        <img src={img01} alt="normal-watch" style={{width:'200px' }}></img>
       
        <p>Description:This is a 1920s watch</p>
        <p className="price-box">£20</p>
        </article>
        

        <article className="title2 title">
        <img src={img02} alt="normal-watch" style={{width:'200px',height:'300px'}}></img>
        <p>Description:This is a 1930s watch</p>
        <p className="price-box">£20</p>
        </article>

        <article className="title3 title">
        <img src={img03} alt="normal-watch" style={{width:'200px'}}></img>
        <p>Description:This is a 1940s watch</p>
        <p className="price-box">£20</p>
        </article>

        </div>
        </section>
    )
}


export default Content