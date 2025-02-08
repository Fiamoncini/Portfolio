const textElement = document.querySelector(".typing-effect");
const textArray = ["Olá! Eu sou o Pedro! ", "Bem vindo ao meu portfólio! ", "Me contate! "];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isPaused = false;

function typeEffect() {
    const currentText = textArray[textIndex];

    if (isPaused) {
        setTimeout(() => {
            isPaused = false;
            typeEffect(); // Reinicia a animação após o tempo de pausa
        }, 1500); // Pausa de 1 segundo
        return; // Interrompe a execução até o final do delay
    }

    if (isDeleting) {
        textElement.textContent = currentText.substring(0, charIndex--);
    } else {
        textElement.textContent = currentText.substring(0, charIndex++);
    }

    let typingSpeed = isDeleting ? 80 : 105;

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        isPaused = true; // Ativa a pausa antes de apagar
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length; // Passa para a próxima frase
    }

    setTimeout(typeEffect, typingSpeed);
}

typeEffect();

function baixarcurriculo(){
    window.open("imagens/Curriculo.pdf");
}