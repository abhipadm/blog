import React from 'react';
import MarkdownToHtml from '../Components/MarkdownToHtmlComponent';

const BlogPostComponent = (props) => {

    const blogPost = (

        <div class="col-md-12 col-lg-12" id={props.blog.id} >

            {/* image */}
            <div class="img">
                <img src="" alt="" />
            </div>

            {/* info */}
            <div class="info">
                <p class="post-date"> {props.blog.day} {props.blog.month}, {props.blog.year}</p>

                <h3>{props.blog.title}</h3>
                <MarkdownToHtml contentText={props.blog.body} />
            </div>

        </div>

    )

    return <div class="row text-left" >{blogPost}</div>
}

export default BlogPostComponent