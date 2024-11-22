const express = require('express');
const app = express();
let users = [];
let products = [];

//users
app.get('/users',(req,res) => {


});

app.post('/users',(req,res) => {
    const id = req.params.idUsuario;
    const name = req.body.nomeUsuario;
    const cpf = req.body.cpsUsuario;
    const email = req.body.emailUsuario;

    const user = users.find((id) => id === idUsuario);

    if(user){
        res.json(user);
    }

});

app.get('/users/:id',(req,res) =>{

    const user = users.find((u) => u.id === req.body.id);
    if(user){
        res.json(user);
    }else{
        res.status(404).send("Usuário não encontrado");
    }

});

app.put('/users/:id',(req,res) => {

});

app.delete('/users:/:id',(req,res) =>{
    const id = parseInt.req (req.params.id);
    const usuario = users.findIndex(user => user.id === id);
    if(usuario !== -1){
        users.delete (usuario,1);
        res.json(users);
    }else{
        res.status(404).send("Usuário não encontrado");
    }

});

//products

app.get('/products',(req,res) => {

});

app.post('/products',(req,res) => {
    const id = req.params.codigoProduto
    const name = req.body.nomeProduto;
    const price = req.body.precoProduto;

    const product = products.find((id) => id === codigoProduto);

    if(product){
        if(!product.price > 0){
            res.status(404).json("Preço deve ser maior que 0");
        }
        if(!product.id >= 0){
            res.status(404).json("Código deve ser maior que 0");
        }
        res.json(product);
        res.status(200).json("Produto cadastrado com sucesso")
    }


});

app.get('/products/:id',(req,res) => {
    const product = products.find(p =>  p.id === req.body.id);
    if(product){
        res.json(product);
    } else {
        res.status(404).json("Produto não encontrado");
    }

});

app.put('/products/:id',(req,res) => {
    
    
});

app.delete('/products/:id',(req,res) => {
    const id = parseInt.req(req.params.id);
    const produtos = products(product => product.id === id);

    if(produtos !== -1){
        products.delete(produtos,1);
        res.json(products);
        res.status(200).send("Produto removido com sucesso")
    }else{
        res.status(404).send("Produto não encontrado");
    }

});