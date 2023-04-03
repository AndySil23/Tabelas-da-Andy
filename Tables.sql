CREATE TABLE tb_cartao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titular VARCHAR (50) NOT NULL,
    numero_do_cartao VARCHAR (19) NOT NULL,
    validade VARCHAR (7) NOT NULL,
    cvv INT (3) NOT NULL
)

INSERT INTO tb_cartao (
    id,
    titular,
    numero_do_cartao,
    validade,
    cvv
)
VALUES (
        1,
        "Maria da Silva",
        "0000-1111-2222-3333",
        "12/2030",
        123
)