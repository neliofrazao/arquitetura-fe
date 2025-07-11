## O que veremos?

### Configuração do projeto

- Configurar o ESlint
- Confighurar o Prettier
- Configurar o EditorConfig

### Components

- Meu primeiro componente
- Utilização de Props para passagem de dados entre componente
- Propriedades opcionais e padrões (defaultProps)

### Tipagem typescript

- Interfaces
- Enum
- Type

### State e Ciclo de Vida dos Componentes

- Gerenciamento de estado com o Hook useState
- Compreendendo o ciclo de vida dos componentes funcionais com o Hook useEffect
- Lidando com efeitos colaterais em componentes

### Trabalhando com Formulários

- Criando formulários controlados
- Lidando com eventos de formulários
- Validando dados de entrada com TypeScript

### Requisições HTTP com Axios

- Introdução ao Axios e configuração
- Realizando requisições GET, POST, PUT e DELETE
- Tratamento de erros e feedback ao usuário

### Rotas

- Configurando e utilizando o React Router
- Navegação entre diferentes componentes
- Passagem de parâmetros pela URL

### Hooks Avançados

- Utilizando outros hooks como useContext e useReducer
- Criando hooks personalizados

## Descrição

Projeto desenvolvido para servir de apoio e referência para os alunos de pós graduação em Desenvolvimento de Aplicações Web na disciplina de Introdução a programação com scripts

## Available Scripts

No diretório do projeto, você pode executar:

### `npm run dev`

Executa o aplicativo no modo de desenvolvimento.
Open [http://localhost:5173/](http://localhost:5173/) para visualizá-lo em seu navegador.

### JSON Server

#### Instalação

```
npm install -g json-server
```

#### Criando a base de dados

Crie um arquivo de nome _db.json_ na raiz do projeto.

```json
{
  "filmes": [
    {
      "id": "1",
      "titulo": "Matrix",
      "genero": "Ficção Científica",
      "estrelas": 5,
      "sinopse": "Um hacker descobre a verdade sobre a realidade.",
      "assistido": true
    },
    {
      "id": "2",
      "titulo": "A Origem",
      "genero": "Ação",
      "estrelas": 4,
      "sinopse": "Um ladrão que invade sonhos precisa de uma última missão.",
      "assistido": false
    }
  ]
}
```

#### Iniciando o servidor

Execute o comando para inicar o servidor. Por padrão a API vai funcionar no enderço: http://localhost:3000

```
json-server --watch db.json
```

**Rotas** filme:

| Request    | URL       | Observações                     |
| ---------- | --------- | ------------------------------- |
| **GET**    | /filmes   | Busca todos os filmes           |
| **GET**    | /filmes/1 | Busca por um filme              |
| **POST**   | /filmes   | Salva um filme na base de dados |
| **PUT**    | /filmes/1 | Atualiza os dados do filme      |
| **DELETE** | /filmes/1 | Remove um filme                 |



## Desafio - PROJETO RICK AND MORTY API

#### Objetivo

<p>O objetivo desse desafio é medir o conhecimento do aluno em relação ao desenvolvimento de aplicativos Web com foco no front-end.</p>

#### Link do figma

https://www.figma.com/design/HqaxMspNeWLU7zYY3qRtWA/Rick-and-Morty-Project?node-id=0-1&m=dev&t=LwTSjsBr1ej9zhQN-1

#### API

https://rickandmortyapi.com/

#### Necessário para o desenvolvimento

- https://vitejs.dev/ (Para criar o projeto)
- https://reactrouter.com/en/main ( Para criar rotas no projeto)
- https://axios-http.com/ptbr/docs/intro ( Consumir as APIS)

#### Requisitos

<p> O desafio deverá conter um cabelhaço com um menu para a lista de Personagens, Episódios e Localização</p>

#### Página de lista de personagens

**Cada card de personagem deve exibir:**

- Nome do personagem;
- Foto do personagem;
- Status do personagem;
- Espécie do personagem;
- Localização do personagem;
- schema: https://rickandmortyapi.com/documentation/#character-schema.

**Comportamento esperado:**

<p>Ao clicar em um card na listagem de personagens o usuário deve ser redirecionado para a página de detalhamento do persoagem clicado.</p>

#### Página de detalhamento do personagem

**Deve ser exibida as seguintes informações na página detalhamento:**

- Nome do personagem;
- Foto do personagem;
- Status do personagem;
- Espécie do personagem;
- Origem do personagem;
- Localização do personagem;
- lista com o nome dos episódios no qual o personagem aparece.
- schema: https://rickandmortyapi.com/documentation/#character-schema

**Comportamento esperado:**

<p>Ao clicar em qualquer item da lista episódios usuário deve ser redirecionado para a página de detalhamento do episódio clicado.</p>

#### Página de lista de episódios

**Cada card de episódios deve exibir:**

- Nome do Episódio
- Data de estreia
- schema:https://rickandmortyapi.com/documentation/#episode-schema

**Comportamento esperado:**

<p>Ao clicar em um card na listagem de espisódios o usuário deve ser redirecionado para a página de detalhamento do episódio clicado.</p>

#### Página de Detalhamento do episódio

**Deve ser exibida as seguintes informações no detalhamento de cada episódio:**

- Nome do Episódio;
- Data de estreia;
- Lista de personagens que estão no episódio;
- Para cada item da Lista de personagem deve ter nome, foto e link para o detalhamento do personagem.
- schema: https://rickandmortyapi.com/documentation/#episode-schema

**Comportamento esperado:**

<p>Ao clicar em qualquer item da lista personagens usuário deve ser redirecionado para a página de detalhamento do personagem clicado.</p>

#### Página de lista de localização

**Cada card de localização deve exibir:**

- Nome da localização
- Tipo da localização
- Dimensão da Localização
- schema: https://rickandmortyapi.com/documentation/#location-schema

**Comportamento esperado:**

<p>Ao clicar em um card na listagem de localização o usuário deve ser redirecionado para a página de detalhamento da localização clicada.</p>

#### Página de Detalhamento da localização

**Deve ser exibida as seguintes informações no detalhamento de cada localização:**

- Nome da localização
- Tipo da localização
- Dimensão da Localização
- Lista de personagens que residem nessa localização
- Para cada item da lista de personagem deve ter nome, foto e link para o detalhamento do personagem.
- schema: https://rickandmortyapi.com/documentation/#location-schema
**Comportamento esperado:**
<p>Ao clicar em qualquer item da lista personagens usuário deve ser redirecionado para a página de detalhamento do personagem clicado.</p>

### Importante

#### Adicionais não obrigatórios

<p>Paginação para a listagem de Personagens, Episódios e Localizações.</p>
<p>O adicional irá garantir 2 (dois) pontos na avaliação.</p>

### Prazos

<p>O prazo final para entrega do projeto será  para o dia 29/07, o projeto deverá estar disponivel no GIT(https://github.com/) e o link do repositório deverá ser encaminhado para o email neliofrazac@gmail.com.
Por favor, no assunto informar o seu nome acompanhado o texto “projeto disciplina arquitetura front end”.</p>
<p>No corpo do email deverá conter o nome completo, matrícula e o link do repositório do projeto</p>
