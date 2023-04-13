# SerraBet
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>SerraBet</title>
  </head>
  <body>
    <h1>SerraBet</h1>
    <p>O professor dará a aula às:</p>
    <input type="time" id="hora" name="hora">
    <br>
    <button onclick="jogar()">Jogar</button>
    <br>
    <p id="resultado"></p>

    <script>
      function jogar() {
        var horaAposta = new Date();
        horaAposta.setHours(document.getElementById("hora").value.split(":")[0]);
        horaAposta.setMinutes(document.getElementById("hora").value.split(":")[1]);
        var horaAula = new Date();
        horaAula.setHours(16); // Altere aqui para a hora em que o professor dará a aula
        horaAula.setMinutes(26); // Altere aqui para o minuto em que o professor dará a aula
        if (horaAposta.getTime() == horaAula.getTime()) {
          document.getElementById("resultado").innerHTML = "Parabéns! Você acertou a hora da aula!";
        } else {
          var diff = Math.abs(horaAposta - horaAula) / 1000;
          var minutos = Math.floor(diff / 60) % 60;
          var horas = Math.floor(diff / 3600) % 24;
          document.getElementById("resultado").innerHTML = "Você errou a hora da aula. A diferença é de " + horas + " hora(s) e " + minutos + " minuto(s).";
        }
      }
    </script>
  </body>
</html>
https://S4nt1ag.github.io/SerraBet/
