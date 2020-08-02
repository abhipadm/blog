import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  coverPaper: {
    position: "relative",
    backgroundImage: `url('https://source.unsplash.com/1080x350/?technology')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    marginBottom: theme.spacing(4),
    height: 350,
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
        src="https://source.unsplash.com/1080x350/?technology"
        alt="test"
      />
    </Paper>
  );
};

export default CoverSection;
