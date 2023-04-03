const express = require('express');
const cartaoRoutes = require('./resources/cartao/router')

const app = express();

app.use(express.json()); //a comunicação toda vai ser feita em json, ta ligado!?
app.use(cartaoRoutes);

app.listen(8000, () => {
    console.log('--------------');
    console.log('--- PRONTO ---')
    console.log('--------------');
});