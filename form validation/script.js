function formValidation() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const c = document.getElementById("c");
    const cpp = document.getElementById("cpp");
    const dart = document.getElementById("dart");
    const js = document.getElementById("js");
    const error = document.getElementById("error");

    error.innerHTML = "";
    error.style.color = "red";

    if (name === "") {
        error.innerHTML += "Name is required!<br>";
        return false;
    }

    if (email === "") {
        error.innerHTML += "Email is required!<br>";
        return false;
    }

    if (phone === "") {
        error.innerHTML += "Contact number is required!<br>";
        return false;
    }

    if (c && cpp && dart && js) {
        error.innerHTML += "Select at least one skill!<br>"
        return false;
    }

    error.style.color = "green";
    error.innerHTML += "Form submitted successfully !";
    return true;
}