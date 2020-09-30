# Backend do sistem E-coleta

## Aplicação Desenvolvida utilizando as tecnologias
- NodeJS;
- TypeScript;
- SqLite: Knex, migrations, seeds.

## Scripts
- Startar a API localmente: `` "dev": "ts-node-dev --ignore-watch node_modules src/server.ts" `` 
- Rodar as seeds: `` "knex:seed": "knex --knexfile knexfile.ts seed:run", ``  
- Rodar as migrations: `` "knex:migrate": "knex --knexfile knexfile.ts migrate:latest" `` 

## Para executar projeto
- Clonar o repositório;
- Executar comando $ yarn para instalar as dependências do projeto;
- Executar comando $ yarn dev para iniciar API.

## Rotas até o momento
- GET
- POST

### Criando um ponto de coleta
``POST | $ baseUrl/points``
```
{
	"name": "Mercadinho",
	"email": "contato@mercadoararas.com.br",
	"whatsapp": "988877776",
	"latitude": -46.9999,
	"longitude": -35.99898,
	"city": "Ferraz de Vasconcelos",
	"uf": "SP",
	"items": [
		1,
		2,
		6
	]
} 
```

### Listar itens cadastrados no banco
`` GET | $ baseUrl/items ``

### Listar um ponto de coleta cadastrado no banco
`` GET | $ baseUrl/points/{id} ``

### Listar um pontos de coleta filtrados
`` GET | Query Params - $ baseUrl/points?city={city}uf={uf}items={item}`` 