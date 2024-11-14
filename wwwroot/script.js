function gerarNumeroAleatorio() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    document.getElementById("resultado").textContent = `Numero gerado: ${numeroAleatorio}`;
}