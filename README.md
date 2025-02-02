# User Management API

[![Build Status](https://img.shields.io/github/actions/workflow/status/seu-usuario/user-management-api/node.js.yml?branch=main)](https://github.com/seu-usuario/user-management-api/actions)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=seu-usuario_user-management-api&metric=coverage)](https://sonarcloud.io/summary/new_code?id=seu-usuario_user-management-api)
[![Quality Gate](https://sonarcloud.io/api/project_badges/measure?project=seu-usuario_user-management-api&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=seu-usuario_user-management-api)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

API completa para gestão de usuários com autenticação JWT, desenvolvida em Node.js + Express. Inclui:

- ✅ CRUD completo de usuários
- 🔑 Autenticação com JWT e bcrypt
- 🧪 Testes unitários e de integração com Jest
- 🔍 Análise estática de código com SonarCloud
- ⚙️ CI/CD com GitHub Actions

---

## 🚀 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/user-management-api.git
   cd user-management-api
   npm run start:dev

2. Instale as dependências:
   
    ```bash
    npm run dev

A API estará disponível em http://localhost:3000/api

Variáveis de Ambiente (.env):
   ```bash
   PORT=3000
   JWT_SECRET=seu_secreto_aqui
   DB_CONNECTION=mongodb://localhost:27017/userdb
   NODE_ENV=development



.
├── src/
│   ├── models/       # Modelos do MongoDB (User)
│   ├── controllers/  # Lógica de usuários e autenticação
│   ├── routes/       # Rotas da API
│   ├── middlewares/  # Middlewares (autenticação, validação)
│   ├── utils/        # Helpers (geração de JWT, bcrypt)
│   └── app.js        # Configuração do Express
│
├── tests/
│   ├── unit/         # Testes unitários
│   └── integration/  # Testes de integração
│
├── .github/          # GitHub Actions
└── jest.config.js    # Configuração do Jest

🤝 Contribuição
Crie uma branch para sua feature (git checkout -b feature/nova-funcionalidade)

Implemente suas mudanças

Execute e atualize os testes (npm test)

Faça commit seguindo o padrão Conventional Commits

Abra um Pull Request com descrição detalhada


📄 Licença
Distribuído sob licença MIT.

Dependências Principais:

Express

Mongoose (MongoDB)

Jest + Supertest

jsonwebtoken

bcryptjs

SonarScanner

Scripts do package.json:
{
  "dev": "nodemon src/app.js",
  "start": "node src/app.js",
  "test": "jest --silent",
  "test:watch": "jest --watch",
  "test:coverage": "jest --coverage",
  "sonar": "sonar-scanner -Dsonar.projectKey=user-management-api"
}
