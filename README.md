# Video API

Este projeto é uma API simples para gerenciar informações de varios vídeos, construída com [Fastify](https://www.fastify.io/) e conectada a um banco de dados PostgreSQL. Ele permite realizar operações de CRUD (Create, Read, Update, Delete) em vídeos, com suporte para busca por título ou descrição.

##Funcionalidades

- Listar vídeos com filtro opcional de busca.
- Criar um novo vídeo.
- Atualizar as informações de um vídeo existente.
- Deletar um vídeo.

 Requisitos

- Node.js (versão 16 ou superior)
- PostgreSQL
- Dependências do projeto (instaladas via `npm` ou `yarn`)

##Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/video-management-api.git
cd video-management-api
````

2. Inicie o servidor:
```bash
npm run dev
```

O servidor será iniciado na porta 3333, ou na porta definida pela variável de ambiente PORT.

## Endpoints

Listar vídeos

```bash
GET /videos?search={term}
```

Parâmetro de consulta: search (opcional) - busca por vídeos cujo título ou descrição contenham o termo especificado.

Exemplo de uso:

```bash
GET /videos?search=Tutorial
```

Criar um vídeo

```bash
POST /videos
```


Body:
```bash
{
  "title": "Novo Vídeo",
  "description": "Descrição do vídeo",
  "duration": 120
}
```

Resposta: 201 Created quando o vídeo é criado com sucesso.

Atualizar um vídeo

```bash
PUT /videos/:id
```


Parâmetro de URL: id - ID do vídeo a ser atualizado.

Body:

```bash
{
  "title": "Título Atualizado",
  "description": "Descrição Atualizada",
  "duration": 150
}
```

Resposta: 204 No Content quando o vídeo é atualizado com sucesso.

Deletar um vídeo

```bash
DELETE /videos/delete/:id
```

Parâmetro de URL: id - ID do vídeo a ser deletado.
Resposta: 204 No Content quando o vídeo é deletado com sucesso.



