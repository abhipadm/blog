import React from 'react';
import BlogItem from '../Components/BlogItemComponent';
import BlogPost from '../Components/BlogPostComponent';

const BlogItemListComponent = (props) => {

  console.log("props.blogs.length " + props.blogs.length);

  const blogsList = props.blogs.map((blog) => {
    return (
      <div class="row blog-item-card">
        {

          blog.items.map((item) => {

            return (
              <BlogItem blog={item} />
            )

          })}
      </div>
    )

  });

  const blogsDetailList = props.blogs.map((blog) => {
    return (
      blog.items.map((item) => {

        return (
          <BlogPost blog={item} />
        )
      })
    )

  });


  return (

    <div class="container">

      {/* header of section */}
      <div class="blog-head text-center">
        <h2>Debug Inside</h2>
        <h6>Simplicity is the most complicated thing,<br /> until we learn how to break down the complexity.....</h6>
      </div>

      {/*<!-- blog items */}
      {blogsList}

      {/** blog content detail/body */}
      {blogsDetailList}
    </div>

  );
}

export default BlogItemListComponent