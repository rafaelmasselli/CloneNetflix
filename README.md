<h1 align="center"> ⚡ Projeto Netflix ⚡ </h1>

<div align="center">

![](/.github/netflix-intro-netflix.gif)

</div>

## 📝 Descrição

### Projeto clonado a plataforma de stream <strong>Netflix</strong>

## 🤖 Requisitos

- [Docker](https://docs.docker.com)
- [Node js](https://nodejs.org/en/)
- [Nest](https://nestjs.com)
- [React](https://pt-br.reactjs.org)
- [IDE](https://blog.geekhunter.com.br/ide-javascript/)

## 🧪 Tecnologias

### Esse projeto foi desenvolvido com as seguintes tecnologias

### Front-end

- [React](https://reactjs.org)
- [Bootstrap 5](https://getbootstrap.com)
- [axios](https://www.npmjs.com/package/axios)

### Back-end

- [Nest Ts](https://nestjs.com)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Jwt](https://jwt.io/introduction)
- [Prisma](https://www.prisma.io/docs/)

## 🚀 Como executar

### Clone o projeto e acesse a pasta do mesmo

```bash
$ git clone https://github.com/rafaelmasselli/CloneNetflix
cd CloneNetflix
```

## Para inciar o projeto voce precisa estar rodando o Back-end primeiro

## Iniciando o Back-end

```bash
# Entre na pasta do back-end
$ cd server
# Instale as dependências
$ npm install
```

### Conectando o banco

### Crie um arquivo chamando .env

![Criando um arquivo .env](/.github/env.png)

### Agora copie e cole o exemplo do arquivo .env.exemple

```bash
# Iniciando o banco em docker
$ docker compose up
# Criando o schema no banco
$ npx prisma migrate dev
```

### E assim ira rodar o banco do docker

![Imagem do docker rodando](/.github/DockerRodando.png)

### Agora inicie o projeto

```bash
$ npm run start:dev
```

![terminal do back-end](/.github/BackEndRodando.png)

## Iniciando o Front-end

```bash
# Entre na pasta do front-end
$ cd web
# Instale as dependências
$ npm install
# Agora incie o projeto
$ npm start
```
