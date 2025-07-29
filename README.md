# UseForma

Projeto full-stack com backend em NestJS e frontend em Next.js.

## Estrutura do Projeto

```
UseForma/
├── useforma_backend/     # API REST em NestJS
└── useforma_frontend/    # Aplicação web em Next.js
```

## Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Git

## Como Executar

### 1. Clone o repositório (se ainda não fez)

```bash
git clone <url-do-repositorio>
cd UseForma
```

### 2. Configurar Permissões (macOS/Linux)

Se você encontrar erros de permissão no macOS, execute:

```bash
# Para o frontend
cd useforma_frontend
sudo chown -R $(whoami) .
chmod -R 755 .

# Para o backend
cd ../useforma_backend
sudo chown -R $(whoami) .
chmod -R 755 .
```

### 3. Instalar Dependências

```bash
# Backend
cd useforma_backend
npm install

# Frontend
cd ../useforma_frontend
npm install
```

### 4. Iniciar o Desenvolvimento

#### Backend (NestJS)

```bash
cd useforma_backend
npm run start:dev
```

O backend estará disponível em: `http://localhost:3000`

#### Frontend (Next.js)

Em um novo terminal:

```bash
cd useforma_frontend
npm run dev
```

O frontend estará disponível em: `http://localhost:3001`

> **Nota**: O frontend está configurado para rodar na porta 3001 para evitar conflitos com o backend.

### 5. Scripts Disponíveis

#### Backend
- `npm run start:dev` - Inicia o servidor em modo desenvolvimento
- `npm run build` - Compila o projeto
- `npm run start` - Inicia o servidor em modo produção
- `npm run test` - Executa os testes

#### Frontend
- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Compila o projeto para produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

## Solução de Problemas

### Erro de Permissão no macOS

Se você encontrar o erro `EACCES: permission denied` ao tentar rodar o frontend:

```bash
cd useforma_frontend
sudo chown -R $(whoami) .
chmod -R 755 .
```

### Porta já em uso

Se a porta 3000 estiver ocupada, você pode:

1. Mudar a porta do backend:
   ```bash
   cd useforma_backend
   PORT=3001 npm run start:dev
   ```

2. Ou mudar a porta do frontend editando o `package.json`:
   ```json
   "dev": "next dev --turbopack -p 3001"
   ```

## Tecnologias Utilizadas

### Backend
- NestJS
- TypeScript
- Node.js

### Frontend
- Next.js 15.4.4
- TypeScript
- React 19.1.0
- Tailwind CSS

## Estrutura de Desenvolvimento

- **Backend**: API REST com NestJS, rodando na porta 3000
- **Frontend**: Aplicação Next.js com Turbopack, rodando na porta 3001
- **Banco de Dados**: (configurar conforme necessário)
- **Autenticação**: Sistema de login/signup implementado

## Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request 