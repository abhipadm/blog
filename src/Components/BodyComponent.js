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
  monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  componentDidMount() {
    this.bindBlogItemsToDomElement();
  }

  getBlogList() {
    console.log("calling getBlogList");
    const apiService = new ApiService();
    const url = 'https://api.github.com/repos/abhi-debuginside/blog/issues?state=closed';
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
          let cardTitle = data[i].title.substring(0, 58) + " ...";
          let createdOnDate = new Date(data[i].created_at);

          if (data[i].milestone) {
            if (data[i].milestone.description) {
              info = data[i].milestone.description;
            }

            if (data[i].milestone.due_on) {
              createdOnDate = new Date(data[i].milestone.due_on);
            }
          }
          let createdOn = {
            day: createdOnDate.getDate(),
            month: this.monthNames[createdOnDate.getMonth()],
            year: createdOnDate.getFullYear()
          };

          let cardInfo = info.length > 90 ? info.substring(0, 90) + " ..." : info.substring(0, 90);

          items.push(
            {
              position: position,
              id: data[i].id,
              title: data[i].title,
              cardTitle: cardTitle,
              body: data[i].body,
              info: info,
              cardInfo: cardInfo,
              createdOnDate: createdOnDate,
              day: createdOn.day,
              month: createdOn.month,
              year: createdOn.year
            });

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
        if (position === data.length && items.length > 0) {
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
    }
  }

  render() {
    return (
      <BlogItemList blogs={this.state.blogs} />
    )

  }
}

export default BodyContainer;