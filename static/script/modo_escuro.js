function alternarModoEscuro() { // Função para alternar o modo escuro
    const corpo = document.body; // Seleciona o elemento <body>
    const botao = document.querySelector('button'); // Seleciona o primeiro botão da página
    
    corpo.classList.toggle('dark-mode'); // Adiciona/remove a classe 'dark-mode' no body
    botao.classList.toggle('dark-mode'); // Adiciona/remove a classe 'dark-mode' no botão
    
    if (corpo.classList.contains('dark-mode')) { // Se o modo escuro estiver ativado
        localStorage.setItem('modoEscuro', 'ativado'); // Salva "ativado" no localStorage
    } else { // Se o modo escuro estiver desativado
        localStorage.setItem('modoEscuro', 'desativado'); // Salva "desativado" no localStorage
    }
}

window.onload = function() { // Quando a página carregar
    if (localStorage.getItem('modoEscuro') === 'ativado') { // Se o localStorage indicar modo escuro
        document.body.classList.add('dark-mode'); // Adiciona a classe 'dark-mode' ao body
        document.querySelector('button').classList.add('dark-mode'); // Adiciona a classe 'dark-mode' ao botão
    }
}
