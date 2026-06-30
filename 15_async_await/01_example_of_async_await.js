function greet() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Mmmm!");
    }, 2000);
  });
}

async function showGreeting() {
  console.log("Nikli Gyaaaa...");

  const message = await greet();
  console.log(message);
}

showGreeting();