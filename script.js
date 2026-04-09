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


// parte da idade
function confirmarIdade() {
    // remove o desfoque do conteudo principal
    const main = document.getElementById('main-site');
    main.classList.remove('blur-active');

    // esconde o modal de idade
    const modal = document.getElementById('modal-idade');
    modal.style.display = 'none';

    // salva no navegador pra n perguntarr de novo

    localStorage.setItem('maiorDeIdade', 'true');
}

//Verifica se ja confirmou antes ao carregar a pagina
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('maiorDeIdade') === 'true') {
        const main = document.getElementById('main-site');
        const modal = document.getElementById('modal-idade');

        if(main) main.classList.remove('blur-active');
        if(modal) modal.style.display = 'none';
    }
});

function negarIdade() {
    const container = document.getElementById('container-botoes');
    const texto = document.getElementById('texto-modal');

    // Altera o texto para dar o feedback de erro
    texto.innerText = "ACESSO BLOQUEADO: Conteúdo impróprio para menores.";
    texto.style.color = "#ff4444";

    // Substitui os dois botões por apenas UM novo
    container.innerHTML = `
        <button class="botao-caos" onclick="tentarNovamente()" style="background-color: #ffd500; border-color: #ffd500; margin-top: 10px; border-radius: 10px">
            Tentar Novamente
        </button>
    `;
}

function tentarNovamente() {
    const container = document.getElementById('container-botoes');
    const texto = document.getElementById('texto-modal');

    // Restaura o texto original
    texto.innerText = "Você confirma que tem mais de 18 anos para entrar no GrimeLife?";
    texto.style.color = "var(--neon-principal)";

    // Restaura os dois botões originais
    container.innerHTML = `
        <button class="botao-caos" onclick="confirmarIdade()">Sim, tenho +18</button>
        <button class="botao-bloqueio" onclick="negarIdade()">Não, sou menor</button>
    `;
}