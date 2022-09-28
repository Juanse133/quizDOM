// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import {
    collection,
    getDocs,
    doc,
    getDoc,
    getFirestore,
} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQprmr845TB8oNMMax-DsC7TVW5dQExzo",
    authDomain: "quiz-b844b.firebaseapp.com",
    projectId: "quiz-b844b",
    storageBucket: "quiz-b844b.appspot.com",
    messagingSenderId: "46406495935",
    appId: "1:46406495935:web:08544828dd5caa802d200a",
    measurementId: "G-YBW5J8XZ8T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const docRef = doc(db, "images", "1C6mT5cgM1PNUIWfATvO");
const docSnap = await getDoc(docRef);
let formularioVisible = false;
let imagen;
let formulario;
let boton;
document.addEventListener("keydown", (keyPressed) => {
    if (keyPressed.key == "f") {
        if (formularioVisible == false) {
            formularioVisible = true;
            formulario = document.createElement("form");
            document
                .getElementById("container")
                .insertBefore(
                    formulario,
                    document.getElementById("form").nextSibling
                );
            formulario.setAttribute("method", "POST");
            boton = document.createElement("button");
            boton.setAttribute("type", "submit");
            boton.textContent = "Mostrar imágen";
            formulario.append(boton);
            imagen = document.createElement("img");
            document
                .querySelector("button")
                .addEventListener("click", function (event) {
                    event.preventDefault();
                    if (docSnap.exists()) {
                        imagen.style.width = "400px";
                        imagen.src = docSnap.data().base64;
                        document
                            .getElementById("container")
                            .insertBefore(
                                imagen,
                                document.querySelector("form").nextSibling
                            );
                    } else {
                        console.log("No existe este documento");
                    }
                });
        } else {
            formularioVisible = false;
            imagen.remove();
            formulario.remove();
        }
    }
});
