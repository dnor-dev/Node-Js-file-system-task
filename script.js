const fs = require("fs");
const https = require("https");

https
  .get("https://jsonplaceholder.typicode.com/posts", (resp) => {
    let data = "";

    //   A chunk of data is been received
    resp.on("data", (chunk) => {
      data += chunk;
    });

    //  Whole response has been received, writing it into the posts.json file
      resp.on("end", () => {
          const posts = data;
          fs.writeFile("./posts.json", posts, () => {
            console.log('done with the posts')
        });
    });
  })
  .on("error", (err) => {
    console.log('Error : ' + err.message);
  });

