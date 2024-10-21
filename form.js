// Script para capturar a assinatura desenhada
const canvas = document.getElementById('signature-pad');
const ctx = canvas.getContext('2d');
let isDrawing = false;

// Eventos do canvas para desenhar a assinatura
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

// Funções para desenhar a assinatura
function startDrawing(e) {
    isDrawing = true;
    console.log('Início do desenho'); // Log ao iniciar o desenho
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
}

function draw(e) {
    if (!isDrawing) return;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
    console.log(`Desenhando: (${e.offsetX}, ${e.offsetY})`); // Log das coordenadas do desenho
}

function stopDrawing() {
    isDrawing = false;
    ctx.closePath();
    console.log('Fim do desenho'); // Log ao parar o desenho
}

// Limpar a assinatura
document.getElementById('clear-signature').addEventListener('click', function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log('Assinatura limpa pelo botão de limpar'); // Log ao limpar a assinatura
});

// Enviar formulário
document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Formulário enviado'); // Log ao enviar o formulário
    
    // Exibir mensagem de sucesso
    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block'; // Torna a mensagem visível
    
    // Iniciar animação de fadeOut após 3 segundos
    setTimeout(() => {
        successMessage.style.animation = 'fadeOut 1s forwards'; // Aplicar animação de fadeOut
        console.log('Mensagem de sucesso oculta'); // Log quando a mensagem oculta
    }, 3000);
    
    // Limpar o formulário
    this.reset();
    console.log('Formulário limpo'); // Log ao limpar o formulário
    
    // Limpar a assinatura
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log('Assinatura limpa após envio do formulário'); // Log ao limpar a assinatura

});

// Alternar modo claro/escuro
const toggleThemeButton = document.querySelector('.theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

toggleThemeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    sunIcon.style.display = sunIcon.style.display === 'none' ? 'block' : 'none';
    moonIcon.style.display = moonIcon.style.display === 'none' ? 'block' : 'none';
    console.log('Tema alternado'); // Log ao alternar tema
});

// Inicialização do tema
document.addEventListener('DOMContentLoaded', () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
        console.log('Tema inicializado para modo escuro'); // Log ao inicializar no modo escuro
    } else {
        console.log('Tema inicializado para modo claro'); // Log ao inicializar no modo claro
    }
});