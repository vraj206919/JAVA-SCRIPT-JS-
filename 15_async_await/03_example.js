async function getapi() {
	
    const api = await fetch("https://jsonplaceholder.typicode.com/users");
	
    const returnApi = await api.json();

	console.log(returnApi);
}

getapi();