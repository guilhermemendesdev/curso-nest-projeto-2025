# Curso NestJS - Projeto 2025

Este repositório faz parte de um compromisso pessoal de realizar commits diários no GitHub ao longo do ano de 2025. O objetivo inicial é documentar e consolidar conhecimentos adquiridos em um curso de NestJS, registrando cada etapa do aprendizado e evolução do projeto.

## Objetivos do Projeto
- Praticar e consolidar conceitos do NestJS.
- Manter um histórico de aprendizado com registros diários.
- Estimular consistência e disciplina na prática de desenvolvimento.

## Histórico de Atividades

### 01/01/2025
- Criação do repositório no GitHub.
- Instalação das dependências globais.
- Instalação do NestJS CLI.
- Criação do primeiro projeto com conceitos básicos do NestJS.

### 02/01/2025
- Entendendo os conceitos básicos do arquivo Main.
- Entendendo os modulos e criação destes de forma manual e pelo CLI.
- Entendendo o básico sobre protocolo HTTP, URLs, recursos e métodos de solicitação (GET)

### 03/01/2025
- Utilização da extensão Rest Client do VS Code
- Criando o primeiro Controller - Manualmente ou com NestJS CLI
- Service / Provider - entendendo o básico da injeção de dependências do NestJS
- Criando o primeiro Service - Manualmente ou com NestJS CLI

### 04/01/2025
- Novo módulo (module) e controller (controlador) para a nova aplicação NestJS
- Criando parâmetros de rota de forma dinâmica para o ID do recurso - @Get(':id')
- Usando o decorator @Param para ler valores dos parâmetros de rota
- Método HTTP POST e decorator @Post - Uma rota para criar coisas no NestJS
- Usando o @Body para ler valores do corpo da requisição HTTP POST

### 05/01/2025
- Decorator HttpCode e Enum HttpStatus para códigos de status de respostas HTTP
- Rota para atualizar um recado (update) com métodos PATCH ou PUT e decoradores
- Rota para apagar um recado (delete) com método DELETE e decorador Delete
- Query parameters (parâmetros de consulta) da URL para exemplo de paginação

### 06/01/2025
- Configurando o VS Code, tema, Eslint e Prettier para manter um código uniforme
- Criando o provider (service) RecadosService
- Criando uma Entity (Entidade) Recado e concluindo nosso service de BD em memória

### 07/01/2025
- Usando HttpException e NotFoundException para exibir mensagens de erro HTTP
- DTOs (Data Transfer Object) para transportar, validar e transformar dados
- Validando dados de entrada com useGlobalPipes, ValidationPipe e class-validator

### 08/01/2025
- Usando PartialType de Mapped-Types para a validação de campos em UpdateRecadoDto
- Segurança - opções whitelist e forbidNonWhitelisted de ValidationPipe do NestJS
- Converter tipos c/ transform do ValidationPipe e Pipes de Param padrão no NestJS

### 09/01/2025
- Instalando o Banco de Dados PostgreSQL 16 e o DBeaver CE no Windows
- Configurando o TypeOrmModule com PostgreSQL (módulo do TypeORM para NestJS)
- Primeira Entity do TypeOrm no NestJS (primeira tabela na base de dados PSQL)
- Usando InjectRepository e Repository para ler e manipular a entity na tabela
- Usando o Repository para criar (create) e apagar (delete) uma Entity da tabela
- Usando o Repository para atualizar (update) uma Entity na tabela