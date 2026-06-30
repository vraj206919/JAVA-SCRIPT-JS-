// await: A keyword used inside an async function to wait until a Promise is resolved.

function getMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World!");
    }, 2000);
  });
}

async function displayMessage() {
  console.log("How Are You...");
  const message = await getMessage();
  console.log(message);
}

displayMessage();