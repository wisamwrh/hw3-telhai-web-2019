function login() {
    let input = document.getElementById("username");
    if (input.value) {
        localStorage.setItem("userName", input.value);
        localStorage.setItem("ChangeUserName", false);
        console.log(input.value);
        window.location.href = 'https://google.com';
    }
    else{
        alert("You must enter a username");
    }
}