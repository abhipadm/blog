import React from 'react';
import BlogItem from '../Components/BlogItemComponent';

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


  return (

    <div class="container">

      {/* header of section */}
      <div class="blog-head text-center">
        <h2>Debug Inside</h2>
        <h6>Simplicity is the most complicated thing until we learn how to break down the complexity.....</h6>
      </div>

      {/*<!-- blog items */}
      {blogsList}

    </div>

  );
}

export default BlogItemListComponent