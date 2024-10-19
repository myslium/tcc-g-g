CREATE TABLE TB_ADMIN (
  ID_ADMIN INT PRIMARY KEY auto_increment,
  DS_USUARIO VARCHAR(200),
  DS_SENHA VARCHAR(200)
);


-- cadastro
CREATE TABLE formularios(
    id INT PRIMARY KEY AUTO_INCREMENT,
    cpf varchar(11) NOT NULL UNIQUE,
    vaga varchar(100) NOT NULL,
    email varchar(200) NOT NULL UNIQUE,
    curriculo blob NOT NULL,
    data_inscricao DATETIME
);



CREATE TABLE vagas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome_empresa VARCHAR(100) NOT NULL,
    contato_empresa VARCHAR(100) NOT NULL,
    cnpj VARCHAR(20) NOT NULL,
    cargo VARCHAR(100) NOT NULL,
    tipo_contrato VARCHAR(50) NOT NULL,
    localizacao VARCHAR(100) NOT NULL,
    modelo_trabalho VARCHAR(50) NOT NULL,
    salario DECIMAL(10, 2) NOT NULL,
    beneficios TEXT,
    requisicoes TEXT,
    descricao TEXT,
    data_criacao datetime,
    data_vencimento datetime,
    qtd_vagas int

);



CREATE TABLE conteudos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255) NOT NULL,
    corpo TEXT,
    data_publicacao datetime
);



CREATE TABLE candidato_confirmado (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_formulario int,
    nome VARCHAR(100) NOT NULL,
    status VARCHAR(100) NOT NULL,
    FOREIGN KEY (id_formulario) REFERENCES formularios(id)
);



CREATE TABLE candidato (
    id_candidato INT PRIMARY KEY AUTO_INCREMENT,
    id_vaga INT,
    FOREIGN KEY (id_vaga) REFERENCES vagas(id)
);

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
