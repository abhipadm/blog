import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  brandNameWord1: {
    color: theme.palette.secondary.main,
  },
  brandNameWord2: {
    color: theme.palette.common.white,
  },
  toolbar: {
    minHeight: 80,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    fontWeight: 200,
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.brandNameWord1}>
          Debug &nbsp;
        </Typography>
        <Typography variant="h5" className={classes.brandNameWord2}>
          Inside
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};
