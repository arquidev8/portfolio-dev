import Marquee from "react-fast-marquee";
import JobCard from "../components/Card";
import ReactCardCarousel from "react-card-carousel";
import MarqueeContent from "../sections/marqueeContents";
import SkillText from "../sections/SkillText";
import StyledSkill from "./styles/StyledSkill";

const SkillPage = () => (
  <StyledSkill>
    <div className="skill-container">
      <SkillText />
      <div className="cards">
        <ReactCardCarousel>
          <JobCard
            position="Fullstack Developer"
            compName="Neuropublicidad"
            timestamp="2019"
            description={[
              "Work in this web agency",
              "Javascript backend and frontend web development. React, node, laravel"
            ]}
          />
          <JobCard
            style={{ width: "22rem", height: "18rem" }}
            position="Freelance"
            compName="Fiverr"
            // timestamp="Aug 2020-Feb 2022"
            description={[
              "Freelance development of websites, APIs and mobile applications. for different agencies",
              // "Organized HashCode 2021",
            ]}
          />
        </ReactCardCarousel>
      </div>
    </div>
    <div className="marquee-container">
      <Marquee gradient={false} pauseOnHover={true} >
        <MarqueeContent />
      </Marquee>
    </div>
  </StyledSkill>
);

export default SkillPage;
