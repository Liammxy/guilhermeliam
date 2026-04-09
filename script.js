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

// pega o ano atual do sistema e compara com o ano de lançamento do GrimeLife
const ANO_LANCAMENTO = 2026;
let anoAtual = new Date().getFullYear();

if (anoAtual === ANO_LANCAMENTO) {
    alert("📢 NOTÍCIA: Este jogo é um GRANDE LANÇAMENTO deste ano!");
}

// manipulação do dom (o porteiro do meu site)
function confirmarIdade(nome) {
    const main = document.getElementById('main-site');
    const modal = document.getElementById('modal-idade');

    if (main) main.classList.remove('blur-active');
    if (modal) modal.style.display = 'none';

    localStorage.setItem('maiorDeIdade', 'true');
}

// inicio da verificacao e os alertas que vao ser disparados
function iniciarVerificacao() {
    let nomeVisitante = prompt("Bem-vindo ao site! Qual é o seu nome?");
    
    // se o usuário clicar em cancelar no nome, usa esse padrão
    if (!nomeVisitante) nomeVisitante = "Visitante";

    let idadeVisitante = prompt("Olá, " + nomeVisitante + "! Qual é a sua idade para acessar o GrimeLife?");
    let idade = parseInt(idadeVisitante);

    if (idade >= 18) {
        // permissao concedida
        alert("Parabéns, " + nomeVisitante + "! Seu acesso foi liberado com sucesso.");
        confirmarIdade(nomeVisitante);
    } else {
        // permissao negada
        alert("Poxa, " + nomeVisitante + "... Você ainda não tem idade para acessar este conteúdo.");
        
        // se falhar no prompt, mostra o Modal com o Input (para atender a outra rubrica)
        const modal = document.getElementById('modal-idade');
        if (modal) modal.style.display = 'flex';
        
        const textoModal = document.getElementById('texto-modal');
        if (textoModal) textoModal.innerText = nomeVisitante + ", use o campo abaixo para verificar sua idade novamente:";
    }
}

// input de texto para saudação personalizada
function verificarIdadeInput() {
    const input = document.getElementById('input-idade');
    let idade = parseInt(input.value);

    if (idade >= 18) {
        // atende a rubrica de saudação personalizada dinâmica
        alert("Sistema validado! Usuário de " + idade + " anos detectado.");
        confirmarIdade();
    } else {
        alert("Acesso ainda negado. Você informou ter " + idade + " anos.");
    }
}

// --- DISPARO AUTOMÁTICO ---
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('maiorDeIdade') === 'true') {
        confirmarIdade();
    } else {
        iniciarVerificacao();
    }
});


// item 1 da rubrica atender as 5 variaveis 

const nomeJogo = "Grime Life";
const modoDeJogo = "Singleplayer";
const genJogo = "Indie/2D"
const platJogo = "Web Browser / PC"
const classJogo = "18 anos";

// colocando os valores nos elementos do html com DOM

document.getElementById("titulo-site").innerText = nomeJogo;
document.getElementById("info-mododejogo").innerText = modoDeJogo;
document.getElementById("info-gen").innerText = genJogo;
document.getElementById("info-plat").innerText = platJogo;
document.getElementById("info-etaria").innerText = classJogo;