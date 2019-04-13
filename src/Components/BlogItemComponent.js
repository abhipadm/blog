import React from 'react';
import MarkdownToHtml from '../Components/MarkdownToHtmlComponent';

const BlogItemComponent = (props) => {

  const blogItem = (   
   
        <div class="item" key={props.blog.position}>

          {/* image */}
          <div class="img">
            <img src="" alt="" />
          </div>

          {/* info */}
          <div class="info">

            <div class="date">
              <span> { new Date(props.blog.createdOn).getDate()} <br /> { new Date(props.blog.createdOn).getMonth()}</span>
            </div>

            <a href="">
              <h3>{ props.blog.title}</h3>
            </a>

            <p>{ props.blog.info}</p>

            <a href="#0" class="user"><i class="fas fa-user"></i>Admin</a>
            <a href="#0" class="more"><i class="fas fa-long-arrow-alt-right"></i></a>

          </div>

        </div>
    
  )

  return   <div class="col-md-6 col-lg-4" >{ blogItem }</div>
}

export default BlogItemComponent