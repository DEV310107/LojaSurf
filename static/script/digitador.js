// Define uma constante com o texto que será exibido letra por letra
const texto = "Bem Vindo, Aloha Pump";

// Seleciona o elemento HTML com o id "titulo" e armazena na variável 'titulo'
const titulo = document.getElementById("titulo");

// Inicializa um índice para controlar a posição atual da letra
let index = 0;

// Função que escreve o texto letra por letra
function digitar() {
    // Verifica se ainda há letras para exibir
    if (index < texto.length) {
        // Adiciona a próxima letra ao conteúdo do elemento
        titulo.innerHTML += texto.charAt(index);
        
        // Avança para a próxima letra
        index++; 
        
        // Chama a função novamente após 90 milissegundos (efeito de digitação)
        setTimeout(digitar, 90); 
    }
}

// Inicia a função de digitação
digitar();
