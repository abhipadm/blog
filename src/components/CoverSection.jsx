import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  coverPaper: {
    position: "relative",
    backgroundImage: `url('https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=350&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1080')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    marginBottom: theme.spacing(4),
    height: 450,
    overflow: "hidden",
  },
  coverImage: {
    display: "none",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    width: 1,
    height: "350px",
  },
}));

const CoverSection = () => {
  const classes = useStyles();

  return (
    <Paper elevation={3} xs={12} className={classes.coverPaper}>
      <img
        className={classes.coverImage}
        src="https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=350&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1080"
        alt="test"
      />
    </Paper>
  );
};

export default CoverSection;
