# Marvel HeroesBook

Examplo de uma aplicação web em [_Create React App_](https://github.com/facebookincubator/create-react-app) que lista os heróis da Marvel com opção de favoritar os seus heróis e também ver as informações de cada personagem.

### **Importante**

A `Marvel API` tem um limite de `3.000` requições diárias, dependendo da quantidade de requisições feitas no dia, pode acabar ultrapassando o limite e o projeto não funcionar. Caso isso aconteça, [crie uma conta](https://developer.marvel.com/documentation/getting_started) da `Marvel` e utilize as suas chaves, alterando as variáveis do arquivo abaixo:

`./src/config/config.js`

```
const publicKey = 'YOUR_PUBLIC_KEY'
const privateKey = 'YOUR_PRIVATE_KEY'
```

---

## Bibliotecas Utilizadas

-   [Redux](http://redux.js.org/)
-   [React Router](https://reacttraining.com/react-router/)
-   [Crypto-js](https://github.com/brix/crypto-js)
-   [Axios](https://github.com/axios/axios)

---

## Instalação

```
$ git clone https://github.com/takebo/marvel-heroesbook.git
$ cd marvel-heroesbook
$ npm install
$ npm start
```

## Implementações

-   [x] Listagem de super heróis.
-   [ ] Listagem personagens favoritados.
-   [ ] Paginação.
-   [ ] Ordenação da lista de heróis.
-   [ ] Criar mais filtros.
-   [ ] Opção para favoritar o herói na pagina de listagem e detalhes.
-   [x] Layout responsivo.
-   [x] Rotas.
-   [x] Consumo de API.
-   [ ] Redux.
-   [ ] Testes de layout e de integração.
