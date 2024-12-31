// Definir a data de aniversário (15 de janeiro de 2025)
const dataAniversario = new Date("Jan 15, 2025 00:00:00").getTime();

// Atualizar a contagem regressiva a cada 1 segundo
const x = setInterval(function() {
    // Pegar a data e hora de agora
    const agora = new Date().getTime();
    
    // Calcular a diferença entre a data de aniversário e a data atual
    const distancia = dataAniversario - agora;

    // Calcular o tempo restante em dias, horas, minutos e segundos
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Exibir o resultado no elemento com id="contador"
    document.getElementById("contador").innerHTML = dias + "d " + horas + "h " + minutos + "m " + segundos + "s ";

    // Se a contagem regressiva terminar, exibir uma mensagem
    if (distancia < 0) {
        clearInterval(x);
        document.getElementById("contador").innerHTML = "O grande dia chegou! 🎉";
    }
}, 1000);

// Mostrar a mensagem de amor ao clicar no botão
document.getElementById("revelarMensagem").addEventListener("click", function() {
    const mensagem = document.getElementById("mensagem");
    mensagem.style.display = mensagem.style.display === "none" ? "block" : "none";
});
