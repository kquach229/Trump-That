import React, { useEffect, useState } from "react";
import "./TrumpNews.css";
import CardComponent from "./CardComponent";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const TrumpNews = () => {
  const [news, setNews] = useState([]);

  console.log(news);

  useEffect(() => {
    var url =
      "http://newsapi.org/v2/everything?" +
      "q=Trump&" +
      "from=2020-11-12&" +
      "sortBy=popularity&" +
      "apiKey=0949535b152f400aa2a162ecc055021a";

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
