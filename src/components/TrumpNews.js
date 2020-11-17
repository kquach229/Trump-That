import React, { useEffect, useState } from "react";
import "./TrumpNews.css";
import CardComponent from "./CardComponent";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const TrumpNews = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [news, setNews] = useState([]);

  console.log(news);

  useEffect(() => {
    var url = `https://gnews.io/api/v4/search?q=trump&token=${API_KEY}&lang=en`;

    axios
      .get(url)
      .then(async (res) => {
        setNews(res.data.articles);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="trumpNews">
      <h1 className="trumpNews__sectionHeader">Trump News</h1>
      <div className="trumpNews__container">
        {news.map((item) => (
          <CardComponent key={uuidv4()} item={item} />
        ))}
      </div>
    </div>
  );
};

export default TrumpNews;
