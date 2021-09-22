const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/connection");
const cadClientes = require("./database/cadClientes");

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Banco de Dados 
connection
    .authenticate()
    .then(() => {
        console.log("conectado com sucesso");
    })
    .catch((msgError) => {
        console.log(msgError);
    });


//Rotas 
//Pagina Homne 
app.get("/", (req, res) => {
    res.render("../view/home");
});

//Pagina Sobre a Empresa
app.get("/sobreempresa", (req, res) => {
    res.render("../view/sobreempresa");
});

//Pagina Lavanderia
app.get("/lavanderia", (req, res) => {
    //  var nivelAgua = req.body.nivelAgua;
    res.render("../view/lavanderia");
});

app.post("funcLavanda", (req, res) => {
    res.redirect("../view/lavanderia");
});

//Pagina Perfil
app.get("/perfil", (req, res) => {
    res.render("../view/perfil");
});

app.get("/cadastrar", (req, res) => {
    res.render("../view/cadastrar");
});

app.post("/formCadastrar", (req, res) => {
    //receiving form date
    var nome = req.body.nome;
    var rg = req.body.rg;
    var cpf = req.body.cpf;
    var dataNasc = req.body.dataNasc;
    var endereço = req.body.endereço;
    var complemento = req.body.complemento;
    var cidade = req.body.cidade;
    var bairro = req.body.bairro;
    var uf = req.body.uf;
    var cep = req.body.cep;
    var telefone = req.body.telefone;
    var email = req.body.email;
    var senha = req.body.senha;
    var repetirSenha = req.body.repetirSenha;

    cadClientes.create({
        // cretate = insert into
        nome: nome,
        rg: rg,
        cpf: cpf,
        dataNasc: dataNasc,
        endereço: endereço,
        complemento: complemento,
        cidade: cidade,
        bairro: bairro,
        uf: uf,
        cep: cep,
        telefone: telefone,
        email: email,
        senha: senha,
        repetirSenha: repetirSenha

    }).then(() => {
        res.redirect("/")
    });

});

//Pagina Fale conosco
app.get("/contato", (req, res) => {
    res.render("../view/contato");
});

app.post("/formContato", (req, res) => {
    res.redirect("../view/contato");
});


//Mostar no prompret de comando que o Sistema está Rodando!!!
app.listen(8080, () => {
    console.log("APP RODANDO!!!");
});