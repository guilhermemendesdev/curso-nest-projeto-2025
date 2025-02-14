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

### 10/01/2025
- Criando um módulo (Resource) para Entity "Pessoa" (usuário da nossa aplicação)
- CRUD de Pessoa: criando o create com e-mail único na tabela (unique)
- CRUD de Pessoa: criando o findAll, findOne (Read) e remove (Delete)
- CRUD de Pessoa: criando o Update

### 11/01/2025
- Relações ManyToOne e OneToMany entre Entities Recado e Pessoa
- Injetando dependências de outros módulos c/ "imports" e "exports" de Module
- Criando um Recado com relação ManyToOne com Pessoa
- Usando onDelete e onUpdate CASCADE para propagar alterações com relacionamentos
- Modificando o Updade (Atualização) do Service de Recado para retornar a relação

### 12/01/2025
- DTO e validação de dados para paginação (take/limit e skip/offset do TypeOrm)

### 13/01/2025
- Pipes - como e quando usar um Pipe de Validação e/ou Transformação de dados

### 14/01/2025
- Interceptors - Adicionando cabeçalho à resposta HTTP com NestJS Interceptor
- Interceptors - observando dados antes e depois da execução do método com tap
- Interceptors - capturando e modificando erros globais da aplicação (Exceptions)
- Interceptors - criando um cache simples
- Interceptors - alterando os dados de resposta com map

### 15/01/2025
- Injeção de dependência em Interceptors, Pipes e outras classes (Injectable)
- Usando Interceptors para autorização de token de login (Authorization Token)

### 16/01/2025
- Middleware - Tenha acesso direto à Request e Response do Servidor
- Exception Filters - Filtrando e manipulando exceções no NestJS
- Guards - Como permitir ou negar acesso em rotas do servidor NestJs
- Parâmetros personalizados com createParamDecorator (Custom Param Decorator)

### 17/01/2025
- Refatoração do código

### 18/01/2025
- O básico da injeção de dependências no NestJS (Dependency Injection - DI)
- Encapsulamento e exports do módulo + Dependência circular e forwardRef no NestJS

### 19/01/2025
- Cria módulo de Logs

### 20/01/2025
- Providers com useClass e useValue para entregar tokens e valores diferentes
- Injetando valores que não são classes com "Inject" e "provide" (token)
- Classes abstratas e interfaces com provide e useClass para Padrões de Projeto

### 21/01/2025
- Provide, useFactory e inject para Lógica Avançada na Injeção de Dependências
- Utilizando useFactory com async e await para Gerenciar Providers Assíncronos
- Criando módulos dinâmicos que recebem configuração (NestJS DynamicModule)

### 22/01/2025
- Teoria sobre escopo de providers: Scope.DEFAULT, Scope.REQUEST e Scope.TRANSIENT
- Exemplo para escopo de providers: Scope.DEFAULT, Scope.REQUEST e Scope.TRANSIENT