const container = document.querySelector('.container-timer');
let p = document.createElement('p');
const arr = [0, 0, 0]
let [dataHora, dataMinuto, dataSegundo] = arr;
let data = new Date();
p.innerHTML = `0${dataHora}:0${dataMinuto}:0${dataSegundo}`

let timer = 0;
function btnCmc(){
  clearInterval(timer);
  setTimeout(function(){
    p.setAttribute('class', 'normal')
  }, 1 )
  timer = setInterval(function(){
    dataSegundo++
    
    if (dataSegundo >= 59){
      dataMinuto++
      dataSegundo = 0;
    }
    if (dataMinuto >= 59){
      dataHora++
      dataMinuto = 0;
    }

    if (dataSegundo < 10 && dataMinuto < 10 && dataHora < 10){
      p.innerHTML = `0${dataHora}:0${dataMinuto}:0${dataSegundo}`
    } else  if (dataMinuto < 10 && dataHora < 10) {
      p.innerHTML = (`0${dataHora}:0${dataMinuto}:${dataSegundo}`)
    } else  if (dataHora < 10) {
      p.innerHTML = (`0${dataHora}:${dataMinuto}:${dataSegundo}`)
    } 
  }, 1000)
}

let trueFalse = 1
function pausar(){
  trueFalse++

  if (trueFalse % 2 === 0) { //false
    p.setAttribute('class', 'red') 
    clearInterval(timer)
  }
  if (trueFalse % 2 !== 0) { //true
    p.setAttribute('class', 'normal')
    btnCmc();
  }
}

function zerar() {
  dataHora = 0;
  dataMinuto = 0;
  dataSegundo = 0;
  p.innerHTML = `0${dataHora}:0${dataMinuto}:0${dataSegundo}`;
  clearInterval(timer)
}

function mostraHora() {
  return data.toLocaleTimeString('pt-BR', { hour12: false })
}

container.appendChild(p);
