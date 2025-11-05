# 📝 CRUD Tasks API

API RESTful para gerenciamento de tarefas (To-Do List) construída com NestJS, Prisma e SQLite.

## 🚀 Tecnologias

- **NestJS** - Framework Node.js progressivo
- **Prisma** - ORM moderno para Node.js e TypeScript
- **SQLite** - Banco de dados SQL leve
- **TypeScript** - Superset JavaScript com tipagem estática
- **Docker** - Containerização da aplicação

## 📋 Pré-requisitos

### Opção 1: Execução Local
- Node.js (v18 ou superior)
- npm ou yarn

### Opção 2: Execução com Docker
- Docker
- Docker Compose

## 🔧 Instalação e Execução

### 🐳 Com Docker (Recomendado)

1. Clone o repositório:
```bash
git clone https://github.com/Massao456/CRUD-tasks
cd crud-tasks
```

2. Execute com Docker Compose:
```bash
docker-compose up -d
```

A API estará disponível em `http://localhost:3000`

3. Para parar a aplicação:
```bash
docker-compose down
```

4. Para reconstruir após mudanças:
```bash
docker-compose up -d --build
```

### 💻 Sem Docker (Desenvolvimento Local)

1. Clone o repositório:
```bash
git clone https://github.com/Massao456/CRUD-tasks
cd crud-tasks
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
# Copie o arquivo de exemplo
cp .env.example .env

# Ou crie manualmente com:
echo DATABASE_URL="file:./prisma/dev.db" > .env
```

4. Execute as migrations do banco de dados:
```bash
npx prisma migrate dev
```

5. Gere o Prisma Client:
```bash
npx prisma generate
```

6. Inicie a aplicação:
```bash
# Modo desenvolvimento
npm run start:dev

# Modo produção
npm run build
npm run start:prod
```

A API estará disponível em `http://localhost:3000`

## 📚 Endpoints da API

### Tasks

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/tasks` | Lista todas as tarefas |
| GET | `/tasks/:id` | Busca uma tarefa por ID |
| POST | `/tasks` | Cria uma nova tarefa |
| PATCH | `/tasks/:id` | Atualiza uma tarefa |
| DELETE | `/tasks/:id` | Remove uma tarefa |

### Exemplos de Requisições

#### Criar uma tarefa
```bash
POST http://localhost:3000/tasks
Content-Type: application/json

{
  "title": "Comprar frango",
  "description": "Ir ao mercado"
}
```

**Resposta:**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "title": "Comprar frango",
  "description": "Ir ao mercado",
  "done": false,
  "createdAt": "2024-11-05T17:16:50.000Z",
  "updatedAt": "2024-11-05T17:16:50.000Z"
}
```

#### Listar todas as tarefas
```bash
GET http://localhost:3000/tasks
```

**Resposta:**
```json
[
  {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "title": "Comprar frango",
    "description": "Ir ao mercado",
    "done": false,
    "createdAt": "2024-11-05T17:16:50.000Z",
    "updatedAt": "2024-11-05T17:16:50.000Z"
  }
]
```

#### Buscar tarefa por ID
```bash
GET http://localhost:3000/tasks/550e8400-e29b-41d4-a716-446655440000
```

#### Atualizar uma tarefa
```bash
PATCH http://localhost:3000/tasks/550e8400-e29b-41d4-a716-446655440000
Content-Type: application/json

{
  "title": "Comprar frango e ovos",
  "done": true
}
```

#### Deletar uma tarefa
```bash
DELETE http://localhost:3000/tasks/550e8400-e29b-41d4-a716-446655440000
```

## 🗄️ Modelo de Dados

### Task
```typescript
{
  id: string          // UUID gerado automaticamente
  title: string       // Título da tarefa
  description: string // Descrição da tarefa
  done: boolean       // Status (padrão: false)
  createdAt: DateTime // Data de criação
  updatedAt: DateTime // Data de atualização
}
```

## 🧪 Testes

```bash
# Testes unitários
npm run test

# Testes e2e
npm run test:e2e

# Cobertura de testes
npm run test:cov
```

## 📦 Scripts Disponíveis

```bash
npm run build        # Compila o projeto
npm run format       # Formata o código com Prettier
npm run lint         # Executa o linter
npm run start        # Inicia a aplicação
npm run start:dev    # Inicia em modo desenvolvimento
npm run start:prod   # Inicia em modo produção
```

## 🛠️ Prisma Studio

Para visualizar e editar os dados do banco de dados:

```bash
# Local
npx prisma studio

# Com Docker
docker-compose exec app npx prisma studio
```

Acesse `http://localhost:5555` no navegador.

## 📝 Estrutura do Projeto

```
crud-tasks/
├── prisma/
│   ├── migrations/      # Migrations do banco de dados
│   └── schema.prisma    # Schema do Prisma
├── src/
│   ├── tasks/
│   │   ├── dto/         # Data Transfer Objects
│   │   ├── entities/    # Entidades
│   │   ├── tasks.controller.ts
│   │   ├── tasks.service.ts
│   │   └── tasks.module.ts
│   ├── app.module.ts
│   └── main.ts
├── .dockerignore        # Arquivos ignorados pelo Docker
├── .env                 # Variáveis de ambiente (não versionado)
├── .env.example         # Template de variáveis de ambiente
├── .gitignore
├── docker-compose.yml   # Configuração Docker Compose
├── Dockerfile           # Imagem Docker
├── package.json
└── README.md
```

## 🐳 Comandos Docker Úteis

```bash
# Ver logs da aplicação
docker-compose logs -f app

# Acessar o container
docker-compose exec app sh

# Parar os containers
docker-compose down

# Parar e remover volumes
docker-compose down -v

# Reconstruir a imagem
docker-compose build --no-cache

# Ver status dos containers
docker-compose ps
```

## 🔧 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="file:./prisma/dev.db"
```

## 📄 Licença

Este projeto está sob a licença MIT.

