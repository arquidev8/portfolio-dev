import { useState, useEffect } from "react";
// import techie from "../assets/images/Techie.png";
// import smartAttendance from "../assets/images/smartattendance.png";
// import stockprediction from "../assets/images/stonks.png";
// import fanmerch from "../assets/images/fanmerch.png";
import portfolio from "../assets/images/port.JPG";
// import sort from "../assets/images/sort.JPG";
import Embiez from "../assets/images/LezEmbies.png"
import crumbskees from "../assets/images/crumbskees.png"
import jigsaw from "../assets/images/jigsaw.png"
import santa from "../assets/images/santa.png"
import affirm from "../assets/images/affirm.png"
import bmw from "../assets/images/bmw.png"

const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let project = [
      {
        title: "Les Embiez",
        description: [
          "A 3 days event connecting Pernod Ricard employees all over",
          "the world and immerse them in a virtual island with multiple activities to do.",
        ],
        image: Embiez,
        link: "https://www.makemepulse.com/case-study/les-embiez-2021/",
        // github: "https://github.com/teshank2137/fanMerch",
      },
      {
        title: "The crumbskees",
        description: [
          "A Really Fun to Player game website",
          "Made at Upperquad for the San Francisco Design Week",
         
        ],
        image: crumbskees,
        link: "https://crumbskees.com/",
      },
      {
        title: "Jigsaw",
        description: [
          "An interactive website in collaboration with Google",
          "presenting 3 issues on the web: Disinformation, Toxicity and",
          "White Supremacy.",
        ],
        image: jigsaw,
        link: "https://jigsaw.google.com/the-current/white-supremacy/",
      },
      {
        title: "Santa Tracker-Snowbox",
        description: [
          "A 3D game made for Google for Christmas where you can",
          "build structure using items like ice block, trees, snowman head..",
          "with a 3D physics. You can then save your structure as a GIF showing the 3D scene in different angles.",
        ],
        image: santa,
        link: "https://santatracker.google.com/snowbox.html",
      },

      {
        title: "Affirm",
        description: [
          "Web site made for Affirm, a pay-over-time solution that lets",
          "shoppers say yes to more of the things they love",
        ],
        image: affirm,
        link: "https://upperquad.com/work/affirm/",
      },
      {
        title: "BMW MotorShow",
        description: [
          "360 WebGL immersive experience letting the user dive into.",
          "the BMW booth at the Paris Motorshow. One of my first 3D",
          "project made with the amazing 84.Paris team."
        ],
        image: bmw,
        link: "https://www.awwwards.com/sites/bmw-paris-motorshow-2016",
      
      },
    ];
    setProjects(project);
  }, []);

  return projects;
};

export default useProjects;
