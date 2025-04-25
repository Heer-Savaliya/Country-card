import React from "react";
import { IoCallSharp } from "react-icons/io5";
import footerdata from "../../API/footerContact.json";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";


const Footer = () => {
  const iconMap ={
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />
}
  return (
  //  <h1>footer</h1>
  <footer className="footer-section">
  <div className="container grid grid-four-cols">
    {footerdata.map((curData, index) => {
      const { icon, title, details } = curData;
      return (
        <div className="footer-contact" key={index}>
          <div className="icon">{iconMap[icon]}</div>
          <div className="footer-contact-text">
            <p>{title}</p>
            <p>{details}</p>
          </div>
        </div>
      );
    })}
  </div>

  <div className="copyright-area">
    <div className="container">
      <div className="grid grid-two-cols">
        <div className="copyright-text">
          <p>
            Copyright &copy; 2024, All Right Reserved
            <NavLink to="https://thapatechnical.shop/" target="_blank">
              Heer_Technical
            </NavLink>
          </p>
        </div>

        <div className="footer-menu">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink
                to="/"
                target="_blank"
              >
                Social
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                target="_blank"
              >
                Source
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>
  );
};

export default Footer;
