// Script para capturar a assinatura desenhada
const canvas = document.getElementById('signature-pad'); // Obtém o elemento canvas onde a assinatura será desenhada
const ctx = canvas.getContext('2d'); // Obtém o contexto 2D do canvas para desenhar
let isDrawing = false; // Variável para controlar se o utilizador está a desenhar

// Eventos do canvas para desenhar a assinatura
canvas.addEventListener('mousedown', startDrawing); // Inicia o desenho quando o botão do rato é pressionado
canvas.addEventListener('mousemove', draw); // Chama a função de desenhar enquanto o rato se move
canvas.addEventListener('mouseup', stopDrawing); // Para o desenho quando o botão do rato é solto
canvas.addEventListener('mouseout', stopDrawing); // Para o desenho quando o rato sai do canvas

// Funções para desenhar a assinatura
function startDrawing(e) {
    isDrawing = true; // Define que o desenho começou
    console.log('Início do desenho'); // Log ao iniciar o desenho
    ctx.beginPath(); // Inicia um novo caminho de desenho
    ctx.moveTo(e.offsetX, e.offsetY); // Move o ponto inicial do desenho para a posição do rato
}

function draw(e) {
    if (!isDrawing) return; // Se não estiver a desenhar, não faz nada
    ctx.lineTo(e.offsetX, e.offsetY); // Adiciona um ponto à linha em curso até à posição do rato
    ctx.strokeStyle = '#000'; // Define a cor da linha como preto
    ctx.lineWidth = 2; // Define a largura da linha
    ctx.stroke(); // Desenha a linha no canvas
    console.log(`Desenhando: (${e.offsetX}, ${e.offsetY})`); // Log das coordenadas do desenho
}

function stopDrawing() {
    isDrawing = false; // Define que o desenho parou
    ctx.closePath(); // Fecha o caminho de desenho
    console.log('Fim do desenho'); // Log ao parar o desenho
}

// Limpar a assinatura
document.getElementById('clear-signature').addEventListener('click', function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o conteúdo do canvas
    console.log('Assinatura limpa pelo botão de limpar'); // Log ao limpar a assinatura
});

// Enviar formulário
document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio padrão do formulário
    console.log('Formulário enviado'); // Log ao enviar o formulário
    
    // Exibir mensagem de sucesso
    const successMessage = document.getElementById('success-message'); // Obtém o elemento da mensagem de sucesso
    successMessage.style.display = 'block'; // Torna a mensagem visível
    
    // Iniciar animação de fadeOut após 3 segundos
    setTimeout(() => {
        successMessage.style.animation = 'fadeOut 1s forwards'; // Aplica animação de fadeOut à mensagem
        console.log('Mensagem de sucesso oculta'); // Log quando a mensagem oculta
    }, 3000); // Espera 3000 milissegundos (3 segundos)
    
    // Limpar o formulário
    this.reset(); // Reseta os campos do formulário
    console.log('Formulário limpo'); // Log ao limpar o formulário
    
    // Limpar a assinatura
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas
    console.log('Assinatura limpa após envio do formulário'); // Log ao limpar a assinatura

});

// Alternar modo claro/escuro
const toggleThemeButton = document.querySelector('.theme-toggle'); // Obtém o botão para alternar o tema
const sunIcon = document.getElementById('sun-icon'); // Obtém o ícone do sol
const moonIcon = document.getElementById('moon-icon'); // Obtém o ícone da lua

toggleThemeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode'); // Alterna a classe de modo escuro no body
    sunIcon.style.display = sunIcon.style.display === 'none' ? 'block' : 'none'; // Alterna a visibilidade do ícone do sol
    moonIcon.style.display = moonIcon.style.display === 'none' ? 'block' : 'none'; // Alterna a visibilidade do ícone da lua
    console.log('Tema alternado'); // Log ao alternar tema
});

// Inicialização do tema
document.addEventListener('DOMContentLoaded', () => { // Aguarda o carregamento do DOM
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) { // Verifica se o utilizador prefere tema escuro
        document.body.classList.add('dark-mode'); // Adiciona a classe de modo escuro ao body
        sunIcon.style.display = 'block'; // Exibe o ícone do sol
        moonIcon.style.display = 'none'; // Esconde o ícone da lua
        console.log('Tema inicializado para modo escuro'); // Log ao inicializar no modo escuro
    } else {
        console.log('Tema inicializado para modo claro'); // Log ao inicializar no modo claro
    }
});