const express = require('express');
const cartao = require('./cartao');

const app = express.Router();

const URL_NAME = ("/cartoes");
const TABLE_NAME = ("tb_cartao");

app.get(URL_NAME, async (req, res) => {
    let dados = await database.execute(`SELECT * FROM ${TABLE_NAME}`);

    res.send(dados);
});

app.get(`${URL_NAME}/:id,`, async (req, res) => {
    let dados = await database.execute(`
        SELECT * FROM tb_cartao WHERE id='${req.params.id}'
    `);

    res.send(dados[0]);
});

app.post(URL_NAME, async (req, res) => {
    let dados = req.body;

    let sql = await database.execute(`
        INSERT INTO tb_cartao (id, titular, numero_do_cartao, validade, cvv) VALUES ('${req.body.id}', '${req.body.titular}', '${req.body.numero_do_cartao}', '${req.body.validade}', '${req.body.cvv}');
    `);

    dados.id = sql.insertId;
    
    res.send(dados);
});





app.delete(`${URL_NAME}/:id`, async (req, res) => {
    await database.execute(`DELETE FROM tb_cartao WHERE id='${req.params.id}'`)

    res.sendStatus(204);
});

module.exports = app;