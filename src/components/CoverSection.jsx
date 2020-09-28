import React from "react";
import { Paper, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  coverPaper: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: 450,
    overflow: "hidden",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    backgroundImage: `url('https://images.unsplash.com/photo-1510070009289-b5bc34383727?ixlib=rb-1.2.1&h=200&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')`,
  },
  phrase1: {
    padding: "6px 15px",
  },
  phrase2: {
    padding: "8px 17px",
  },
  phrase3: {
    padding: "10px 19px",
  },
}));

const CoverSection = () => {
  const classes = useStyles();

  return (
    <Paper elevation={3} xs={12} className={classes.coverPaper}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item className={classes.phrase1}>
          <Typography variant="h3">Make it work</Typography>
        </Grid>
        <Grid item className={classes.phrase2}>
          <Typography variant="h4">Make it right</Typography>
        </Grid>
        <Grid item className={classes.phrase3}>
          <Typography variant="h5">Make it fast</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CoverSection;
