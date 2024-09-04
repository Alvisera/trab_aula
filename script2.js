document.addEventListener('DOMContentLoaded', function() {
    // Adiciona a classe de animação de entrada
    document.body.classList.add('zooming-in');

    // Remove a classe de animação de entrada após o tempo da animação
    setTimeout(() => {
        document.body.classList.remove('zooming-in');
    }, 600); // O tempo deve corresponder ao tempo da animação CSS
});