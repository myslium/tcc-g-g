# Tabela TB_ADMIN
CREATE TABLE TB_ADMIN (
  ID_ADMIN INT PRIMARY KEY AUTO_INCREMENT,
  DS_USUARIO VARCHAR(200),
  DS_SENHA VARCHAR(200)
);

# Tabela formularios
CREATE TABLE formularios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  cpf VARCHAR(11) NOT NULL UNIQUE,
  vaga VARCHAR(100) NOT NULL,
  email VARCHAR(200) NOT NULL UNIQUE,
  curriculo BLOB NOT NULL,
  data_inscricao DATETIME
);

# Tabela vagas
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
  data_criacao DATETIME,
  data_vencimento DATETIME,
  qtd_vagas INT
);

# Tabela conteudos
CREATE TABLE conteudos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(255) NOT NULL,
  corpo TEXT,
  data_publicacao DATETIME
);

# Tabela candidato_confirmado
CREATE TABLE candidato_confirmado (
  id INT PRIMARY KEY AUTO_INCREMENT,
  id_formulario INT,
  nome VARCHAR(100) NOT NULL,
  status VARCHAR(100) NOT NULL,
  FOREIGN KEY (id_formulario) REFERENCES formularios(id)
);

# Tabela candidato
CREATE TABLE candidato (
  id_candidato INT PRIMARY KEY AUTO_INCREMENT,
  id_vaga INT,
  FOREIGN KEY (id_vaga) REFERENCES vagas(id)
);

