import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../components/Header";
import CoverSection from "../components/CoverSection";
import LatestPostsSection from "../components/LatestPostsSection";
import AllPostSection from "../components/AllPostSection";
import getBlogList from "../services/BlogPostService";

getBlogList();

const blogCover = {
  title:
    "Simplicity is the most complicated thing, until we learn how to break down the complexity..... Naming things is the harderst part of the job..",
  description:
    "Debug Inside a private developer journal/blog, focusing on the web application developed using Microsoft technologies and other popular front-end technologies like ReactJs, Angular.",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
};

const latestPosts = [
  {
    createdOn: "22-07-2020",
    id: 1,
    title:
      "title1 title1 title1 title1 title1 title1 title1 title1 title1 title1 title1 title1 title1 title1 title1 ",
    img: "https://source.unsplash.com/1080x350/?technology",
    shortDescription:
      "Debug Inside a private developer journal/blog, focusing on the web application.",
  },
  {
    createdOn: "22-07-2020",
    id: 2,
    title:
      "title2 title2title2title2title2title2title2title2title2title2title2title2title2title2title2title2title2title2",
    img: "https://source.unsplash.com/1080x350/?technology",
    shortDescription:
      "Debug Inside a private developer journal/blog, focusing on the web application.Debug Inside a private developer journal/blog, focusing on the web application.Debug Inside a private developer journal/blog, focusing on the web application.",
  },
  {
    createdOn: "22-07-2020",
    id: 3,
    title:
      "title3 title3 title3 title3 title3 title3 title3 title3 title3 title3 title3 title3 title3 title3 title3 title3 title3 ",
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
      <AllPostSection allPosts={latestPosts} />
    </div>
  );
}
