import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../components/Header";
import CoverSection from "../components/CoverSection";
import LatestPostsSection from "../components/LatestPostsSection";

const blogCover = {
  title:
    "Simplicity is the most complicated thing, until we learn how to break down the complexity.....",
  description:
    "Debug Inside a private developer journal/blog, focusing on the web application developed using Microsoft technologies and other popular front-end technologies like ReactJs, Angular.",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
};

const latestPosts = [
  {
    id: 1,
    title: "title1",
    img: "https://source.unsplash.com/1080x350/?technology",
    shortDescription:
      "Debug Inside a private developer journal/blog, focusing on the web application.",
  },
  {
    id: 2,
    title: "title2",
    img: "https://source.unsplash.com/1080x350/?technology",
    shortDescription:
      "Debug Inside a private developer journal/blog, focusing on the web application.Debug Inside a private developer journal/blog, focusing on the web application.Debug Inside a private developer journal/blog, focusing on the web application.",
  },
  {
    id: 3,
    title: "title3",
    img: "https://source.unsplash.com/1080x350/?technology",
    shortDescription:
      "Debug Inside a private developer journal/blog, focusing on the web application developed.",
  },
];

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
      <LatestPostsSection latestPosts={latestPosts} />
    </div>
  );
}
