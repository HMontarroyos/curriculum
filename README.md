# Portifolio Criado com Template em Gatsby

<img width="941" alt="portifolio" src="https://user-images.githubusercontent.com/60220406/102154354-f34e3d80-3e57-11eb-834e-0d5198cdcf59.png">


Projeto Utilizado no Workshop Portfolio dev de palco com Gatsby e D3.js DoWhile 2020. 

Template Baseado totalmente no Projeto do anubhavsrivastava
deixo os devidos creditos ao mesmo e o link do Repositorio Original 

[Repositorio Original do Template](https://github.com/anubhavsrivastava/gatsby-starter-resume).

Template Original [aqui](https://anubhavsrivastava.github.io/gatsby-starter-resume/)

### Tecnologias Utilizadas 

 [Documentação do Gatsby ](https://www.gatsbyjs.org/docs/building-with-components/).





## Como Instalar 

Certifique-se de ter o programa Gatsby CLI instalado:

```sh
npm install --global gatsby-cli
```

E execute a partir de sua CLI:

```sh
gatsby new <site-name> https://github.com/anubhavsrivastava/gatsby-starter-resume
```

Então você pode executá-lo:

```sh
cd gatsby-example-site
npm install
gatsby develop
```

### Para Personalizar o Template 

Edite `config.js` para colocar seus detalhes

```javascript
module.exports = {
  siteTitle: 'Gatsby Starter Resume', // <title>
  ...
  firstName: 'Anubhav',
  lastName: 'Srivastava',
  // social
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/anubhavsrivastava',
    }
    ...
  ],
};

```



### Deploying usando a página do Github 

`package.json` tem um script padrão que usa  `gh-pages` módulo para publicar nas páginas do Github. Basta executar para `npm run deploy` publicar o site nas páginas do github.

Além disso, ele também possui um valor de [prefixo de caminho](https://www.gatsbyjs.org/docs/path-prefix/) definido para a configuração de gatsby em `config.js`. Mude `pathPrefix` para o caminho relevante se o seu site gatsby estiver hospedado em um subcaminho de um domínio, `https://theanubhav.com/somePath/`.Se você estiver hospedando-o como site raiz, ou seja `https://theanubhav.com/` , remova a configuração pathPrefix.

### Lista de Comandos do Gatsby

- [gatsby-starter-casual](https://github.com/anubhavsrivastava/gatsby-starter-casual)
- [gatsby-starter-grayscale](https://github.com/anubhavsrivastava/gatsby-starter-grayscale) 
- [gatsby-starter-spectral](https://github.com/anubhavsrivastava/gatsby-starter-spectral)
- [gatsby-starter-newage](https://github.com/anubhavsrivastava/gatsby-starter-newage)
- [gatsby-starter-stylish](https://github.com/anubhavsrivastava/gatsby-starter-stylish)
- [gatsby-starter-solidstate](https://github.com/anubhavsrivastava/gatsby-starter-solidstate)
- [gatsby-starter-readonly](https://github.com/anubhavsrivastava/gatsby-starter-readonly)
- [gatsby-starter-prologue](https://github.com/anubhavsrivastava/gatsby-starter-prologue)
- [gatsby-starter-phantom](https://github.com/anubhavsrivastava/gatsby-starter-phantom)
- [gatsby-starter-paradigmshift](https://github.com/anubhavsrivastava/gatsby-starter-paradigmshift)
- [gatsby-starter-overflow](https://github.com/anubhavsrivastava/gatsby-starter-overflow)
- [gatsby-starter-multiverse](https://github.com/anubhavsrivastava/gatsby-starter-multiverse)
- [gatsby-starter-identity](https://github.com/anubhavsrivastava/gatsby-starter-identity)
- [gatsby-starter-highlights](https://github.com/anubhavsrivastava/gatsby-starter-highlights)
- [gatsby-starter-fractal](https://github.com/anubhavsrivastava/gatsby-starter-fractal)
- [gatsby-starter-eventually](https://github.com/anubhavsrivastava/gatsby-starter-eventually)
- [gatsby-starter-directive](https://github.com/anubhavsrivastava/gatsby-starter-directive)
- [gatsby-starter-creative](https://github.com/anubhavsrivastava/gatsby-starter-creative)
- [gatsby-starter-aerial](https://github.com/anubhavsrivastava/gatsby-starter-aerial)

## 🚀 Let's code! 🚀