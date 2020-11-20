import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import whiteHouse from "../assets/whiteHouse.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__imageContainer">
        <img src={whiteHouse} alt="whitehouse" className="footer__image" />
      </div>
      <div className="footer__links">
        <Link to="/home" className="footer__link">
          Home
        </Link>
        <Link to="/trumpthinks" className="footer__link">
          TrumpThinks
        </Link>
        <Link to="/trumpnews" className="footer__link">
          TrumpNews
        </Link>
        <Link to="/donate" className="footer__link">
          Donate
        </Link>
      </div>
      <div className="footer__social">
        <a
          href="https://twitter.com/realDonaldTrump?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          target="blank"
          className="footer__socialLink"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://www.youtube.com/channel/UCAql2DyGU2un1Ei2nMYsqOA"
          target="blank"
          className="footer__socialLink"
        >
          <YouTubeIcon />
        </a>
        <a
          href="https://www.instagram.com/realdonaldtrump/?hl=en"
          target="blank"
          className="footer__socialLink"
        >
          <InstagramIcon />
        </a>
      </div>
    </div>
  );
};

export default Footer;
