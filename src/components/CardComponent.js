import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./CardComponent.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    padding: 20,
  },
  media: {
    height: 50,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  trumpThinksCard: {
    height: 300,
    minWidth: "50vw",
    width: "50vw",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const CardComponent = ({ item, path, quote }) => {
  const classes = useStyles();

  const cardRender =
    path === "/trumpnews" ? (
      <Card className={classes.root}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={item.title}
          subheader={item.publishedAt}
        />
        <CardMedia
          className={classes.media}
          image={item.image}
          title="Paella dish"
        />
        <br />
        <div className="cardComponent__contentText">{item.content}</div>
        <br />

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {`By: ${item.source.name}`}
          </Typography>
          <hr />
          <a href={item.url} target="blank">
            Read More
          </a>
        </CardContent>
      </Card>
    ) : (
      <Card className="thinks__card" className={classes.trumpThinksCard}>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {quote}
          </Typography>
        </CardContent>
      </Card>
    );

  return <div>{cardRender}</div>;
};

export default CardComponent;
