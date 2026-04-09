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
    if (main) main.classList.remove('blur-active'); //

    // esconde o modal de idade
    const modal = document.getElementById('modal-idade');
    if (modal) modal.style.display = 'none'; //

    // salva no navegador pra n perguntarr de novo
    localStorage.setItem('maiorDeIdade', 'true'); //
}

// Verifica se ja confirmou antes ao carregar a pagina
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('maiorDeIdade') === 'true') { //
        const main = document.getElementById('main-site');
        const modal = document.getElementById('modal-idade');

        if (main) main.classList.remove('blur-active'); //
        if (modal) modal.style.display = 'none'; //
    }
});

// Nova lógica para verificar a idade digitada
function verificarIdadeInput() {
    const input = document.getElementById('input-idade');
    const texto = document.getElementById('texto-modal');
    const container = document.getElementById('container-entrada');
    
    if (!input) return;
    const idade = parseInt(input.value);

    if (isNaN(idade) || idade <= 0) {
        alert("Por favor, digite uma idade válida.");
        return;
    }

    if (idade >= 18) {
        // Se for maior, chama a função que já limpa o site
        confirmarIdade();
    } else {
        // Se for menor, bloqueia a interface
        if (texto) {
            texto.innerText = "ACESSO NEGADO: Conteúdo impróprio para menores.";
            texto.style.color = "#ff4444";
        }
        
        if (container) {
            container.innerHTML = `
                <button class="botao-caos" onclick="window.location.reload()" style="background-color: #444; margin-top: 10px; border-color: #fff;">
                    Tentar Novamente
                </button>
            `;
        }
    }
}