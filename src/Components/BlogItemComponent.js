import React from 'react';

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
          <span> {props.blog.day} <br /> {props.blog.month}</span>
        </div>

        <a href={("#" + props.blog.id)} className="info-title">
          <h4>{props.blog.cardTitle}</h4>
        </a>

        <p>{props.blog.cardInfo}</p>

        <a href={("#" + props.blog.id)} class="more"><i class="fas fa-long-arrow-alt-right"></i></a>

      </div>

    </div>

  )

  return <div class="col-md-6 col-lg-4">{blogItem}</div>
}

export default BlogItemComponent
