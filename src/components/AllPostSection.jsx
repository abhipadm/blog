import React from "react";
import { PropTypes } from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@material-ui/lab";

import { Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const AllPostSection = (props) => {
  const { allPosts } = props;
  const classes = useStyles();
  return (
    <Timeline align="alternate">
      {allPosts.map((post) => (
        <TimelineItem key={post.id}>
          <TimelineOppositeContent>
            <Typography variant="body2">{post.createdOn}</Typography>
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot color="primary"></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                {post.title}
              </Typography>
              <Typography>{post.shortDescription}</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default AllPostSection;

AllPostSection.propTypes = {
  allPosts: PropTypes.array.isRequired,
};
