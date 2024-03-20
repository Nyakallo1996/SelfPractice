/*let promise = new Promise((resolve, reject) => {
  let x = 5;
  if (x > 10) {
    resolve(x);
  } else {
    reject("too small");
  }
});

promise.then(
    value => {
        console.log("success", value);
    },
    error => {
        console.log("Error", error)
    }
);*/

//Practice exercise 13.2
/*let counter = new Promise((resolve, reject) => {
    resolve("Start counting");
})

.then(value => {
    console.log(value);
    return "One";
})
.then(value => {
    console.log(value);
    return "Two";
})
.then(value => {
    console.log(value);
    return "Three";
})
.then(value => {
    console.log(value);
})
.catch(value => {
    console.log(value);
})*/

/*let age = 100;

let promise = new Promise((Allowed, Rejected) => {
    if(age >= 28) {
        Allowed("You may enter");
    } else {
        Rejected("You are not allowed");
    }
})

promise.then((message) => {
    console.log(message);
})
.catch((message) => {
    console.log(message);
})*/

const posts = [
  { tilte: "Post one", body: "This is post one" },
  { tilte: "Post two", body: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    let outPost = " ";
    posts.forEach((post, index) => {
      outPost = outPost + `<li>${post.tilte}</li>`;
    });
    document.body.innerHTML = outPost;
  }, 3000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if(!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
}

createPost({tilte: "Post Three", body: "This is post three"}).then(getPosts);
