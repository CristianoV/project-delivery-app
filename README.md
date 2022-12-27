<h1 align="center"> TRYBEER </H1>

<p align="center"> 
  <img src="DeliveryAPP.gif" alt="animated" />
</p>

Projeto da [Trybe](https://www.betrybe.com/ "Trybe") - Aplicação Fullstack de um App de bebidas, utilizando React.js e Node.js.

## Descrição

O objetivo desse projeto foi implementar e integrar, em grupo, o back-end e o front-end de um app de delivery para atender a uma demanda maior e expandir as vendas de uma determinada distribuidora de bebidas.

## Tecnologias
### Front-end
- React.js
- Tailwind CSS

### Back-end
- Node.js
- Sequelize
- Express
- MySQL

## Execute o projeto

Após clonar o projeto, instale as dependências, na raíz do projeto, no diretório front-end e diretório back-end:


    npm install
### No diretório back-end:
Certifique-se de que você tenha a versão 16 do`node`  instalado e uma conexão com o banco de dados MySQL na sua máquina.

Configure um arquivo `.env`  com as seguintes variáveis de ambiente:



    NODE_ENV=development
    API_PORT=3001
    MYSQL_HOST=localhost
    MYSQL_PORT=3306
    MYSQL_USER=root
    MYSQL_PASSWORD=senhaDoDB
    MYSQL_DB_NAME=delivery-app
    EVAL_ALWAYS_RESTORE_DEV_DB=true

Popule o banco de dados com o comando:

`npm run db:reset`

Inicie a aplicação com o comando:

`npm start`

### No diretório front-end:
Inicie a aplicação com o comando:

`npm run start:build`

------------

#### Boas compras!!
