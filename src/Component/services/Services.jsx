import "./services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Card from "../Card/Card";
import Glasess from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Masoud from "../../../src/masoud";
import { ThemeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
const Services = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <span>
          Lorem ispum is simpley dummy text of printing lorem
          <br />
          ispum is simpley dummy text of printing
        </span>
        <a href={Masoud} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <motion.div
          whileInView={{ left: "25rem" }}
          initial={{ right: "3rem" }}
          transition={transition}

          style={{ left: "30rem" }}// defalt 14rem
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, photoshop, Adobe, Adobe xd"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{left:"12rem"}}
          whileInView={{ left: "10rem" }}
           transition={transition}
          style={{ top: "8rem", left: "8rem" }} // default is {top :"12rem " left :-4rem}
        >
          <Card
            emoji={Glasess}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React,Html, Css, JavaScript, React"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          // initial={{ left: "9rem", top: "18rem" }}
          // whileInView={{ left: "0rem" }}
          // transition={transition}
            initial={{ left: "15rem",bottom:"15rem" }}
          whileInView={{ left: "25rem" }}
          transition={transition}
          style={{ bottom: "55rem", left: "33rem" }} // default is {top:"19rem" left :"12rem"}
        >
          <Card
            emoji={Humble}
            heading={"UI/Ux"}
            detail={
              "Lorem ispum is simpley dummy text of printing loremispum is simpley dummy text of printing"
            }
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
