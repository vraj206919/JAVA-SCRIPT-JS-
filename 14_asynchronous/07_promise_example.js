// In JavaScript, a Promise is an object that represents the eventual result of an asynchronous operation.

// In promise code will Types Verticle Automatically

let myPromise = new Promise((resolve, reject) => {
  let completed = true;

  if (completed) {
    resolve("Task completed!");
  } else {
    reject("Task failed!");
  }
});

myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
