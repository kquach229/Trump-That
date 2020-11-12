import React from "react";
import "./Home.css";
import AOS from "aos";
import TrumpTimeline from "./TrumpTimeline";

const Home = () => {
  AOS.init();
  return (
    <div className="home">
      <br />
      <br />
      <br />
      <div className="page-header text-center">
        <img alt="trumpPic" className="trump_small img-resposive" />
        <h1>Donald J. Trump</h1>
        <small className="subtitle">
          The 45th and current President of the United States
        </small>
      </div>

      <div className="jumbotron text-center">
        <div className="grd">
          <h2 id="cout">
            "I wouldn't mind a little bow. In Japan, they bow. I love it. Only
            thing I love about Japan. "
          </h2>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="panel panel-default">
        <h1 className="home__sectionHeader">Trump Throughout the Years</h1>
        <div className="home__trumpLife">
          <div className="home__kid">
            <img
              className="home__kidImage"
              data-aos="fade-right"
              src="https://time.com/wp-content/uploads/2016/10/donald-trump-2016-election-biography-photos-01.jpg?w=560&w=560"
              alt="young trump"
            />
            <p className="home__kidCaption">
              Donald John Trump was born on June 14, 1946, in Queens, New York
              the fourth of five children of Frederick C. and Mary MacLeod
              Trump.
            </p>
          </div>

          <div className="home__teen">
            <img
              className="home__teenImage"
              data-aos="fade-right"
              src="https://c.files.bbci.co.uk/C568/production/_114963505_trump_1_pt8pn0.jpg"
              alt="adult trump"
            />
            <p className="home__teenCaption">
              An 18-year-old Donald Trump in his military school uniform,
              pictured in the New York Military Academy's 1964 yearbook
            </p>
          </div>

          <div className="home__adult">
            <p className="home__adultCaption">
              Donald Trump became a very successful businessman early on,
              purchasing real estate and and making an image for himself.
            </p>
            <img
              className="home__adultImage"
              data-aos="fade-right"
              src="https://pyxis.nymag.com/v1/imgs/f0e/085/d70ea8cea7a7db60e5e204913ee4ce955b-Trump-1989.rsquare.w700.jpg"
              alt="adult trump"
            />
          </div>

          <div className="home__president">
            <img
              className="home__presidentImage"
              data-aos="zoom-in"
              src="https://miro.medium.com/max/2560/1*Hcnv7SDO6JLzVWvHrQHWSg.jpeg"
              alt="president trump"
            />
            <p className="home__presidentCaption">
              Donald J. Trump is the 45th President of the United States. He
              believes the United States has incredible potential and will go on
              to exceed even its remarkable achievements of the past.
            </p>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <ul className="list">
          <TrumpTimeline />
        </ul>
      </div>
    </div>
  );
};

export default Home;
