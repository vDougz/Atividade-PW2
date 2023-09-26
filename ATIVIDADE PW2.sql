use atv_pw2;
create table tbl_produtos (
	codigo_produto int unsigned NOT NULL AUTO_INCREMENT, 
    codigo_categoria int unsigned NOT NULL ,
    nome_produto varchar (255) NOT NULL,
    valor_produto decimal (10,2) NOT NULL,
    imagem_produto VARCHAR (500) NOT NULL,
    descricao_produto TEXT NOT NULL,
    PRIMARY KEY (codigo_produto)
);

create table tbl_categoria(
	codigo_categoria int unsigned NOT NULL AUTO_INCREMENT, 
    nome_categoria varchar (255) NOT NULL,
    observacoes_categoria TEXT NOT NULL,
    PRIMARY KEY (codigo_categoria)
);

ALTER TABLE tbl_produtos ADD CONSTRAINT fk_tbl_produtos_tbl_categoria
FOREIGN KEY (codigo_categoria)
REFERENCES tbl_categoria(codigo_categoria);
 



