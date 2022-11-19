import { useState, useEffect } from "react";
// import techie from "../assets/images/Techie.png";
// import smartAttendance from "../assets/images/smartattendance.png";
// import stockprediction from "../assets/images/stonks.png";
// import fanmerch from "../assets/images/fanmerch.png";
// import portfolio from "../assets/images/port.JPG";
// import sort from "../assets/images/sort.JPG";
// import Embiez from "../assets/images/LezEmbies.png"
// import crumbskees from "../assets/images/crumbskees.png"
// import jigsaw from "../assets/images/jigsaw.png"
// import santa from "../assets/images/santa.png"
// import affirm from "../assets/images/affirm.png"
import bmw from "../assets/images/bmw.png"
import zapateria from "../assets/images/Zapateria.jpg"
import ferreteria from "../assets/images/ferreteria.jpg"
import libreria from "../assets/images/Productos-varios.jpg"
import shoes from "../assets/images/shoes.png"
import nft from "../assets/images/nft.png"
import travel from "../assets/images/travel.png"


const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let project = [
      {
        title: "Zapateria las 3B",
        description: [
          "Development of an online shoe store",
        
        ],
        image: zapateria,
        link: "https://zap3bbb.cl/",
        // github: "https://github.com/teshank2137/fanMerch",
      },
      {
        title: "Ferretaria Legacy",
        description: [
          "Development of an online hardware store",     
        ],
        image: ferreteria,
        link: "https://ferreterialegacy.cl/",
      },

      {
        title: "Libreria Rengo",
        description: [
          "Development of an online book store",
          
        ],
        image: libreria,
        link: "https://www.libreriarengo.cl/",
      },

      {
        title: "NFT Prototype",
        description: [
          "nft website ",
         
        ],
        image: nft,
        link: "https://www.figma.com/proto/Mys6qYbScCpre16g3cXMFf/NFT?page-id=0%3A1&node-id=12%3A106&viewport=352%2C267%2C0.13&scaling=min-zoom&starting-point-node-id=15%3A679",
      },

      {
        title: "Shoes Store",
        description: [
          "The concept is to present a clean, interactive and quite intuitive e-Commerce website."
        
        ],
        image: shoes,
        link: "https://www.figma.com/proto/IZcUSEDkWov7Q2sGY59oDA/Snickers?page-id=0%3A1&node-id=7%3A118&viewport=334%2C403%2C0.18&scaling=contain&starting-point-node-id=7%3A118",
      },
      {
        title: "Travel Store",
        description: [
          "The idea of this concept is to create a dynamic experience for the visitor, also to show potential tourist destinations.",
          
        ],
        image: travel,
        link: "https://www.figma.com/proto/gGgKqqnex4lLt6s3VRLuCS/Traveler?node-id=1%3A3&starting-point-node-id=1%3A3",
      
      },
    ];
    setProjects(project);
  }, []);

  return projects;
};

export default useProjects;
