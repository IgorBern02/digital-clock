// Relógio Digital
const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

setInterval(() => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  hour.innerHTML = `${formatTime(hours)}`;
  min.innerHTML = `${formatTime(minutes)}`;
  sec.innerHTML = `${formatTime(seconds)}`;
}, 1000);

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

//  Dias/Mês/Ano
dayName = new Array ("domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado")
monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro")

var data = new Date();
var dayText = String(dayName[data.getDay()]).padStart(2, "0");
var day = String(data.getDate()).padStart(2, "0");
var month = String(monName[data.getMonth()]).padStart(2, "0");
var year = data.getFullYear();

document.getElementById("dayText").innerHTML = `${dayText}`
document.getElementById("date").innerHTML = `${day} de ${month} de ${year}`;
