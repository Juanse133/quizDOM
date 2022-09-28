visibleColorFondo = false;
document.addEventListener("keydown", (keyPressed) => {
    if (keyPressed.key == "b") {
        if (visibleColorFondo == false) {
            visibleColorFondo = true;
            document.querySelector("body").style.background = "aquamarine";
        } else {
            visibleColorFondo = false;
            document.querySelector("body").style.background = "";
        }
    }
});
