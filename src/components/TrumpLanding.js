import React from "react";
import "./trumpLanding.css";
import { Button } from "@material-ui/core";
import Typewriter from "typewriter-effect";

const TrumpLanding = (props) => {
  return (
    <div className="trumpLanding">
      <div className="trumpLanding__typewriter">
        <Typewriter
          options={{
            strings: [
              "Sleepy Joe",
              "China",
              "Make America Great Again",
              "Fake news",
              "Learn something new every day",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>

      <Button
        onClick={() => props.history.push("/home")}
        className="landingButton"
        variant="contained"
        color="secondary"
      >
        Enter Trumpland
      </Button>
    </div>
  );
};

export default TrumpLanding;
