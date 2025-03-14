const express = require("express");
//importa a classe da biblioteca "express"

const PORT = 3000; //porta TCP do servidor HTTP da aplicação

const app = express();
//cria uma instância da classe da biblioteca "express"

const index = "<a href='/sobre'>Sobre</a> <a href='/info'>Info</a>";

/*Método expres.get necessita de dois parâmetros
Na ARROW FUNCTION, o primeiro são os dados do servidor (REQUISITION - 'req')
o segundo, são os dados que serão enviados ao cliente (RESULT - 'res)
*/
app.get("/", (req, res) => {
  //rota raiz do servidor, acesse o browser com o endereço http://localhost:3000/
  res.send(index);
});

app.get("/sobre", (req, res) => {
  //rota raiz do servidor, acesse o browser com o endereço http://localhost:3000/sobre
  res.send("Você está na página Sobre");
});

app.get("/info", (req, res) => {
  //rota raiz do servidor, acesse o browser com o endereço http://localhost:3000/info
  res.send("Você está na página Info");
});

//app.listen() deve ser o último comando da aplicação
app.listen(PORT, () => {
  console.log(`Servidor sendo executado na porta ${PORT}`);
});
