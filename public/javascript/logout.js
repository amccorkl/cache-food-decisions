const logout = async () => {
    //make a post request to destroy the session
    const response = await fetch("/api/users/logout", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
        document.location.replace("/login");
    } else {
        alert(response.statusText);
    }
};

document.querySelector("#logout").addEventListener("click", logout);