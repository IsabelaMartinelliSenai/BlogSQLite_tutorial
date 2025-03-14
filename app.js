const express = require("express"); //importa lib express
const sqlite3 = require("sqlite3"); //importa lib sqlite3

const PORT = 3000; //porta TCP do servidor HTTP da aplicação

const app = express(); //instância p/ uso do express

const db = new sqlite3.Database("user.db"); //instância p/ uso do sqlite3, e usa o arquivo 'user.db
db.serialize(() => {
  //esse mátodo permite enviar comandos SQL em modo 'sequencial'
  db.run(
    "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT , password TEXT)"
  );
});

const home =
  "<a href='/sobre'>Sobre</a> <br> <a href='/login'>Login</a> <br> <a href='/cadastro'>Cadastro</a>";
const sobre = 'Você está na página "Sobre" <br> <a href="/">Home</a>';
const login = 'Você está na página "Login" <br> <a href="/">Home</a>';
const cadastro = 'Você está na página "Cadastro" <br> <a href="/">Home</a>';

/*Método expres.get necessita de dois parâmetros
Na ARROW FUNCTION, o primeiro são os dados do servidor (REQUISITION - 'req')
o segundo, são os dados que serão enviados ao cliente (RESULT - 'res)*/
app.get("/", (req, res) => {
  //rota raiz do servidor, acesse o browser com o endereço http://localhost:3000/
  res.send(home);
});

app.get("/sobre", (req, res) => {
  //rota raiz do servidor, acesse o browser com o endereço http://localhost:3000/sobre
  res.send(sobre);
});

app.get("/login", (req, res) => {
  //rota raiz do servidor, acesse o browser com o endereço http://localhost:3000/login
  res.send(login);
});

app.get("/cadastro", (req, res) => {
  res.send(cadastro);
});

//app.listen() deve ser o último comando da aplicação
app.listen(PORT, () => {
  console.log(`Servidor sendo executado na porta ${PORT}`);
});
