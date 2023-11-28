<h1 align="center">Projeto Beegu SENAC</h1>

Criação do backend do Beegu - Projeto de Carona Compoartilhada.

## 🛠️ Ferramentas e Tecnologias

- Node.JS 
- ORM Sequelize
- SQL Server 2019
- IDE: VS Code


## ⚙ Funcionalidades
- Criar um cadastro de usuário.
- Lista o cadastros de todos os usuários.
- Buscar o um cadastro de usuário.
- Atualizar um cadastro de usuário.
- Deletar um cadastro de usuário.
- Retorna todos usários cadastrados.
- Retorna todos usários cadastrados.
- Cria um cadastro de carona.
- Cria uma solicitação de carona.
- Validar o cadastro de um usuário.


## 💻 Como executar o Backend

- Clone esse repositório:

  ```$ git clone https://github.com/ViniciusRaony/app-beegu-node.git projeto-beegu```

- Entre no diretório do projeto: 

  ```cd projeto-beegu```

- Instale as dependências do projeto:

  ```$ npm install```

- Execute a aplicação:
 
  ```$ node index.js```

- URL para acessar servidor local:

  ```acesse http://localhost:5000/```
  
  
## 🚉 Rotas da API

- Rota ```api/v1/cadastro``` (método ```POST```): Criar um cadastro de usuário

- Rota ```api/v1/cadastro``` (método ```GET```): Lista o cadastros de todos os usuários

- Rota ```api/v1/cadastro/id``` (método ```GET```): Buscar o um cadastro de usuário baseado no ```id```

- Rota ```api/v1/cadastro/id``` (método ```PUT```): Atualizar um cadastro de usuário baseado no ```id```

- Rota ```api/v1/cadastro/id``` (método ```DELETE```): Deletar um cadastro de usuário baseado no ```id```

- Rota ```api/v1/cadastro``` (método ```GET```): Retorna todos usários cadastrados na API

- Rota ```api/v1/cadastro``` (método ```GET```): Retorna todos usários cadastrados na API

- Rota ```/api/v1/carona/criar-carona``` (método ```POST```): Cria um cadastro de carona.

- Rota ```/api/v1/carona/pedir-carona``` (método ```POST```): Cria uma solicitação de carona.

- Rota ```api/v1/login``` (método ```POST```): Validar o cadastro de um usuário.


### Links úteis

- [Documentação Node.JS: https://nodejs.org/en/docs](https://nodejs.org/en/docs)
- [Documentação Vue3: https://sequelize.org/](https://sequelize.org)

