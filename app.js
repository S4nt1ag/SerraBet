var firebaseConfig = {
    apiKey: "AIzaSyDJtvFsSBhbrT8KHgB8ffB4Gphu7dlMshg",
    authDomain: "serrabets.firebaseapp.com",
    databaseURL: "https://serrabets-default-rtdb.firebaseio.com",
    projectId: "serrabets",
    storageBucket: "serrabets.appspot.com",
    messagingSenderId: "517651439831",
    appId: "1:517651439831:web:88eab2dc497cfbebf11092",
    measurementId: "G-4CW5Z5E69L"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

function salvarAposta() {
    var nome = document.getElementById("nome").value;
    var aposta = document.getElementById("aposta").value;

    var newPostKey = firebase.database().ref().child('apostas').push().key;

    var postData = {
        nome: nome,
        aposta: aposta
    };

    var updates = {};
    updates['/apostas/' + newPostKey] = postData;

    firebase.database().ref().update(updates)
        .then(function () {
            console.log("Documento salvo com ID: ", newPostKey);
            alert("Aposta salva com sucesso!");
            document.getElementById("nome").value = "";
            document.getElementById("aposta").value = "";
        })
        .catch(function (error) {
            console.error("Erro ao salvar documento: ", error);
            alert("Erro ao salvar aposta!");
        });
}

function listarApostas() {
    var listaApostas = document.getElementById("listaApostas");

    listaApostas.innerHTML = "";

    firebase.database().ref('/apostas').on('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            var childData = childSnapshot.val();
            var nome = childData.nome;
            var aposta = childData.aposta;

            var li = document.createElement("li");
            var text = document.createTextNode(nome + " apostou " + aposta + ".");
            li.appendChild(text);
            listaApostas.appendChild(li);
        });
    });
}
window.onload = function () {
    listarApostas();
};