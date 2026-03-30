const botaoJogar = document.getElementById('botao-jogar');
const caixaDoJogo = document.querySelector('.caixa-jogo');

if (botaoJogar) {
    botaoJogar.addEventListener('click', () => {
        // Desliza a tela
        caixaDoJogo.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Entra em tela cheia
        if (caixaDoJogo.requestFullscreen) {
            caixaDoJogo.requestFullscreen();
        } else if (caixaDoJogo.webkitRequestFullscreen) {
            caixaDoJogo.webkitRequestFullscreen();
        }

        // ESCONDE O BOTÃO imediatamente após o clique
        botaoJogar.style.display = "none";
    });
}

// 2. DETECTAR SAÍDA DA TELA CHEIA PARA VOLTAR O BOTÃO
document.addEventListener('fullscreenchange', aoMudarTela);
document.addEventListener('webkitfullscreenchange', aoMudarTela);

function aoMudarTela() {
    const estaEmTelaCheia = document.fullscreenElement || document.webkitFullscreenElement;

    if (!estaEmTelaCheia) {
        // MOSTRA O BOTÃO de volta e reseta o texto quando sair do Fullscreen
        if (botaoJogar) {
            botaoJogar.style.display = "inline-block"; // Ou "block", dependendo do seu CSS
            botaoJogar.innerText = "JOGAR";
        }
    }
}

// PARTE DO LOGIN
function abrirLogin() {
    document.getElementById("modal-login").style.display = "block";
}

function fecharLogin() {
    console.log("Botão X clicado!")
    const modal = document.getElementById("modal-login");
    if (modal) {
        modal.style.display = "none";
    }
}

// Fechar se o usuário clicar fora da caixa
window.onclick = function(event) {
    let modal = document.getElementById("modal-login");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}