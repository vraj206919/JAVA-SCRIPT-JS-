const btn = document.getElementById("btn");

btn.addEventListener("click", () => {

    btn.innerText = "text changed"

})



const form = document.getElementById("form");


form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value

    console.log("The name is  ", name);

})