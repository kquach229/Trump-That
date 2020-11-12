import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import SchoolIcon from "@material-ui/icons/School";
import BusinessIcon from "@material-ui/icons/Business";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import HowToVoteIcon from "@material-ui/icons/HowToVote";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import TvIcon from "@material-ui/icons/Tv";
import AOS from "aos";
import "./TrumpTimeline.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "0px 0px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const TrumpTimeline = () => {
  const classes = useStyles();
  AOS.init();
  return (
    <div className="trumpTimeLine">
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography className="trumpTimeLine__date" color="secondary">
              June 14, 1946
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <ChildCareIcon />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography
                data-aos="fade-right"
                variant="h6"
                component="h1"
                className="trumpTimeLine__item"
              >
                Donald j. Trump is born in New York, New York, U.S.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography className="trumpTimeLine__date" color="primary">
              1959-1964
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography
                data-aos="fade-right"
                variant="h6"
                component="h1"
                className="trumpTimeLine__item"
              >
                Trump attends New York Military Academy
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography className="trumpTimeLine__date" color="secondary">
              1964-1966
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography
                data-aos="fade-right"
                variant="h6"
                component="h1"
                className="trumpTimeLine__item"
              >
                Trump attends Fordham University in the Bronx
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography className="trumpTimeLine__date" color="primary">
              1964-1966
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography
                data-aos="fade-left"
                variant="h6"
                component="h1"
                className="trumpTimeLine__item"
              >
                Trump attends Fordham University in the Bronx
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography className="trumpTimeLine__date" color="secondary">
              1966-1968
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography
                data-aos="fade-right"
                variant="h6"
                component="h1"
                className="trumpTimeLine__item"
              >
                Trump attends University of Pennsylvania’s Wharton School of
                Finance and Commerce where he graduates
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography className="trumpTimeLine__date" color="primary">
              1971
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <BusinessIcon />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography
                data-aos="fade-left"
                variant="h6"
                component="h1"
                className="trumpTimeLine__item"
              >
                Trump takes control of his father's real-estate company
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography className="trumpTimeLine__date" color="secondary">
              1983
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <LocationCityIcon />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography
                data-aos="fade-right"
                variant="h6"
                component="h1"
                className="trumpTimeLine__item"
              >
                Trump Tower opens in Manhattan
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography className="trumpTimeLine__date" color="primary">
              2004
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <TvIcon />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography
                data-aos="fade-left"
                variant="h6"
                component="h1"
                className="trumpTimeLine__item"
              >
                The <i>Apprentice</i> television series debuts
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography className="trumpTimeLine__date" color="secondary">
              July 2016
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <ThumbUpIcon />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography
                data-aos="fade-right"
                variant="h6"
                component="h1"
                className="trumpTimeLine__item"
              >
                The Republicans officially name Trump as their presidental
                nominee
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography className="trumpTimeLine__date" color="primary">
              November 2016
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <HowToVoteIcon />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={6} className={classes.paper}>
              <Typography
                data-aos="fade-left"
                variant="h6"
                component="h1"
                className="trumpTimeLine__item"
              >
                Trump is elected president
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default TrumpTimeline;
