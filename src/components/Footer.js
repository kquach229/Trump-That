import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__imageContainer">
        <img
          src="https://lh3.googleusercontent.com/proxy/5JTbIN3GxJ4ZXQiZd1IbiyVYJyBaEBy3vWzXxKkTkneP2GnxFVEbfrFidI-MiO-t-GlyaVK7UZZx-UN0mzVB_IDEZ6prI9pItc9IXihf6EqTTtQmAa_YueD-FF9gUfOf2Du51_DM5BQMlNcQbe0cc197TCMyJGbFHdH1o36yn-e_oN8BMdDfPw"
          alt="white__house"
          className="footer__image"
        />
      </div>
      <div className="footer__links">
        <Link to="/about" className="footer__link">
          About
        </Link>
        <Link to="/about" className="footer__link">
          Real News
        </Link>
        <Link to="/about" className="footer__link">
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
