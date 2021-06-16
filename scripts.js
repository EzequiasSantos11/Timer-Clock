// Declaração de variáveis que serão usadas na aplicação
var minuts = 00;
var seconds = 00;
var tens = 00;
var start = document.querySelector("#btn-start");
var appendMinuts = document.querySelector("#minuts");
var appendTens = document.querySelector("#tens");
var appendSeconds = document.querySelector("#seconds");
var stop = document.querySelector("#btn-stop");
var reset = document.querySelector("#btn-reset");
var interval;

// Botão start inicia a função principal
start.addEventListener('click', () => {
 clearInterval(interval);
 interval = setInterval(startTimer, 10);
})
// Botão stop para a função principal
stop.addEventListener('click', () => {
 clearInterval(interval);
})
// Botão reset zera todas as funções e reinicia o html do relógio
reset.addEventListener('click', () => {
 clearInterval(interval);
 tens = "00";
 seconds = "00";
 minuts = "00";
 appendTens.innerHTML = tens;
 appendSeconds.innerHTML = seconds;
 appendMinuts.innerHTML = minuts;
})
// Função principal e operadores lógicos para a contagem
function startTimer() {
 tens++;
 if (tens <= 9) {
  appendTens.innerHTML = "0" + tens;
 }
 if (tens > 9) {
  appendTens.innerHTML = tens;
 }if (tens > 99) {
  seconds++;
  appendSeconds.innerHTML = "0" + seconds;
  tens = 0;
  appendTens.innerHTML = "0" + 0;
 }if (seconds > 9) {
  appendSeconds.innerHTML = seconds;
 }if (seconds > 60) {
  minuts++;
  appendMinuts.innerHTML = "0" + minuts;
  seconds = 0;
  appendSeconds.innerHTML = "0" + 0;
 }if(minuts > 9){
  appendMinuts.innerHTML = minuts;
 }
}