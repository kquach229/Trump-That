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
}));

const CardComponent = ({ item }) => {
  const classes = useStyles();

  console.log(item.author);

  return (
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
  );
};

export default CardComponent;
