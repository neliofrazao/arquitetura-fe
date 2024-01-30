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


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
