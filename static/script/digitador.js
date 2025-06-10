const texto = "Bem Vindo, Aloha Pump";
const titulo = document.getElementById("titulo");

let index = 0;

function digitar() {
    if (index < texto.length) {
        titulo.innerHTML += texto.charAt(index);
        index++; 
        setTimeout(digitar, 90); // velocidade em ms
    }
}

digitar();
