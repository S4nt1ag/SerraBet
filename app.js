var firebaseConfig = {
  apiKey: 'AIzaSyDJtvFsSBhbrT8KHgB8ffB4Gphu7dlMshg',
  authDomain: 'serrabets.firebaseapp.com',
  databaseURL: 'https://serrabets-default-rtdb.firebaseio.com',
  projectId: 'serrabets',
  storageBucket: 'serrabets.appspot.com',
  messagingSenderId: '517651439831',
  appId: '1:517651439831:web:88eab2dc497cfbebf11092',
  measurementId: 'G-4CW5Z5E69L'
}

firebase.initializeApp(firebaseConfig)
var database = firebase.database()

function salvarAposta() {
  var nome = document.getElementById('nome').value
  var aposta = document.getElementById('aposta').value

  if (nome == '' || aposta == '') {
    alert('Valores inválidos!')
  } else {
    var newPostKey = firebase.database().ref().child('apostas').push().key

    var postData = {
      nome: nome,
      aposta: aposta
    }

    var updates = {}
    updates['/apostas/' + newPostKey] = postData

    firebase
      .database()
      .ref()
      .update(updates)
      .then(function () {
        console.log('Documento salvo com ID: ', newPostKey)
        document.getElementById('nome').value = ''
        document.getElementById('aposta').value = ''
      })
      .catch(function (error) {
        console.error('Erro ao salvar documento: ', error)
        alert('Erro ao salvar aposta!')
      })
  }
}

function listarApostas() {
  var elemento = ''
  var listaApostas = document.getElementById('tabelaApostas')

  firebase
    .database()
    .ref('/apostas')
    .on('value', function (snapshot) {
      var elementos = []
      snapshot.forEach(function (childSnapshot) {
        var childData = childSnapshot.val()
        var nome = childData.nome
        var aposta = childData.aposta
        var menuScroll = document.querySelector('.scroll-left')
        menuScroll.innerHTML = '<p>' + nome + ' Apostou!</p>'
        elementos.push(
          '<tr><td>' + nome + '</td>' + '<td>' + aposta + '</td></tr>'
        )
      })

      // Inverte a ordem da lista de apostas
      elementos.reverse()

      listaApostas.innerHTML = elementos.join('')
    })
}
window.onload = function () {
  listarApostas()
}
const { throws } = require('assert')
const { error } = require('console')
var cron = require('node-cron')
cron.schedule('0 22 * * *', function () {
  database.ref('/apostas').remove()
})

document.getElementById('form').addEventListener('submit', adicionarAposta)
firebase.database().ref('/apostas').on('child_added', listarApostas)
