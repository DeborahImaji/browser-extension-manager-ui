function changeTheme() {
    console.log("Theme button clicked");
    let body = document.querySelector("body");
    console.log(body);

    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        // It's currently dark, switching to light
    } else {
        body.classList.add("dark");
        // It's currently light, switching to dark
    }
}

let themeButton = document.querySelector("#theme-button");
console.log(themeButton);
themeButton.addEventListener('click', changeTheme);