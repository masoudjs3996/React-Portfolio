import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";
// import Services from "../services/Services";
// import Experience from "../Experience/Experience";
// import Portfolio from "../Portfolio/Portfolio";
// import Testimonials from "../Testimonials/Testimonials";
const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Masoud</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              className="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link
              spy={true}
              to='Services'
              smooth={true}
            >
              <li>Services</li>
            </Link>
            <Link
              spy={true}
              to='Experience'
              smooth={true}
            >
              <li>Experience</li>
            </Link>
            <Link
              spy={true}
              to='Portfolio'
              smooth={true}
            >
              <li>Portfolio</li>
            </Link>
            <Link
              spy={true}
              to='Testimonials'
              smooth={true}
            >
              <li>Testimonials</li>
            </Link>
          </ul>
        </div>
        <button className="button n-button">Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
