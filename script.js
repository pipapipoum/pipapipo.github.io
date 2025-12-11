// script.js - Funcionalidades básicas

document.addEventListener('DOMContentLoaded', function() {
    // Botões de fechar funcionam
    document.querySelectorAll('.close-btn').forEach(button => {
        button.addEventListener('click', function() {
            const windowElement = this.closest('.window');
            windowElement.style.display = 'none';
            setTimeout(() => {
                alert('Janela fechada! Recarregue a página para vê-la novamente.');
            }, 10);
        });
    });

    // Botões minimizar (simples)
    document.querySelectorAll('.min-btn').forEach(button => {
        button.addEventListener('click', function() {
            const windowContent = this.closest('.window').querySelector('.window-content');
            windowContent.style.display = windowContent.style.display === 'none' ? 'block' : 'none';
        });
    });

    // Mensagem no console (para você ver que o JS funciona)
    console.log('✨ Site carregado! Aproveite sua criação!');
    
    // Instrução no canto da tela
    const instruction = document.createElement('div');
    instruction.className = 'instruction';
    instruction.innerHTML = '💡 <strong>Dica:</strong> Clique nos botões para interagir com as janelas!';
    document.body.appendChild(instruction);
});
