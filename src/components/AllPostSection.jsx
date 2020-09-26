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

import { Paper, Typography, Button, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.main,
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  timelineSeparator: {
    padding: "8px 16px",
  },
  readMoreBox: {
    padding: "8px 1px",
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

          <TimelineContent color="primary">
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h5" component="h1">
                {post.title}
              </Typography>
              <Typography variant="body2" component="p">
                {post.shortDescription}
              </Typography>
              <Box color="text.primary" className={classes.readMoreBox}>
                <Button size="small" variant="contained" color="primary">
                  Read More
                </Button>
              </Box>
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
