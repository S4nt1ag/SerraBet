function jogar() {
  var horaAposta = new Date()
  horaAposta.setHours(document.getElementById('hora').value.split(':')[0])
  horaAposta.setMinutes(document.getElementById('hora').value.split(':')[1])
  var horaAula = new Date()
  horaAula.setHours(18) // Altere aqui para a hora em que o professor dará a aula
  horaAula.setMinutes(26) // Altere aqui para o minuto em que o professor dará a aula

  if (horaAposta.getTime() == horaAula.getTime()) {
    let textResultado = document.getElementById('txt-resultado')
    let cardResultado = document.getElementById('card-resultado')
    textResultado.style.color = 'green'
    textResultado.style.display = 'block'
    textResultado.style.flex = '0 0 auto'
    textResultado.style.visibility = 'visible'
    cardResultado.style.display = 'block'
    cardResultado.style.visibility = 'visible'
    cardResultado.style.display = 'flex'
    cardResultado.style.justifyContent = 'center'
    cardResultado.style.alignItems = 'center'

    textResultado.innerHTML = 'Parabéns! Você acertou a hora da aula!'
  } else {
    var diff = Math.abs(horaAposta - horaAula) / 1000
    var minutos = Math.floor(diff / 60) % 60
    var horas = Math.floor(diff / 3600) % 24
    let textResultado = document.getElementById('txt-resultado')
    let cardResultado = document.getElementById('card-resultado')
    textResultado.style.color = 'red'
    textResultado.style.display = 'block'
    textResultado.style.visibility = 'visible'
    textResultado.style.flex = '0 0 auto'
    cardResultado.style.display = 'block'
    cardResultado.style.visibility = 'visible'
    cardResultado.style.display = 'flex'
    cardResultado.style.justifyContent = 'center'
    cardResultado.style.alignItems = 'center'
    textResultado.innerHTML =
      'Você errou a hora da aula. A diferença é de ' +
      horas +
      ' hora(s) e ' +
      minutos +
      ' minuto(s).'
  }
}
