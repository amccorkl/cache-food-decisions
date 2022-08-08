// sign up with us
const signupFormHandler = async(event) => {
    event.preventDefault();

    console.log("hello world!");
    
    //collect data from the form
    //no id's here yet for first or last name, do we need them?
    const lastName = document.querySelector("#last-name").value.trim();
    const firstName = document.querySelector("#first-name").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();
    
    console.log(lastName, firstName, email, password);

    if (email && password) {
        //send data to the server
        const response = await fetch ("/api/users/signup", {
            method: "POST",
            body: JSON.stringify({lastName, firstName, email, password}),
            headers: { "Content-Type": "application/json" },
        });
        if(response.ok) {
            //then redirect browser to the food choices home page
            document.location.replace("/dashboard")
        } else {
            alert("Your login was unsuccessful, please try again");
        }
        console.log(response);
    }
    
};

document.querySelector(".signup-form").addEventListener("submit", signupFormHandler);