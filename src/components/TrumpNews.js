import React, { useEffect, useState } from "react";
import "./TrumpNews.css";
import CardComponent from "./CardComponent";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import AOS from "aos";

const TrumpNews = (props) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [news, setNews] = useState([]);
  console.log(props);

  useEffect(() => {
    var url = `https://gnews.io/api/v4/search?q=trump&token=${API_KEY}&lang=en`;

    axios.get(url).then((res) => {
      setNews(res.data.articles);
    });
  }, []);

  AOS.init();

  return (
    <div className="trumpNews">
      <h1 className="trumpNews__sectionHeader">Trump News</h1>
      <div className="trumpNews__container" data-aos="zoom-in-up">
        {news.map((item) => (
          <CardComponent
            path={props.location.pathname}
            key={uuidv4()}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default TrumpNews;
