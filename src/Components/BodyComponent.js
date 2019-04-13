import React from 'react';
import ApiService from '../Services/ApiService';
import BlogItemList from '../Components/BlogItemListComponent';

class BodyContainer extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      blogs: []
    };

    //this.getBlogList();

  }

  blogs = [];

  componentDidMount() {
    this.bindBlogItemsToDomElement();
  }

  getBlogList() {
    console.log("calling getBlogList");
    const apiService = new ApiService();
    const url = 'https://api.github.com/repos/abhi-debuginside/blog/issues';
    //const url = 'https://api.github.com/repos/abhi-debuginside/abhi-debuginside.github.io/issues';

    var result = apiService.getData(url);

    result.then((data) => {
      let position = 1;
      let count = 1;
      let items = [];
      console.log("data.length : " + data.length);
      for (let i = 0; i < data.length; i++) {
        position = i + 1;
        if (count <= 3) {
          console.log(" blog.title : " + data[i].title);
          //console.log("count : " + count);

          let info = data[i].body.substring(0, 150);
          let createdOn = new Date(data[i].created_at);

          if (data[i].milestone) {
            if (data[i].milestone.description) {
              info = data[i].milestone.description;
            }

            if (data[i].milestone.due_on) {
              createdOn = new Date(data[i].milestone.due_on);
            }
          }

          items.push({ position: position, title: data[i].title, body: data[i].body, info: info, createdOn: createdOn });
          console.log("items for count - " + count);
          console.log(items);
          count++;
        }

        if (count > 3) {
          console.log("reset for count called" + count);

          //reset
          count = 1;

          // pushing to blog array
          this.blogs.push({ items: items });
          console.log("Pushed to blogs on reset section at index : " + i);
          console.log(this.blogs);
          items = [];
        }

        console.log("index : " + i);
        if (position == data.length && items.length > 0) {
          this.blogs.push({ items: items });
          console.log("Pushed to blogs at index : " + i);
        }
      }
      console.log("this.blogs : ");
      console.log(this.blogs);
      sessionStorage.setItem("blogs", JSON.stringify(this.blogs));
      this.setState({ blogs: this.blogs });

    });
  }

  bindBlogItemsToDomElement() {
    var _blogs = sessionStorage.getItem("blogs");
    if (_blogs) {
      //   console.log("_blogs :" + _blogs);
      this.blogs = JSON.parse(_blogs);
      this.setState({ blogs: this.blogs });
    }
    else {
      this.getBlogList();
      // this.blogs = [
      //   {
      //     items: [
      //       {
      //         position: 1,
      //         title: 'Test Blog 1',
      //         body: 'Lorem ipsum dolor sit amet conse ctetur, adipi sicing elit. Nisi sapiente hic fugiat delectus dicta delectus dicta.',
      //         info: 'Test blog 1 Lorem ipsum dolor sit amet conse ctetur, adipi sicing elit. Nisi sapiente hic fugiat delectus dicta delectus dicta.'
      //       },
      //       {
      //         position: 2,
      //         title: 'Test Blog 2',
      //         body: 'Lorem ipsum dolor sit amet conse ctetur, adipi sicing elit. Nisi sapiente hic fugiat delectus dicta delectus dicta.',
      //         info: 'Test blog 1 Lorem ipsum dolor sit amet conse ctetur, adipi sicing elit. Nisi sapiente hic fugiat delectus dicta delectus dicta.'
      //       },
      //       {
      //         position: 3,
      //         title: 'Test Blog 3',
      //         body: 'Lorem ipsum dolor sit amet conse ctetur, adipi sicing elit. Nisi sapiente hic fugiat delectus dicta delectus dicta.',
      //         info: 'Test blog 1 Lorem ipsum dolor sit amet conse ctetur, adipi sicing elit. Nisi sapiente hic fugiat delectus dicta delectus dicta.'
      //       }
      //     ]
      //   },
      //   {
      //     items: [
      //       {
      //         position: 4,
      //         title: 'Test Blog 4',
      //         body: 'Lorem ipsum dolor sit amet conse ctetur, adipi sicing elit. Nisi sapiente hic fugiat delectus dicta delectus dicta.',
      //         info: 'Test blog 1 Lorem ipsum dolor sit amet conse ctetur, adipi sicing elit. Nisi sapiente hic fugiat delectus dicta delectus dicta.'
      //       },
      //       {
      //         position: 5,
      //         title: 'Test Blog 5',
      //         body: 'Lorem ipsum dolor sit amet conse ctetur, adipi sicing elit. Nisi sapiente hic fugiat delectus dicta delectus dicta.',
      //         info: 'Test blog 1 Lorem ipsum dolor sit amet conse ctetur, adipi sicing elit. Nisi sapiente hic fugiat delectus dicta delectus dicta.'
      //       }
      //     ]
      //   }
      // ];

      // this.setState({ blogs: this.blogs });
    }
  }

  showInGroup() {
    var length = this.state.blogs.length;
    console.log("1length : " + length);
    const colmBlogs = [];
    let i = 0;
    let rowNumber = 1;

    this.state.blogs.map((blog) => {
      return (
        blog.items.map((item) => {
          console.log(item.title);
        })
      )
    });

  }

  render() {
    return (
      <BlogItemList blogs={this.state.blogs} />
    )

  }
}

export default BodyContainer;