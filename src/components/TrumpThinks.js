import React, { useEffect, useState } from "react";
import "./TrumpThinks.css";
import axios from "axios";
import CardComponent from "./CardComponent";
import { Button } from "@material-ui/core";

const TrumpThinks = (props) => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=Sleepy Joe`
      )
      .then((res) => {
        setQuote(res.data.message);
      });
  }, []);

  const handleClick = () =>
    axios
      .get(
        `https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=Sleepy Joe`
      )
      .then((res) => {
        setQuote(res.data.message);
        console.log(quote);
      });

  return (
    <div className="trumpThinks">
      <h1 className="trumpThinks__sectionHeader">Trump Thinks</h1>
      <CardComponent quote={quote} path={props.location.pathname} />
      <Button
        title="Press Me"
        className="trumpThinks__quoteButton"
        variant="contained"
        color="secondary"
        onClick={handleClick}
      >
        Press Me
      </Button>
    </div>
  );
};

export default TrumpThinks;
