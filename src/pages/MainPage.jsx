import React from "react";
import Header from "../components/shared/header";
import BlogCoverDetails from "../components/blog/BlogCoverDetails";

const blogCover = {
  title:
    "Simplicity is the most complicated thing, until we learn how to break down the complexity.....",
  description:
    "Debug Inside a private developer journal/blog, focusing on the web application developed using Microsoft technologies and other popular front-end technologies like ReactJs, Angular.",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
};

export default function MainPage() {
  return (
    <>
      <Header title="Debug Inside" />
      <BlogCoverDetails blogCover={blogCover} />
    </>
  );
}
