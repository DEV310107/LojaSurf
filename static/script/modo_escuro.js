function alternarModoEscuro() {
    const corpo = document.body;
    const botao = document.querySelector('button');
    
    corpo.classList.toggle('dark-mode');
    botao.classList.toggle('dark-mode');
    
    if (corpo.classList.contains('dark-mode')) {
        localStorage.setItem('modoEscuro', 'ativado');
    } else {
        localStorage.setItem('modoEscuro', 'desativado');
    }
}

window.onload = function() {
    if (localStorage.getItem('modoEscuro') === 'ativado') {
        document.body.classList.add('dark-mode');
        document.querySelector('button').classList.add('dark-mode');
    }
}