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
            position="Web Interaction Lover"
            compName="I Graduated HETIC"
            timestamp="2016"
            description={[
              "I'm currently working at the web agency",
              "84.Paris",
              "as an Interactive Developer",
            ]}
          />
          <JobCard
            style={{ width: "22rem", height: "18rem" }}
            position="Creative Websites"
            compName="Making this portfolio Three.js was Really enriching experience"
            // timestamp="Aug 2020-Feb 2022"
            description={[
              "Concept & 3D Have been made with my friend Robin Poitevin",
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
