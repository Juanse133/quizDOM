visibleTable = false;
visibleColor = false;
document.addEventListener("keydown", (keyPressed) => {
    if (keyPressed.key == "t") {
        if (visibleTable == false) {
            tabla = document.createElement("table");
            document
                .getElementById("container")
                .insertBefore(
                    tabla,
                    document.getElementById("table").nextSibling
                );

            for (let i = 0; i < 6; i++) {
                const tr = tabla.insertRow();
                for (let j = 0; j < 6; j++) {
                    const td = tr.insertCell();
                    td.textContent = i + ", " + j;
                    td.style.border = "1px solid";
                }
            }
            tabla.style.border = "1px solid";
            colorRojo = document.createElement("p");
            document
                .getElementById("container")
                .insertBefore(
                    colorRojo,
                    document.getElementById("table").nextSibling
                );
            colorRojo.textContent =
                "Presione la tecla 'r' para pintar los elementos del medio de rojo";

            visibleTable = true;
        } else {
            visibleTable = false;
            visibleColor = false;
            tabla.remove();
            colorRojo.remove();
        }
    }

    if (keyPressed.key == "r") {
        if (visibleColor == false) {
            document.getElementsByTagName(
                "table"
            )[0].rows[2].cells[2].style.background = "red";
            document.getElementsByTagName(
                "table"
            )[0].rows[2].cells[3].style.background = "red";
            document.getElementsByTagName(
                "table"
            )[0].rows[3].cells[2].style.background = "red";
            document.getElementsByTagName(
                "table"
            )[0].rows[3].cells[3].style.background = "red";
            visibleColor = true;
        } else {
            visibleColor = false;
            document.getElementsByTagName(
                "table"
            )[0].rows[2].cells[2].style.background = "";
            document.getElementsByTagName(
                "table"
            )[0].rows[2].cells[3].style.background = "";
            document.getElementsByTagName(
                "table"
            )[0].rows[3].cells[2].style.background = "";
            document.getElementsByTagName(
                "table"
            )[0].rows[3].cells[3].style.background = "";
        }
    }
});
