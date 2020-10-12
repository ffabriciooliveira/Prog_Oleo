CREATE TABLE Usuario (
	ID_Usuario SERIAL CONSTRAINT pk_id_usuario PRIMARY KEY,
	Nome varchar (30) NOT NULL, 
	Email varchar (80) NOT NULL,
	Senha varchar (16) NOT NULL,
	Endereco varchar(120) NOT NULL,
	Telefone varchar (11) NOT NULL
);

CREATE TABLE ADM (
	ID_ADM SERIAL CONSTRAINT pk_id_adm PRIMARY KEY,
	Nome varchar(30) NOT NULL, 
	Senha varchar(16) NOT NULL,
	CNPJ varchar(14) UNIQUE,
	CPF varchar(11) UNIQUE
);

CREATE TABLE Estabelecimento (
	ID_Estabelecimento SERIAL CONSTRAINT pk_id_estabelecimento PRIMARY KEY,
	Nome varchar(30) NOT NULL, 
	Categoria varchar(20) NOT NULL,
	Senha varchar(16) NOT NULL,
	Endereco varchar(120) NOT NULL,
	CNPJ varchar(14) UNIQUE,
	Telefone varchar(11) NOT NULL
);