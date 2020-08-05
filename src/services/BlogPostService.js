import getData from '../api/ApiHelper';

export default function getBlogList() {
    console.log("calling getBlogList");
    const blogs = [];
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const url = 'https://api.github.com/repos/abhi-debuginside/blog/issues?state=closed';

    var result = getData(url);

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
                    month: monthNames[createdOnDate.getMonth()],
                    year: createdOnDate.getFullYear()
                };

                let cardInfo = info.length > 90 ? info.substring(0, 90) + " ..." : info.substring(0, 90);

                items.push({
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
                blogs.push({ items: items });
                console.log("Pushed to blogs on reset section at index : " + i);
                console.log(blogs);
                items = [];
            }

            console.log("index : " + i);
            if (position === data.length && items.length > 0) {
                blogs.push({ items: items });
                console.log("Pushed to blogs at index : " + i);
            }
        }
        console.log("this.blogs : ");
        console.log(blogs);
        sessionStorage.setItem("blogs", JSON.stringify(blogs));
        //  this.setState({ blogs: blogs });
        return blogs;
    });
}