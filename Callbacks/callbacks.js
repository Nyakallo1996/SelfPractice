/*function doSomething(callback) {
    callback();
}

function sayHi() {
    console.log("Hi!");
}

doSomething(sayHi);*/

/*function judge(grade) {
  switch (true) {
    case grade == "A":
      console.log("You got an", grade, ": amazing!");
      break;
    case grade == "B":
      console.log("You got a", grade, ": well done!");
      break;
    case grade == "C":
      console.log("You got an", grade, ": alright.");
      break;
    case grade == "D":
      console.log("You got an", grade, ": hmmm...");
      break;
    default:
      console.log("An", grade, "! What?!");
  }
}

function getGrade(score, callback) {
  let grade;
  switch (true) {
    case score >= 90:
      grade = "A";
      break;
    case score >= 80:
      console.log(score);
      grade = "B";
      break;
    case score >= 70:
      grade = "C";
      break;
    case score >= 60:
      grade = "D";
      break;
    default:
      grade = "F";
  }
  callback(grade);
}
getGrade(85, judge);*/

//Practice exercise 13.1

/*function greet(fullName) {
  console.log(`Welcome, ${fullName[0]} ${fullName[1]}`)
}

function processCall(user, callback) {
  const fullName = user.split(" ");
  callback(fullName);
}

processCall("Laurence Svekis", greet);*/

const posts = [
  {tilte: "Post one", body: "This is post one"},
  {tilte: "Post two", body: "This is post two"}
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

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}



createPost({tilte: "Post Three", body: "This is post three"}, getPosts);