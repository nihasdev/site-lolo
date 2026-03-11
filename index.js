function revelar() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revelar);
function iniciarPromessa() {
  const tela = document.getElementById("promessaTela");
  tela.style.display = "flex";
  tela.innerHTML = "";

  const frases = [
    "Desde o dia em que você entrou na minha vida...",
    "Eu entendi que amar é escolher todos os dias.",
    "Escolher ficar.",
    "Escolher cuidar.",
    "Escolher construir um futuro.",
    "E hoje...",
    "Eu prometo estar ao seu lado em todos os momentos.",
    "Prometo ser seu lar.",
    "Prometo crescer com você.",
    "Prometo amar você, mesmo nos dias difíceis.",
    "Porque você é o amor da minha vida. 💍✨"
  ];

  frases.forEach((texto, index) => {
    const p = document.createElement("div");
    p.classList.add("frase");
    p.innerText = texto;
    tela.appendChild(p);

    setTimeout(() => {
      p.classList.add("aparecer");
    }, index * 2000);
  });

  setTimeout(() => {
    chuvaFinal();
  }, frases.length * 2000);
}

function chuvaFinal() {
  for(let i = 0; i < 50; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-10px";
    heart.style.fontSize = "30px";
    heart.style.animation = "subir 5s linear forwards";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }
}