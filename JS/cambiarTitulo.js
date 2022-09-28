document.addEventListener("keydown", () => {
    if (
        document.querySelector("body").style.background != "" &&
        document.querySelector("table") != null &&
        document.querySelector("img") != null &&
        document.getElementsByTagName("table")[0].rows[2].cells[2].style
            .background != "" &&
        document.getElementsByTagName("table")[0].rows[2].cells[3].style
            .background != "" &&
        document.getElementsByTagName("table")[0].rows[3].cells[2].style
            .background != "" &&
        document.getElementsByTagName("table")[0].rows[3].cells[3].style
            .background != ""
    ) {
        document.title = "Quiz";
    } else {
        document.title = "Prueba";
    }
});
