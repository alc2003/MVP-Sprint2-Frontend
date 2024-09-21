# Meu MVP - Sprint 2 - Front End

Este projeto consiste em um protótipo de um terminal de cadastro de pacientes para a triagem em um hospital.
Onde o paciente chega ao hospital, 
e caso não conste na lista de pacientes, pode ser cadastrado pela equipe de enfermagem.
Obs: Os dados vêm do backend da última sprint, para executa-lo em sua plenitude 
é necessário rodar junto o Terminal_triagem_Backend(https://github.com/alc2003/MVP-Sprint2-Backend).


## Como executar o front

**Primeiro será necessário a execução da API.** No projeto da API você encontra as intruções para a execução.

Será necessário ter o [Nodejs, ou o npm,](https://nodejs.org/en/download/) instalado. 

Após clonar o repositório, é necessário ir ao diretório raiz desse projeto pelo terminal para poder executar os comandos descritos abaixo.

```
$ npm install
```

Este comando instala as dependências/bibliotecas, descritas no arquivo `package.json`. Uma pasta chamada `node_modules` será criada.

Para executar a interface basta executar o comando: 

```
npm run dev
```

Para dar o build da imagem e construir a partir do Dockerfile, abra o terminal na pasta do seu projeto e execute o comando:

docker build -t my_nextjs_app .

e para rodar o docker após contruir a imagem, rode o container usando:

docker run -d -p 3000:3000 my_nextjs_app



Abra o [http://localhost:3000/#/](http://localhost:3000/#/) no navegador.
