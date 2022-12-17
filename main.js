let body = document.querySelector("body");
let btnColorMode = document.querySelector(".color-mode");

btnColorMode.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if(body.classList.contains("dark-mode")) {
        btnColorMode.innerText("Cambiar a Tono Claro");
    } else {
        btn
    }
})