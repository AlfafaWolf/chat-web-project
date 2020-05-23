# Projeto Web

## Pré-requisitos

Adicionar um arquivo `.env` na raiz do projeto, com o seguinte template:

```env
DB_CONNECTION=<String de conexão do MongoDB>
```

Caso use o banco local, use `mongodb://localhost:27017/node-angular` como string de conexão.

Além disso, adicionar os `node_modules` com `npm install`.

## Usando o projeto

Para iniciar o cliente

```sh
npm run build
```

Para iniciar o servidor

```sh
npm start
```

Em caso de uso do mongoDB local, iniciar com

```sh
mongod --dbpath <path-da-raiz-do-projeto>\data\db
```
