const hex = document.getElementById('poly');

// Adiciona um rastro de brilho dependendo da direção
setInterval(() => {
    const estilo = window.getComputedStyle(hex);
    const left = parseFloat(estilo.getPropertyValue('left'));
    
    // Se estiver subindo para a direita ou esquerda, muda o brilho
    if (left > 200 && left < 400) {
        hex.style.boxShadow = "0 0 20px #a855f7";
    } else {
        hex.style.boxShadow = "none";
    }
}, 100);

console.log("Logica invertida: O hexágono agora levanta a prancha!");