const button = document.getElementById("btn");
const dogImage = document.getElementById("dogImage");

async function getDog() {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();

        dogImage.src = data.message;
    } catch (error) {
        alert("Unable to load dog image.");
        console.error(error);
    }
}

button.addEventListener("click", getDog);

getDog();