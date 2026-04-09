// Função para aplicar o tema
const aplicarTema = () => {
    const lightModeAtivo = localStorage.getItem("light-mode");
    if (lightModeAtivo === "enabled") {
        document.body.classList.add("lightmode");
    } else {
        document.body.classList.remove("lightmode");
    }
};

// Executa IMEDIATAMENTE ao carregar o arquivo JS
aplicarTema();

// Configura o botão (espera o HTML carregar para achar o ID)
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("theme-switch");

    if (btn) {
        btn.addEventListener("click", () => {
            document.body.classList.toggle("lightmode");

            if (document.body.classList.contains("lightmode")) {
                localStorage.setItem("light-mode", "enabled");
            } else {
                localStorage.setItem("light-mode", "disabled");
            }
        });
    }
});