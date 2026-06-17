

document.getElementById("form").addEventListener("submit",(e)=>{

    e.preventDefault();

    const email_name = document.getElementById("email_name").value.trim();

    const password_name = document.getElementById("password_name").value.trim();


    const result = document.getElementById("result");


    if(email_name === ""){

       return result.textContent= "Email is required";
    }

    else if(!email_name.includes("@")){
      return  result.textContent = "invalid Email";
    }

    if(password_name.length < 6){

       return result.textContent = "Password must be at least 6 characters";
    }

    else if(password_name === "password"){
       return result.textContent = "Password is too weak";

    }

    alert("login Successful")

})