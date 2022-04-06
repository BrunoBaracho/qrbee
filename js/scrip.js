const $html = document.querySelector("html"); //seletor do html
const $checkbox = document.querySelector("#modoescuro"); //seletor do id (#) modoescuro

//trocar o root para outras configurações
$checkbox.addEventListener("change", function () {
  $html.classList.toggle("modoescuro");

  const isDarkMode = $html.classList.contains("modoescuro");

  if (isDarkMode) {
    var img = document.getElementById("linkedin"); //seletor do id linkedin
    img.src = "./img/Linkedln.png";

    var img1 = document.getElementById("github");
    img1.src = "./img/github.png";

    var img2 = document.getElementById("discord");
    img2.src = "./img/discord.png";

    var abelha = document.getElementById("abelha");
    abelha.src = "./img/abelhabranca.png";
  } else {
    var img = document.getElementById("linkedin"); //seletor do id linkedin
    img.src = "./img/LinkedIn-Original.png";

    var img1 = document.getElementById("github");
    img1.src = "./img/Github-Original.png";

    var img2 = document.getElementById("discord");
    img2.src = "./img/Discord-Negative.png";

    var abelha = document.getElementById("abelha");
    abelha.src = "./img/abelhapreta.png";
  }
});
