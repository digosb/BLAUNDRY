const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));


//Banco de Dados 



//<%- include parciais/footer.ejs %>

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

app.post("/formPerfil", (req, res) => {
    res.redirect("../view/perfil");
})

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