import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../components/Header";
import CoverSection from "../components/CoverSection";

const blogCover = {
  title:
    "Simplicity is the most complicated thing, until we learn how to break down the complexity.....",
  description:
    "Debug Inside a private developer journal/blog, focusing on the web application developed using Microsoft technologies and other popular front-end technologies like ReactJs, Angular.",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function MainPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header title="Debug Inside" />
      <CoverSection />
    </div>
  );
}
