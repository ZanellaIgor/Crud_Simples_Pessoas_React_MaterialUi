# CRUD de Pessoas com React + Vite

Projeto desenvolvido para fins de estudo sem utilizar o TypeScript, foi um dos primeiros "projetos" feito para aprender sobre o framework ReactJs, inicialmente foi feito com o Create-React-App, como não é mais recomendado resolvi mudar para o Vite.

O sistema, cria, edita e lista pessoas(paginada) pessoas, fazendo validação de campos obigatórios como nome, e cep. Também faz consulta do Cep da pessoa, na api do via cep.

A gravação e consulta e gerenciado pelo JSON-Server, que simula uma API real, gravando no arquivo db.json

### Tecnologias/Libs Utilizadas

-ReactJs: Framework JavaScript para desenvolvimento de interfaces de usuário. [https://reactjs.org/]
-Vite: Ferramenta de desenvolvimento web de alta performance para React. [https://vitejs.dev/]
-Material UI: Biblioteca de componentes de interface de usuário para React. [https://mui.com/]
-Yup: Biblioteca para validação de dados. [https://www.npmjs.com/package/yup]
-React Hook Form: Biblioteca para criação de formulários com hooks. [https://react-hook-form.com/]
-React Router DOM: Biblioteca para roteamento em React. [https://reactrouter.com/]
-JSON Server: Servidor mock para desenvolvimento. [https://www.npmjs.com/package/json-server]
-Via Cep: API para consulta de CEPs. [https://viacep.com.br/]

### Requisitos

-Node.js: Versão 14 ou superior. https://nodejs.org/
-npm ou yarn: Gerenciador de pacotes.

## Primeiros Passos

1. **Instale as Dependências**: Execute `npm install` ou `yarn` para instalar todas as dependências necessárias.

2. **Construa o Projeto**: Use `npm run build` ou `yarn build` para compilar o projeto.

3. **Roda JSON Server**: Use `json-server --watch db.json` para rodar na porta 3000 o json server.

4. **Inicie o Projeto em Desenvolvimento**: Execute `npm run dev` ou `yarn dev` para iniciar o projeto em desenvolvimento, por padrão na porta 5173.

## Documentação:

JSON SERVER - [https://www.npmjs.com/package/json-server]
JSON SERVER - [https://github.com/typicode/json-server/tree/v0]
Via Cep - [https://viacep.com.br/]

## Projeto Finalizado/Descontinuado pelos motivos:

-Objetivo alcançado que era migrar de CRA para Vite.
-Sem TypeScript não tem o porque fazer um projeto.
