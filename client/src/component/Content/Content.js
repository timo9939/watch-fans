import React, {useState} from "react";
import "./content.css";

import Home from "./Home";
import Catagories from "./Catagories";
import Navigation from "../Navigation";

function Content() {

  const renderPage = () => {
    switch(currentPage){
      case "Home": 
      return <Home/>
      case "Catagories": 
      return <Catagories/>
    }
  }


  const [currentPage, setCurrentPage] = useState("Home");
  
  const handlePageChange = (page) =>{ 
    setCurrentPage(page);
  }

  return (
      <div >
         <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
         {renderPage()}
      </div>
  );
}

export default Content;
