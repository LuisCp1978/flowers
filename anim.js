// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Eres todo que pedia", time: 18 },
  { text: "Lo que mi alma vacía", time: 22 },
  { text: "Quería sentir", time: 24 },
  { text: "Eres lo que tanto esperaba", time: 32 },
  { text: "Lo que en sueños buscaba", time: 34 },
  { text: "Y que en ti descubrí", time: 39 },
  { text: "Tu has llegado a encender", time: 45 },
  { text: "Cada parte de mi alma", time: 48 },
  { text: "Cada espacio de mi ser", time: 52 },
  { text: "Ya no tengo corazon", time: 55 },
  { text: "Ni ojos para nadie", time: 59 },
  { text: "Solo para ti", time: 62 },
  { text: "Eres el amor de mi vida", time: 71 },
  { text: "El destino lo sabia", time: 74 },
  { text: "Y hoy te puso ante mi", time: 76 },
  { text: "Y cada vez que miro al pasado", time: 83 },
  { text: "Es que entiendo que a tu lado", time: 85 },
  { text: "Siempre pertenecí", time: 90 },
  { text: "Tu has llegado a encender", time: 96 },
  { text: "Cada parte de mi alma", time: 99 },
  { text: "Cada espacio de mi ser", time: 102 },
  { text: "Ya no tengo corazon", time: 105 },
  { text: "Ni ojos para nadie", time: 108 },
  { text: "Solo para ti", time: 114 },
  { text: "Solo para ti", time: 119 },
  { text: "Solo para ti", time: 124 },
  { text: "Solo para ti", time: 129 },
  { text: "Esto es de verdad", time: 140 },
  { text: "Lo puedo sentir", time: 146 },
  { text: "Se que mi lugar", time: 150 },
  { text: "Es junto a tiiiiiiiiiiii", time: 154 },
  { text: "Iiiiiiiiiiiiii", time: 158 },
  { text: "Uuuuuuuuuuuuuu", time: 166 },
  { text: "Oooooooooooooo", time: 172 },  
  { text: "Eres todo lo que pedía", time: 183 },
  { text: "Lo que no conocía", time: 187 },
  { text: "Y que en ti descubrí", time: 191 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);